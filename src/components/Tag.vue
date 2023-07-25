<template>
  <ButtonBase class="bg-white border border-gray-darker pointer-events-none capitalize">
    {{status}}
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";

defineProps({
  status: {
    type: String,
    required: true
  }
})


</script>
