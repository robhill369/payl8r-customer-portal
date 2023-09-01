<template>
  <div class="flex flex-col lg:flex-row w-full justify-between space-y-7 lg:space-y-0">
    <div
      v-if="upcomingPaymentDate"
      class="flex flex-col space-y-4"
      :class="previousPaymentDate && isLoanCard ? 'lg:w-72 xl:w-72 3xl:w-[480px]' : 'w-full'"
    >
      <h5 class="text-gray">Upcoming payment</h5>
      <div class="w-full">Your {{ previousPaymentDate ? 'next' : 'first' }} payment of <span class="font-bold">£{{upcomingPayment}}</span> will be taken on <span class="font-bold">{{upcomingPaymentDate}}</span></div>
    </div>
    <div
        v-if="upcomingPaymentDate === null"
        class="flex flex-col space-y-4 "
        :class="previousPaymentDate ? 'lg:w-64 xl:w-80 2xl:w-72 3xl:w-[480px]' : ''"
    >
      <slot/>
    </div>
    <div
      v-if="previousPaymentDate"
      class="flex flex-col space-y-4"
      :class="upcomingPaymentDate && isLoanCard || upcomingPaymentDate === null && isLoanCard? 'lg:w-72 xl:w-80 2xl:w-80 3xl:w-[480px]' : 'lg:w-full lg:pl-1'"
    >
      <h5 class="text-gray">Last payment</h5>
      <div class="w-full">Your last payment of <span class="font-bold">£{{previousPayment}}</span> was taken successfully on <span class="font-bold">{{previousPaymentDate}}</span></div>
    </div>
  </div>
</template>

<script setup>
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