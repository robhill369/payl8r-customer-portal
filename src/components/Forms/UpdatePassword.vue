<template>
  <div class="w-full flex flex-col space-y-6">
    <BaseForm
        class="lg:pr-28"
        title="Change my password"
        button-name="Change password">
      <FormTextInput label="Enter your current password"/>
      <FormTextInput label="Enter a new password"/>
      <FormTextInput label="Repeat new password"/>
    </BaseForm>
  </div>
</template>

<script setup>

import PaymentCardUpdated from "@/components/Notifications/PaymentCardUpdated.vue";
import VisaLogo from "@/components/icons/VisaLogo.vue";
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";
</script>