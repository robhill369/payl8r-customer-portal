<template>
  <ButtonBase class="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected active:text-white">
    <a :href=href :target=target>
      <font-awesome-icon :icon=props.icon :size=size class="pr-2"/>
      <span>{{ name }}</span>
    </a>
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
