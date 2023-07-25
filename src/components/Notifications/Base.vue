<template>
  <div class="rounded-lg py-4 px-6 flex flex-col space-y-2"
       :class="isHelper ? '' : 'md:flex-row md:items-center md:space-x-3 md:space-y-0'"
  >
    <div class="flex items-center space-x-3">
      <font-awesome-icon :icon="icon" size="xl"/>
      <h5>{{props.title}}</h5>
    </div>
    <slot/>
  </div>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String,
    required: true
  },
  isHelper: {
    type: Boolean,
    default: false
  }
})

</script>