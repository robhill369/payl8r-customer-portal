<template>
  <PageBase>
    <CardSection>
        <h2 class="font-bold">Help centre</h2>
        <OrderHelpNotification/>
    </CardSection>
    <CardSection>
      <CardSectionHeader title="Ways to get in touch with Payl8r">
      </CardSectionHeader>
      <SimpleCard
          avatar-colors="bg-teal text-gray-darker"
          icon="fa-solid fa-comments"
          title="Live chat"
          body="Chat with a member of our team now"
      />
      <SimpleCard
          avatar-colors="bg-teal text-gray-darker"
          icon="fa-solid fa-envelope"
          title="Email us"
          body="We’ll get back to you as quickly as possible"
      />
      <SimpleCard
          avatar-colors="bg-teal text-gray-darker"
          icon="fa-solid fa-phone"
          title="Direct call"
          body="We’re here Monday - Friday from 8am to 6.30pm"
      />
    </CardSection>

    <CardSection>
      <CardSectionHeader title="Ways to get in touch with Payl8r">
      </CardSectionHeader>
      <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <SimpleCard
          avatar-colors="bg-pink-light text-pink -rotate-45"
          icon="fa-solid fa-hand"
          icon-size="2xl"
          title="Here to support you"
          body="If you are unable to payments for any reason, make sure you reach out and together we will come up with a plan to get you back on track."
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
import PaymentsScheduleCard from "@/components/Cards/PaymentsSchedule.vue";
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
import OrderHelp from "@/components/Notifications/OrderHelp.vue";
import PaymentCardUpdated from "@/components/Notifications/PaymentCard.vue";
import Simple from "@/components/Cards/Simple.vue";


</script>