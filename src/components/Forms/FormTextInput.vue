<template>
  <div class="w-full flex flex-col space-y-0.5">
    <label :for=id class="text-xs font-medium font-montserrat pb-3.5">{{ title }}</label>
    <input :id=id type="text" class="bg-gray-light p-3 border-b border-gray-dark text-gray-darker w-full focus:bg-pink-lighter focus:border-pink"/>
  </div>
</template>

<script setup>

defineProps ({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
})
</script>