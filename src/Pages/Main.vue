<template>
  <PageBase>
    <div>
      <div v-if="$route.path === '/'">
        <h2>Hey, USERNAME</h2>
        <div class="mt-4 text-md text-gray">This is your Payl8r dashboard</div>
      </div>
<!--      v-if Notifications-->
<!--      <div class="pt-12" >-->
<!--                    v-for Notification in Notifications-->
<!--        <PaymentSuccessfulNotification class="mb-4"/>-->
<!--        <PaymentCardUpdatedNotification class="mb-4"/>-->
<!--        <PaymentsOverdueNotification class="mb-4"/>-->
<!--        <OrderHelpNotification/>-->
<!--        <UpdateDetailsHelpNotification/>-->
<!--      </div>-->
    </div>

<!--    My overview section-->
    <CardSection>
        <CardSectionHeader title="My overview" v-if="$route.path === '/'"/>
        <PaymentsCard
          :total-left-to-pay=remainingBalance.toFixed(2)
          :active-loans-count="loans.filter(item => item.isActive).length"
          :repaid-loans-count="loans.length - loans.filter(item => item.isActive).length"
        />
    </CardSection>

<!--    Account status section-->
    <CardSection v-if="$route.path === '/'">
      <CardSectionHeader :title="1 === 2 ? 'Your account is in great shape' : 'Your account needs attention'">
        <template v-slot:icon>
          <Avatar
            class="w-7 h-7 mr-4"
            :class="1 === 2 ? 'bg-teal text-white' : 'bg-white text-red-dark'"
            :icon="1 === 2 ? 'fa-solid fa-thumbs-up' : 'fa-solid fa-circle-exclamation'"
            :size="1 === 2 ? 'md' : '2xl'"
          />
        </template>
      </CardSectionHeader>
      <BaseCard class="flex-col lg:flex-row px-6 sm:px-9 py-7 pr-14 sm:pr-40 lg:pr-9 xl:pr-28 3xl:pr-72 space-y-7 lg:space-y-0 lg:space-x-24">
        <PaymentsSchedule
          upcomingPayment=XX.XX
          upcomingPaymentDate=UPCPAYDATE
          previousPayment=XX.XX
          previousPaymentDate=PRVPAYDATE
        />
      </BaseCard>
    </CardSection>
<!--    My (active) loans section-->
    <CardSection>
      <CardSectionHeader :title="$route.path === '/' ? 'My active loans' : 'My loans'">
        <template v-slot:button v-if="$route.path === '/'">
          <router-link to="/my-loans">
            <PrimaryButton
                name="View all loans"
            />
          </router-link>
        </template>
        <template v-slot:tabs v-else>
          <Tabs
            :tabs=loanTypes
          />
        </template>
      </CardSectionHeader>
        <div v-for="loan in filteredLoans(loans)" :key=loan.id>
          <LoanCardModalGroup
            @tally="balanceSum"
            :retailer-name="loan.provider === 'upfront' ? 'Upfront loan' : loan.retailerName"
            :provider=loan.provider
            :purchase-date=loan.purchaseDate
            :loan-start-date=loan.startDate
            :term-length=loan.termLength
            :deposit-value=loan.depositValue
            :total-order-value=loan.totalOrderValue
            :total-interest-value=loan.totalInterestValue
            :total-loan-value=(loan.totalOrderValue+loan.totalInterestValue).toFixed(2)
            :value-repaid=Number(valuePaid(loan.instalments)+valuePaid(loan.outOfTermCharges)).toFixed(2)
            :value-left-to-pay=Number(loan.totalOrderValue-loan.depositValue+loan.totalInterestValue-valuePaid(loan.instalments)-valuePaid(loan.outOfTermCharges)+valueDue(loan.outOfTermCharges)).toFixed(2)
            :loan-upcoming-payment=loan.upcomingInstalmentValue
            :loan-upcoming-payment-date=loan.upcomingInstalmentDate
            :loan-previous-payment=loan.previousInstalmentValue
            :loan-previous-payment-date=loan.previousInstalmentDate
            :order-items=loan.orderItems
            current-last-four-digits="1234"
            :transactions=loan.transactions
            :instalments=loan.instalments
            :out-of-term-charges=loan.outOfTermCharges
            :out-of-term-charges-due="valueDue(loan.outOfTermCharges)"
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
import {ref} from "vue";
import {useRoute} from "vue-router";
import PaymentsCard from "@/components/Cards/Payments.vue";
import CardSection from "@/Layout/CardSection.vue";
import SimpleCard from "@/components/Cards/Simple.vue";
import CardSectionHeader from "@/Layout/CardSectionHeader.vue";
import PrimaryButton from "@/components/Buttons/Primary.vue";
import Avatar from "@/components/Avatar.vue";
import PageBase from "@/Pages/Base.vue";
import Tabs from "@/components/Tabs.vue";
import BaseCard from "@/components/Cards/Base.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";
import LoanCardModalGroup from "@/Layout/LoanCardModalGroup.vue";

import loanData from '@/assets/json/loans.json';

const loans = loanData

const remainingBalance = ref(0.00)

function valuePaid(arr) {
  if(arr) {
    const paidArray = arr.filter(function (el) {
      return el.amountPaid !== 0
    })
    const sum = paidArray.reduce((acc, obj) => {
      return acc + (obj.amountPaid)
    }, 0);
    return sum;
  }
  else return 0
}

const currentInstalment = (arr) => {
  if(arr)
    return arr.find(item => item.hasLapsed !== true
  )
}

function valueDue(arr) {
  if(arr) {
    return arr.reduce((acc, obj) => {
      return acc + (obj.amountDue)
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
  return remainingBalance.value += val
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