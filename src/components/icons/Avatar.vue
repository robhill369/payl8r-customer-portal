<template>
  <div class="flex relative flex-shrink-0 w-14 h-14 rounded-full">
    <font-awesome-icon :icon="icon" :size="size" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: String
  }
})

</script>