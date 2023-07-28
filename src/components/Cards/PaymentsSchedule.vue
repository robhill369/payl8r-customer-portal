<template>
  <div class="flex flex-col lg:flex-row w-full justify-between space-y-7 lg:space-y-0">
    <div class="flex flex-col w-full lg:w-2/5 3xl:pr-56 space-y-4">
      <h5 class="text-gray">Upcoming payment</h5>
      <div class="w-full">Your next payment of <span class="font-bold">£{{upcomingPayment}}</span> will be taken on <span class="font-bold">{{upcomingPaymentDate}}</span></div>
    </div>
    <div class="flex flex-col lg:w-52 xl:w-64 3xl:w-96 3xl:mr-24 3xl:pr-32 space-y-4"
    :class="isLoanCard ? 'lg:w-[304px] xl:mr-24 2xl:mr-12' : ''"
    >
      <h5 class="text-gray">Last payment</h5>
      <div class="w-full">Your last payment of <span class="font-bold">£{{previousPayment}}</span> was taken successfully on <span class="font-bold">{{previousPaymentDate}}</span></div>
    </div>
  </div>
</template>
<script setup>
import TitledCopy from "@/Layout/TitledCopy.vue";
import BaseCard from "@/components/Cards/Base.vue";

const props = defineProps({
  isLoanCard: {
    type: Boolean,
    default: false
  },
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