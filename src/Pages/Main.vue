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
          total-left-to-pay=XX.XX
          :active-loans-count="activeLoans(loans).length"
          :repaid-loans-count="loans.length - activeLoans(loans).length"
        />
    </CardSection>

<!--    Account status section-->
    <CardSection v-if="$route.path === '/'">
      <CardSectionHeader title="Account status">
        <template v-slot:icon>
          <Avatar
            class="w-7 h-7 mr-4 bg-teal text-white"
            icon="fa-solid fa-thumbs-up"
            size="md"
          />
        </template>
      </CardSectionHeader>
      <BaseCard class="flex-col lg:flex-row px-6 sm:px-9 py-7 pr-14 sm:pr-40 lg:pr-20 space-y-7 lg:space-y-0 lg:space-x-24">
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
      <div v-if="$route.path === '/'" v-for="loan in activeLoans(loans)" :key=loan.id>
        <LoanCardModalGroup
          :retailer-name="loan.provider === 'upfront' ? 'Upfront loan' : loan.retailerName"
          :loanStatus=loan.status
          :provider=loan.provider
          :purchase-date=loan.purchaseDate
          :loan-start-date=loan.startDate
          :term-length=loan.termLength
          :loan-status=loan.status
          :deposit-value=loan.depositValue
          :total-order-value=loan.totalOrderValue
          :total-interest-value=loan.totalInterestValue
          :total-loan-value=Number(loan.totalOrderValue+loan.totalInterestValue)
          monthly-payback-value="XXX.XX"
          :value-repaid=valueRepaid(loan.transactions).toFixed(2)
          :value-left-to-pay=(loan.totalOrderValue-loan.depositValue+loan.totalInterestValue-valueRepaid(loan.transactions)).toFixed(2)
          :loan-upcoming-payment=loan.upcomingInstalmentValue
          :loan-upcoming-payment-date=loan.upcomingInstalmentDate
          :loan-previous-payment=loan.previousInstalmentValue
          :loan-previous-payment-date=loan.previousInstalmentDate
          :order-items=loan.orderItems
          current-last-four-digits="1234"
          :transactions=loan.transactions
          :instalments=loan.instalments
        />
      </div>
      <div v-else v-for="loan in loans" :key=loan.id>
        <LoanCardModalGroup
          :retailer-name="loan.provider === 'upfront' ? 'Upfront loan' : loan.retailerName"
          :loanStatus=loan.status
          :provider=loan.provider
          :purchase-date=loan.purchaseDate
          :loan-start-date=loan.startDate
          :term-length=loan.termLength
          :loan-status=loan.status
          :deposit-value=loan.depositValue
          :total-order-value=loan.totalOrderValue
          :total-interest-value=loan.totalInterestValue
          :total-loan-value=Number(loan.totalOrderValue+loan.totalInterestValue)
          monthly-payback-value="XXX.XX"
          :value-repaid=valueRepaid(loan.transactions).toFixed(2)
          :value-left-to-pay=(loan.totalOrderValue-loan.depositValue+loan.totalInterestValue-valueRepaid(loan.transactions)).toFixed(2)
          :loan-upcoming-payment=loan.upcomingInstalmentValue
          :loan-upcoming-payment-date=loan.upcomingInstalmentDate
          :loan-previous-payment=loan.previousInstalmentValue
          :loan-previous-payment-date=loan.previousInstalmentDate
          :order-items=loan.orderItems
          current-last-four-digits="1234"
          :transactions=loan.transactions
          :instalments=loan.instalments
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

function valueRepaid(arr) {

  const repaymentsOnly = arr.filter(function(el)
    {
      return el.description === 'Loan payment'
    }
  )

  const sum = repaymentsOnly.reduce((acc, transaction) => {
    return acc + (transaction.credit)
  }, 0);

  return sum;
}

function activeLoans(arr) {
  const isRepaidOnly = arr.filter(function(el) {
      return el.isRepaid === false
    }
  )
  return isRepaidOnly
}

// function nextInstalment(arr) {
//   const unpaidInstalments = arr.filter(function(el)
//       {
//         return el.status !== 'paid'
//       }
//   )
//
//   const nextAmountDue = unpaidInstalments[0]
//
//   return nextAmountDue
// }

// const activeLoans = loans.filter(findActiveLoans)

// function filteredLoans(loan) {
//   if(router.currentRoute === '/') {
//     return activeLoans
//   }
//   else loans
// }

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