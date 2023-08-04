<template>
  <div class="w-full flex flex-col space-y-6">
    <BaseForm
        class="lg:pr-28"
        title="Update my details"
        button-name="Submit new details">
      <template v-slot:helper>
        <div class="3xl:w-[500px]">
          <UpdateDetailsHelpNotification class="mt-8 lg:-mr-12"/>
        </div>
      </template>
      <FormTextInput
        title="Legal name"
        id="legal-name"
        disabled
        :current-value-placeholder=currentLegalName
      />
      <FormTextInput
        title="Email address"
        id="email"
        disabled
        :current-value-placeholder=currentEmail
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
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";
import UpdateDetailsHelpNotification from "@/components/Notifications/UpdateDetailsHelp.vue";

defineProps ({
  currentLegalName: {
    type: String,
    required: true,
  },
  currentEmail: {
    type: String,
    required: true,
  }
})
</script>