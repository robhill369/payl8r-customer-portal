<template>
  <PageBase>
    <CardSection class="space-y-14">
        <h2 class="font-bold">My Account</h2>
      <UserCard
        class="capitalize"
        :username="user.firstName+' '+user.lastName"
        :registrationDate=useDateFormat(user.createdAt)
      />
      <BaseCard>
        <UpdatePaymentDetailsForm
          :current-last-four-digits=user.cardNumber
        />
      </BaseCard>
      <BaseCard>
        <UpdatePasswordForm/>
      </BaseCard>
      <BaseCard>
        <UpdateUserDetailsForm
          :current-legal-name=user.legalName
          :current-email=user.email
          :current-home-address=user.homeAddress
          :current-phone-number=user.phoneNumber
        />
      </BaseCard>
    </CardSection>
  </PageBase>
</template>

<script setup>
import useDateFormat from "@/composables/useDateFormat";

import CardSection from "@/Layout/CardSection.vue";
import PageBase from "@/Pages/Base.vue";
import UserCard from "@/components/Cards/User.vue";
import BaseCard from "@/components/Cards/Base.vue";
import UpdatePaymentDetailsForm from "@/components/Forms/UpdatePaymentDetails.vue";
import UpdatePasswordForm from "@/components/Forms/UpdatePassword.vue";
import UpdateUserDetailsForm from "@/components/Forms/UpdateUserDetails.vue";

import schemaData from '@/assets/json/schema.json'

const user = schemaData.user

</script>