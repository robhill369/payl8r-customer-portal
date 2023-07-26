<template>
  <PageBase>
    <CardSection class="space-y-14">
        <h2 class="font-bold">My Account</h2>
      <UserCard
        :username=username
        :registrationDate=registrationDate
      />
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdatePaymentDetailsForm class="lg:pr-16"
          :current-last-four-digits="currentLastFourDigits"
        />
      </BaseCard>
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdatePasswordForm/>
      </BaseCard>
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdateUserDetailsForm/>
      </BaseCard>
    </CardSection>
  </PageBase>
</template>

<script setup>
import CardSection from "@/Layout/CardSection.vue";
import PageBase from "@/Pages/Base.vue";
import UserCard from "@/components/Cards/User.vue";
import BaseCard from "@/components/Cards/Base.vue";
import UpdatePaymentDetailsForm from "@/components/Forms/UpdatePaymentDetails.vue";
import UpdatePasswordForm from "@/components/Forms/UpdatePassword.vue";
import UpdateUserDetailsForm from "@/components/Forms/UpdateUserDetails.vue";

defineProps ({
  username: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: String,
    required: true,
  },
  currentLastFourDigits: {
    type: Number,
    required: true,
  }
})
</script>