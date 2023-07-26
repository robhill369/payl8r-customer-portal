<template>
  <div class="w-full flex flex-col space-y-6">
    <BaseForm
        class="lg:pr-28"
        title="Update my details"
        button-name="Submit new details">
      <template v-slot:helper >
        <UpdateDetailsHelp class="mt-8 lg:-mr-12"/>
      </template>
      <FormTextInput
        title="Legal name"
        id="legal-name"
      />
      <FormTextInput
        title="Email address"
        id="email"
      />
      <FormTextInput
          title="Home address"
          id="home-address"
      />
      <FormTextInput
          title="Primary phone number"
          id="primary-phone"
      />
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