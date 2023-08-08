<template>
  <ButtonBase class="bg-button-confirm hover:bg-button-confirm-hover">
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
})


</script>
