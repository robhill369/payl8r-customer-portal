<template>
  <div class="w-full flex flex-col space-y-6">
    <BaseForm
        class="lg:pr-28"
        title="Update my details"
        button-name="Submit new details">
      <template v-slot:helper >
        <UpdateDetailsHelp class="mt-8 lg:-mr-12"/>
      </template>
      <FormTextInput label="Legal name"/>
      <FormTextInput label="Email address"/>
      <FormTextInput label="Home address"/>
      <FormTextInput label="Primary phone number"/>
    </BaseForm>
  </div>
</template>

<script setup>

import PaymentCardUpdated from "@/components/Notifications/PaymentCardUpdated.vue";
import VisaLogo from "@/components/icons/VisaLogo.vue";
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";
import UpdateDetailsHelp from "@/components/Notifications/UpdateDetailsHelp.vue";
</script>