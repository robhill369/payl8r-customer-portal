<template>
  <div class="flex flex-col justify-between h-[85px]">
    <p class="font-bold text-gray">{{description}}</p>
    <div class="text-figure">{{isMonetary ? '£' : ''}}{{value}}</div>
  </div>
</template>

<script setup>
  const props = defineProps({
    value: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isMonetary: {
      type: Boolean
    }
  })
</script>