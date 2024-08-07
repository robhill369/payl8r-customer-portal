<template>
  <div class="flex h-14 bg-gray-lighter rounded-lg py-3 px-6 items-center text-gray-darker sm:w-64 justify-between">
    <font-awesome-icon icon="fa-solid fa-credit-card" size="2xl"/>
    <div class="flex pr-[10%] sm:pr-0">
      <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>
    </div>
  </div>
</template>
<script setup>

defineProps({
  currentLastFourDigits: {
    type: Number,
    required: true,
  }
})

</script>