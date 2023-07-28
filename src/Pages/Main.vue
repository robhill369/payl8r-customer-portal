<template>
  <PageBase>
    <div>
      <div>
        <h2>Hey, Username</h2>
        <div class="mt-4 text-md text-gray">This is your Payl8r dashboard</div>
      </div>
<!--      v-if Notifications-->
<!--      <div>-->
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
        <CardSectionHeader title="My overview"/>
        <PaymentsCard/>
    </CardSection>

<!--    Account status section-->
    <CardSection v-if="isOverviewPage">
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
          upcomingPayment=20.00
          upcomingPaymentDate='5th Feb 2023'
          previousPayment=20.00
          previousPaymentDate='5th Feb 2023'
        />
      </BaseCard>
    </CardSection>

<!--    My (active) loans section-->
    <CardSection>
      <CardSectionHeader :title="isOverviewPage ? 'My active loans' : 'My loans'">
        <template v-slot:button v-if="isOverviewPage">
          <PrimaryButton
              name="View all loans"
          />
        </template>
        <template v-slot:tabs v-else>
          <Tabs/>
        </template>
      </CardSectionHeader>
<!--      v-for required for active loans-->
        <LoanCard
          retailer-name="RETAILER NAME"
          loan-start-date="STARTDATE"
          avatar-colors="bg-pink-light text-pink-dark"
          monthly-payback-value=XX.XX
          loan-status="STATUS"
          total-loan-value=XX.XX
          total-order-value=XX.XX
          value-left-to-pay=XX.XX
          loan-upcoming-payment=XX.XX
          loan-upcoming-payment-date="UPCOMINGPAYDATE"
          loan-previous-payment="XX.XX"
          loan-previous-payment-date="LSTPAYDATE"
          interest-free-period="XX"
          current-last-four-digits="XXXX"
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
import PaymentCardUpdatedNotification from "@/components/Notifications/PaymentCardUpdated.vue";
import OrderHelpNotification from "@/components/Notifications/OrderHelp.vue";
import UpdateDetailsHelpNotification from "@/components/Notifications/UpdateDetailsHelp.vue";
import BaseCard from "@/components/Cards/Base.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";

const isOverviewPage = true

</script>