<template>
  <PageBase>
    <div>
      <div v-if="$route.path === '/'">
        <h2 class="capitalize">Hey {{user.firstName}},</h2>
        <div class="mt-4 text-md text-gray">This is your Payl8r dashboard</div>
      </div>
<!--      v-if Notifications-->
      <div v-if="1 === 2" class="pt-12 space-y-5">
        <PaymentSuccessfulNotification v-if="1 === 2"/>
        <PaymentsOverdueNotification v-if="loanStatuses.includes('Payment overdue')">
          <p v-if="loanStatuses.includes('Payment overdue')">Instalments are overdue. Pay within 28 days of their due date to avoid late fees.</p>
          <p v-if="loanStatuses.includes('Urgent') && !loanStatuses.includes('Payment overdue')">Pay unpaid late fees soon to avoid potential negative effects to your credit file.</p>
        </PaymentsOverdueNotification>
      </div>
    </div>
<!--    My overview section-->
    <CardSection>
        <CardSectionHeader title="My overview" v-if="$route.path === '/'"/>
        <PaymentsCard
          :total-left-to-pay="(remainingBalance.reduce((acc, obj) => {return acc + obj}, 0)).toFixed(2)"
          :active-loans-count="loans.filter(item => item.isActive).length"
          :repaid-loans-count="loans.length - loans.filter(item => item.isActive).length"
        />
    </CardSection>

<!--    Account status section-->
    <CardSection v-if="$route.path === '/'">
      <CardSectionHeader :title="!loanStatuses.includes('Payment overdue') && !loanStatuses.includes('Urgent') ? 'Your account is in great shape' : 'Your account needs attention'">
        <template v-slot:icon>
          <Avatar
            class="w-7 h-7 mr-4"
            :class="!loanStatuses.includes('Payment overdue') && !loanStatuses.includes('Urgent') ? 'bg-teal text-white' : 'bg-white text-red-dark'"
            :icon="!loanStatuses.includes('Payment overdue') && !loanStatuses.includes('Urgent') ? 'fa-solid fa-thumbs-up' : 'fa-solid fa-circle-exclamation'"
            :size="!loanStatuses.includes('Payment overdue') && !loanStatuses.includes('Urgent') ? '' : '2xl'"
          />
        </template>
      </CardSectionHeader>
      <BaseCard class="flex-col lg:flex-row pr-14 sm:pr-40 lg:pr-9 xl:pr-28 3xl:pr-72 space-y-7 lg:space-y-0 lg:space-x-24">
        <PaymentsSchedule
          :upcoming-instalment=upcomingInstalment
          :last-payment=lastPayment
        />
      </BaseCard>
    </CardSection>

<!--    My (active) loans section-->
    <CardSection>
      <CardSectionHeader :title="$route.path === '/' && loans.length > 1 ? 'My active loans' : 'My loans'">
        <template v-slot:button v-if="$route.path === '/'">
          <router-link to="/my-loans">
            <PrimaryButton
                v-if="loans.length !== 1"
                name="View all loans"
            />
          </router-link>
        </template>
<!--        <template v-slot:tabs v-else>-->
<!--          <Tabs-->
<!--            :tabs=loanTypes-->
<!--          />-->
<!--        </template>-->
      </CardSectionHeader>
        <div v-for="loan in filteredLoans(orderedLoans)" :key=loan.id>
          <LoanCardModalGroup
            @tally="balanceSum($event)"
            @status="collateLoanStatuses($event)"
            :retailer-Description="loan.provider === 'upfront' ? 'Upfront loan' : loan.retailerDescription"
            :provider=loan.provider
            :purchase-date=loan.purchaseDate
            :contract-sign-date=loan.contractSignDate
            :term-in-months=loan.termInMonths
            :deposit-amount=loan.depositAmount
            :original-order-amount=loan.originalOrderAmount
            :total-interest-amount=loan.totalInterestAmount
            :total-loan-value=(loan.originalOrderAmount+loan.totalInterestAmount-loan.depositAmount)
            :value-repaid=paidAmount(loan.instalments)+Number(paidAmount(loan.outOfTermCharges))
            :value-left-to-pay=(loan.originalOrderAmount-loan.depositAmount+loan.totalInterestAmount-paidAmount(loan.instalments)-paidAmount(loan.outOfTermCharges)+dueAmount(loan.outOfTermCharges))
            :upcoming-instalment=loan.upcomingInstalment
            :last-payment=loan.lastPayment
            :order-items=loan.orderItems
            :current-last-four-digits=user.cardNumber
            :transactions=loan.transactions
            :instalments=loan.instalments
            :out-of-term-charges=loan.outOfTermCharges
            :out-of-term-charges-amount="dueAmount(loan.outOfTermCharges)"
            :is-repaid=loan.isRepaid
            :current-instalment=currentInstalment(loan.instalments)
          />
        </div>
    </CardSection>
    <CardSection>
      <CardSectionHeader title="Keeping your account healthy">
        <p class="text-gray pt-4">Tips and actions to keep your account running smoothly</p>
      </CardSectionHeader>
      <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <SimpleCard
          avatar-colors="bg-pink-light text-pink"
          icon="fa-solid fa-credit-card"
          title="Changed your card?"
          body="Let us know now and avoid any repayment hiccups."
        />
        <SimpleCard
          avatar-colors="bg-pink-light text-pink"
          icon="fa-solid fa-message"
          title="Here to help"
          body="Need to change something or update us? Right this way."
        />
      </div>
    </CardSection>
  </PageBase>
</template>

<script setup>
import moment from "moment";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import PaymentsCard from "@/components/Cards/Payments.vue";
import CardSection from "@/Layout/CardSection.vue";
import SimpleCard from "@/components/Cards/Simple.vue";
import CardSectionHeader from "@/Layout/CardSectionHeader.vue";
import PrimaryButton from "@/components/Buttons/Secondary.vue";
import Avatar from "@/components/Avatar.vue";
import PageBase from "@/Pages/Base.vue";
import Tabs from "@/components/Tabs.vue";
import BaseCard from "@/components/Cards/Base.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";
import LoanCardModalGroup from "@/Layout/LoanCardModalGroup.vue";
import PaymentSuccessfulNotification from "@/components/Notifications/PaymentSuccessful.vue";
import PaymentsOverdueNotification from "@/components/Notifications/PaymentsOverdue.vue";

import schemaData from '@/assets/json/schema.json'
import useDateFormat from "@/composables/useDateFormat";

const emit = defineEmits(['show'])

const user = schemaData.user
const loans = schemaData.loans

const remainingBalance = ref([])
const loanStatuses = ref([])
const orderedLoans = ref([])
const lastPayment = ref('')
const upcomingInstalment = ref('')

onMounted(() => {
  if(loans.length === 1) {
    emit('show')
  }

  const loansOrderedByLastPaymentDate = loans.sort((loanA, loanB) => new Date(loanA.lastPayment.date) - new Date(loanB.lastPayment.date))
  lastPayment.value = loansOrderedByLastPaymentDate[loansOrderedByLastPaymentDate.length-1].lastPayment

  const loansOrderedByUpcomingInstalmentDate = loans.sort((loanA, loanB) => new Date(loanA.upcomingInstalment.date) - new Date(loanB.upcomingInstalment.date))
  upcomingInstalment.value = loansOrderedByUpcomingInstalmentDate[0].upcomingInstalment

  loans.forEach((loan) => {
    const remainingLateFeePayments = (arr) => {
      const newArray = []
      arr.forEach((item) => {
        if((item.lateFee.dueAmount - item.lateFee.paidAmount !== 0) && !item.lateFee.isWaived && !item.lateFee.isAutoWaivable) {
          newArray.push(item.lateFee.dueAmount - item.lateFee.paidAmount)
        }
      })
      return newArray
    }

    const endDate = moment(loan.instalments[loan.instalments.length-1].dueDates[0], 'YYYY-MM-DD')
    loan['endDate'] = endDate
    orderedLoans.value.push(loan)
  })
  orderedLoans.value.sort(
    (loanA, loanB) => loanA.endDate - loanB.endDate
  )
  orderedLoans.value.forEach((loan, index) => {
    if(!loan.isActive) {
      orderedLoans.value.push(orderedLoans.value.splice(index, 1)[0]);
    }
  })
})

const collateLoanStatuses = (event) => {
  loanStatuses.value.push(event)
}

function paidAmount(arr) {
  if(arr) {
    const paidArray = arr.filter(function (el) {
      return el.paidAmount !== 0
    })
    const sum = paidArray.reduce((acc, obj) => {
      return acc + (obj.paidAmount)
    }, 0);
    return sum;
  }
  else return 0
}

const currentInstalment = (arr) => {
  if(arr)
    return arr.find(item => item.isDue !== true
  )
}

function dueAmount(arr) {
  if(arr) {
    return arr.reduce((acc, obj) => {
      return acc + (obj.dueAmount)
    }, 0);
  }
  else return 0
}

const route = useRoute()

function filteredLoans(arr) {
  if(route.path === '/') {
    return arr.filter(function (loan) {
      return loan.isActive
    })
  }
  return arr
}

const balanceSum = (val) => {
  remainingBalance.value.push(val)
}

const loanTypes = [
  {
    name: 'All loans',
  },
  {
    name: 'Payl8r loans',
  },
  {
    name: 'Upfront loans',
  },
  {
    name: 'Payl8r business',
  },
]

</script>