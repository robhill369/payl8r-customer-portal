<template>
  <ButtonBase class="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected active:text-white">
      <font-awesome-icon v-if="props.icon" :icon=props.icon :size=props.size class="pr-2"/>
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
