<template>
  <BaseCard class="flex-col lg:flex-row p-8 pt-6 px-6 sm:px-9 lg:pt-6 lg:pb-[34px] justify-between space-y-2 lg:space-y-0">
    <div class="flex flex-col justify-between space-y-2">
      <div class="text-figure">£00.00</div>
      <p class="font-bold text-gray">Left to pay</p>
    </div>
    <div class="flex w-52 sm:w-64 justify-between lg:pr-6">
      <div class="flex flex-col justify-between space-y-2">
        <div class="text-figure">1</div>
        <p class="font-bold text-gray">Active loans</p>
      </div>
      <div class="flex flex-col justify-between space-y-2">
        <div class="text-figure">2</div>
        <p class="font-bold text-gray">Repaid loans</p>
      </div>
    </div>
  </BaseCard>
</template>
<script setup>
import BaseCard from "@/components/Cards/Base.vue";
</script>