<template>
  <div class="relative h-3.5 w-full rounded-full bg-button-tertiary">
    <div
      :style="'width:'+progress+'%'"
      class="absolute h-full rounded-full"
      :class="paymentOverdue ? 'bg-red-light' : 'bg-teal'"
    >
      <slot/>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  paymentOverdue: {
    type: Boolean,
    default: 'false'
  },
  progress: {
    type: Number
  }
})

</script>