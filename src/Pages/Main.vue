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
          active-loans-count=X
          repaid-loans-count=X
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
          <PrimaryButton
              name="View all loans"
          />
        </template>
        <template v-slot:tabs v-else>
          <Tabs
              :tabs=loanTypes
          />
        </template>
      </CardSectionHeader>
<!--      v-for required for active loans-->
      <LoanCardModalGroup
        retailer-name="RETAILER NAME"
        loan-start-date="STARTDATE"
        monthly-payback-value=30.30
        current-instalment-status="overdue"
        total-loan-value=260
        total-order-value=20
        value-left-to-pay=100
        loan-upcoming-payment=30.30
        loan-upcoming-payment-date="UPCOMINGPAYDATE"
        loan-previous-payment="50.50"
        loan-previous-payment-date="LSTPAYDATE"
        interest-free-period="30"
        current-last-four-digits="1234"
        :transactions=transactions
        :instalments=instalments
        :late-fees=lateFees
        :order-items=orderItems
      />
      <LoanCardModalGroup
          retailer-name="RETAILER NAME"
          loan-start-date="STARTDATE"
          monthly-payback-value=30.30
          current-instalment-status="paid"
          total-loan-value=260
          total-order-value=20
          value-left-to-pay=100
          loan-upcoming-payment=30.30
          loan-upcoming-payment-date="UPCOMINGPAYDATE"
          loan-previous-payment="50.50"
          loan-previous-payment-date="LSTPAYDATE"
          interest-free-period="30"
          current-last-four-digits="1234"
          :transactions=transactions
          :instalments=instalments
          :late-fees=lateFees
          :order-items=orderItems
      />
      <LoanCardModalGroup
          retailer-name="RETAILER NAME"
          loan-start-date="STARTDATE"
          monthly-payback-value=30.30
          current-instalment-status="paid"
          total-loan-value=260
          total-order-value=20
          value-left-to-pay=100
          loan-upcoming-payment=30.30
          loan-upcoming-payment-date="UPCOMINGPAYDATE"
          loan-previous-payment="50.50"
          loan-previous-payment-date="LSTPAYDATE"
          interest-free-period="30"
          current-last-four-digits="1234"
          :transactions=transactions
          :instalments=instalments
          :late-fees=lateFees
          :order-items=orderItems
      />
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
import PaymentsCard from "@/components/Cards/Payments.vue";
import CardSection from "@/Layout/CardSection.vue";
import LoanCard from "@/components/Cards/Loan.vue";
import SimpleCard from "@/components/Cards/Simple.vue";
import CardSectionHeader from "@/Layout/CardSectionHeader.vue";
import PrimaryButton from "@/components/Buttons/Primary.vue";
import Avatar from "@/components/Avatar.vue";
import PageBase from "@/Pages/Base.vue";
import Tabs from "@/components/Tabs.vue";
import PaymentSuccessfulNotification from "@/components/Notifications/PaymentSuccessful.vue";
import PaymentsOverdueNotification from "@/components/Notifications/PaymentsOverdue.vue";
import PaymentCardUpdatedNotification from "@/components/Notifications/PaymentCard.vue";
import OrderHelpNotification from "@/components/Notifications/OrderHelp.vue";
import UpdateDetailsHelpNotification from "@/components/Notifications/UpdateDetailsHelp.vue";
import BaseCard from "@/components/Cards/Base.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";
import LoanCardModalGroup from "@/Layout/LoanCardModalGroup.vue";



// const isOverviewPage = () => {
//   if($route)
// }

const instalments = [
  {
    number: 1,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'paid'
  },
  {
    number: 2,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'overdue'
  },
  {
    number: 3,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 4,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 5,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 6,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
]
const transactions = [
  {
    date: 'date',
    description: 'description',
    debit: 160.00,
    credit: null,
    balance: 304.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 170.00,
    credit: null,
    balance: 307.00
  },
  {
    date: 'date',
    description: 'Initial purchase amount',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 160.00,
    credit: null,
    balance: 304.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 170.00,
    credit: null,
    balance: 307.00
  },
  {
    date: 'date',
    description: 'description',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
  {
    date: 'date',
    description: 'description',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 160.00,
    credit: null,
    balance: 304.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 170.00,
    credit: null,
    balance: 307.00
  },
  {
    date: 'date',
    description: 'Initial purchase amount',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 160.00,
    credit: null,
    balance: 304.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 170.00,
    credit: null,
    balance: 307.00
  },
  {
    date: 'date',
    description: 'description',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
]

const lateFees = [
  {
    dateDue: 'DATE DUE',
    dateIncurred: 'DATE INCURRED',
    instalment: 1,
    amountDue: '00.00',
    amountPaid: '00.00',
    balance: '00.00',
    status: 'paid'
  },
  {
    dateDue: 'DATE DUE',
    dateIncurred: 'DATE INCURRED',
    instalment: 2,
    amountDue: '00.00',
    amountPaid: '00.00',
    balance: '00.00',
    status: 'waived'
  },
  {
    dateDue: 'DATE DUE',
    dateIncurred: 'DATE INCURRED',
    instalment: 3,
    amountDue: '00.00',
    amountPaid: '00.00',
    balance: '00.00',
    status: 'expected'
  },
]


const orderItems = [
  {
    name: 'product 1',
    qnty: 1,
    price: 10.00
  },
  {
    name: 'product 2',
    qnty: 1,
    price: 30.00
  },
  {
    name: 'product 3',
    qnty: 3,
    price: 20.00
  },
]


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