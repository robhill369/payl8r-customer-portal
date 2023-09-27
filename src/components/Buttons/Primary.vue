<template>
  <ButtonBase class="bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-selected focus:bg-button-primary-selected text-white">
    <font-awesome-icon v-if="props.icon" :icon="props.icon" :size=props.size class="pr-2"/>
    <span>{{ props.name }}</span>
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
    default: 'md'
  }
})
</script>
