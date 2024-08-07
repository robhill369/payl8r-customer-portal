<template>
  <ButtonSecondary
    class="md:w-fit w-full flex justify-center"
    :name=buttonName
    :icon=buttonIcon
    @click="modalOpen = true"
  />
  <teleport to="body" v-if="modalOpen">
    <ActionModal
      :subject-name=subjectName
      :title=modalTitle
      :is-payment=isPayment
      @close="modalOpen = false"
      :current-last-four-digits=currentLastFourDigits
      :payment-type=paymentType
      :amounts-array=amountsArray
    >
      <slot/>
    </ActionModal>
  </teleport>
</template>
<script setup>
import {ref} from "vue";
import ActionModal from "@/components/Modals/Action.vue";
import ButtonSecondary from "@/components/Buttons/Tertiary.vue";

defineProps({
  subjectName: {
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
  amountsArray: {
    type: Array,
  }
})

const modalOpen = ref(false)
</script>