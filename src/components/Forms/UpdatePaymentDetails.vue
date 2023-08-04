<template>
  <div class="w-full flex flex-col space-y-6">
    <h4 class="pb-1.5">My payment card</h4>
    <div class="flex h-14 bg-gray-light rounded-lg py-3 px-6 items-center text-gray-darker sm:w-64 justify-between">
      <VisaLogo class="w-8"/>
      <div class="flex pr-[10%] sm:pr-0">
        <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>
      </div>
    </div>
    <div class="lg:w-96 xl:w-[600px]">
      <PaymentCardNotification/>
    </div>
    <BaseForm
        class="lg:pr-28 pt-6"
        title="Update my payment card"
        button-name="Submit card details"
    >
      <FormTextInput
          title="Card number"
          id="card-number"
      />
      <div class="flex flex-col lg:flex-row lg:space-x-8 space-y-7 lg:space-y-0 ">
        <FormTextInput
            title="Expiry date (mm/yy)"
            id="card-expiry-date"
        />
        <FormTextInput
            title="CVV"
            id="cvv"
        />
      </div>
    </BaseForm>
  </div>
</template>

<script setup>
import PaymentCardNotification from "@/components/Notifications/PaymentCard.vue";
import VisaLogo from "@/components/icons/VisaLogo.vue";
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";

defineProps ({
  currentLastFourDigits: {
    type: Number,
    required: true,
  }
})
</script>
