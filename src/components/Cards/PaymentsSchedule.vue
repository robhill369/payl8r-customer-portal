<template>
  <div class="flex flex-col lg:flex-row w-full justify-between space-y-7 lg:space-y-0">
    <div
      v-if="upcomingInstalment.date !== null"
      class="flex flex-col space-y-4"
      :class="isLoanCard && lastPayment.date !== null ? 'lg:w-72 xl:w-72 3xl:w-[480px]' : 'w-full'"
    >
      <h5 class="text-gray">Upcoming payment</h5>
      <div>Your next payment of <span class="font-bold">£{{Number(upcomingInstalment.amount).toFixed(2)}}</span> will be taken on <span class="font-bold">{{useDateFormat(upcomingInstalment.date)}}</span></div>
    </div>
    <div
      v-if="isLoanCard"
    >
      <slot/>
    </div>
    <div
      v-if="lastPayment.date !== null"
      class="flex flex-col space-y-4"
      :class="isLoanCard ? 'lg:w-72 xl:w-80 2xl:w-80 3xl:w-[480px]' : 'lg:w-full lg:pl-1'"
    >
      <h5 class="text-gray">Last payment</h5>
      <div class="w-full">Your last payment of <span class="font-bold">£{{Number(lastPayment.amount).toFixed(2)}}</span> was made successfully on <span class="font-bold">{{useDateFormat(lastPayment.date)}}</span></div>
    </div>
  </div>
</template>

<script setup>
import useDateFormat from "../../composables/useDateFormat";

const props = defineProps({
  isLoanCard: {
    type: Boolean,
    default: false
  },
  upcomingInstalment: {
    type: Object
  },
  lastPayment: {
    type: Object
  }
})
</script>