<template>
  <ButtonBase class="bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected active:text-white">
      <font-awesome-icon v-if="props.icon" :icon=props.icon :size=props.size class="pr-2"/>
      <span>{{ name }}</span>
    <slot/>
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";

const props = defineProps({
  name: {
    type: String
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
