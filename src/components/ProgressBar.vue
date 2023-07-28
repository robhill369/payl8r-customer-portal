<template>
  <div class="flex h-3.5 w-full rounded-full" :class="'bg-'+color">
  </div>
</template>

<script setup>

defineProps({
  color: {
    type: String,
    default: 'teal'
  }
})
</script>