<template>
  <div class="flex flex-col space-y-3">
    <h5 class="text-gray-darker">{{title}}</h5>
    <p class="text-gray-dark">{{ body }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
})


</script>