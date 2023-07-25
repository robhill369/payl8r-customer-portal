<template>
  <div class="rounded-lg flex flex-col space-y-2"
       :class="isHelper ? 'p-9' : 'py-4 px-6 md:flex-row md:items-center md:space-x-3 md:space-y-0'"
  >
    <div class="flex items-center space-x-3">
      <font-awesome-icon :icon="icon" size="xl"/>
      <h5 class="text-gray-darker">{{props.title}}</h5>
    </div>
    <div :class="isHelper ? 'text-gray-darker' : ''">
      <slot/>
    </div>
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