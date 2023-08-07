<template>
  <div class="flex h-14 bg-gray-light rounded-lg py-3 px-6 items-center text-gray-darker sm:w-64 justify-between">
    <VisaLogo class="w-8"/>
    <div class="flex pr-[10%] sm:pr-0">
      <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>
    </div>
  </div>
</template>
<script setup>
import VisaLogo from "@/components/icons/VisaLogo.vue";

defineProps({
  currentLastFourDigits: {
    type: Number,
    required: true,
  }
})

</script>