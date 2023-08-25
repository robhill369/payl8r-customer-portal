<template>
  <div class="flex flex-col space-y-3">
    <h5 class="text-gray">{{title}}</h5>
    <p>{{ body }}</p>
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