<template>
  <div class="w-full">
    <div class="text-xs font-medium font-montserrat pb-3.5">{{ label }}</div>
    <input class="bg-gray-light p-3 border-b border-gray-dark text-gray-darker w-full focus:outline-none focus:bg-pink-lighter focus:border-pink"/>
  </div>
</template>

<script setup>

defineProps ({
  label: {
    type: String,
    required: true,
  }
})
</script>