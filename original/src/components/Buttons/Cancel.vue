<template>
  <ButtonBase class="bg-white border border-gray-darker hover:bg-button-secondary">
      <font-awesome-icon :icon=props.icon :size=size class="pr-2"/>
      <span>{{ name }}</span>
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  size: {
    type: String,
    default: 'lg'
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  }
})
</script>
