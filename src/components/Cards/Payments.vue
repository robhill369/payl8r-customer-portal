<template>
  <BaseCard class="flex-col lg:flex-row p-8 pt-6 px-6 sm:px-9 lg:pt-6 lg:pb-[34px] lg:pr-16 xl:pr-36 3xl:pr-80 justify-between space-y-2 lg:space-y-0">
    <Figure
      :value=totalLeftToPay
      description="Left to pay"
      is-monetary
      class="flex-col-reverse"
    />
    <div class="flex w-52 sm:w-64 justify-between lg:pr-6">
      <Figure description="Active loans" :value=activeLoansCount class="flex-col-reverse"/>
      <Figure description="Repaid loans" :value=repaidLoansCount class="flex-col-reverse"/>
    </div>
  </BaseCard>
</template>
<script setup>
import BaseCard from "@/components/Cards/Base.vue";
import Figure from "@/components/Cards/Figure.vue";

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