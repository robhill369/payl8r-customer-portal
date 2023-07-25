<template>
  <BaseCard class="flex-col lg:flex-row px-6 sm:px-9 py-7 lg:pr-20 space-y-7 lg:space-y-0 lg:space-x-24">
    <TitledCopy
      title="Upcoming payment"
      :body="'Your last payment of £' + upcomingPayment + ' will be taken on ' +upcomingPaymentDate"
    />
    <TitledCopy
      title="Last payment"
      :body="'Your last payment of £' + previousPayment + ' was taken successfully on ' +previousPaymentDate"
    />
  </BaseCard>
</template>
<script setup>
import TitledCopy from "@/Layout/TitledCopy.vue";
import BaseCard from "@/components/Cards/Base.vue";

const props = defineProps({
  upcomingPayment: {
    type: Number,
    required: true,
    default: 0
  },
  upcomingPaymentDate: {
    type: Date,
    required: true,
  },
  previousPayment: {
    type: Number,
    required: true,
    default: 0
  },
  previousPaymentDate: {
    type: Date,
    required: true,
  },
})
</script>