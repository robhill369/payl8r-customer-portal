<template>
  <ButtonSecondary
    class="md:w-fit w-full flex justify-center"
    :name=buttonName
    :icon=buttonIcon
    @click="modalOpen = true"
  />
  <teleport to="body" v-if="modalOpen">
    <LoanActionModal
      :retailer-name="retailerName"
      :title=modalTitle
      :is-payment=isPayment
      @close="modalOpen = false"
      :payment-type=paymentType
      :quantity=quantity
      :value=value
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
  retailerName: {
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
  quantity: {
    type: Number
  },
  value: {
    type: Number
  }
})

const modalOpen = ref(false)
</script>