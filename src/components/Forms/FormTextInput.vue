<template>
  <div class="w-full">
    <div class="text-xs font-medium font-montserrat pb-3.5">{{ label }}</div>
    <input class="bg-gray-light p-3 border-b-2 border-[#E0E0E0] text-gray-dark w-full"/>
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