<template>
  <ButtonSecondary
    class="md:w-fit w-full flex justify-center"
    :name=buttonName
    :icon=buttonIcon
    @click="modalOpen = true"
  />
  <teleport to="body" v-if="modalOpen">
    <LoanActionModal
      :retailer-description="retailerDescription"
      :title=modalTitle
      :is-payment=isPayment
      @close="modalOpen = false"
      :current-last-four-digits=currentLastFourDigits
      :payment-type=paymentType
      :array=array
    >
      <slot/>
    </LoanActionModal>
  </teleport>
</template>
<script setup>
import {ref} from "vue";
import LoanActionModal from "@/components/Modals/LoanAction.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";

defineProps({
  retailerDescription: {
    type: String,
  },
  buttonName: {
    type: String,
    required: true
  },
  buttonIcon: {
    type: String,
  },
  isPayment: {
    type: Boolean,
    default: false
  },
  modalTitle: {
    type: String,
    required: true
  },
  paymentType: {
    type: String
  },
  currentLastFourDigits: {
    type: Number
  },
  array: {
    type: Array,
  }
})

const modalOpen = ref(false)
</script>