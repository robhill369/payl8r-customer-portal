<template>
  <PageBase>
    <CardSection class="space-y-14">
        <h2 class="font-bold">My Account</h2>
      <UserCard
        username="USERNAME"
        registrationDate="REG DATE"
      />
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdatePaymentDetailsForm
          current-last-four-digits="FOUR"
        />
      </BaseCard>
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdatePasswordForm/>
      </BaseCard>
      <BaseCard class="px-6 sm:px-9 py-12">
        <UpdateUserDetailsForm
          current-legal-name="CURRENT LEGAL NAME"
          current-email="CURRENT EMAIL ADDRESS"
        />
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
</script>