<template>
  <BaseCard class="flex-col lg:flex-row p-8 pt-6 px-6 sm:px-9 lg:pt-6 lg:pb-[34px] lg:pr-16 xl:pr-36 3xl:pr-80 justify-between space-y-2 lg:space-y-0">
    <div class="flex flex-col justify-between space-y-2">
      <div class="text-figure">£{{totalLeftToPay}}</div>
      <p class="font-bold text-gray">Left to pay</p>
    </div>
    <div class="flex w-52 sm:w-64 justify-between lg:pr-6">
      <div class="flex flex-col justify-between space-y-2">
        <div class="text-figure">{{activeLoansCount}}</div>
        <p class="font-bold text-gray">Active loans</p>
      </div>
      <div class="flex flex-col justify-between space-y-2">
        <div class="text-figure">{{repaidLoansCount}}</div>
        <p class="font-bold text-gray">Repaid loans</p>
      </div>
    </div>
  </BaseCard>
</template>
<script setup>
import BaseCard from "@/components/Cards/Base.vue";

defineProps({
  totalLeftToPay: {
    type: Number,
  },
  activeLoansCount: {
    type: Number,
  },
  repaidLoansCount: {
    type: Number,
  }
})
</script>