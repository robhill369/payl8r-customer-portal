<template>
  <div class="rounded-lg flex space-y-2"
       :class="isHelper ? 'p-6 md:p-9 flex-col' : 'py-4 px-6 sm:flex-row md:items-center md:space-x-3 md:space-y-0'"
  >
    <div class="flex items-center space-x-4">
      <font-awesome-icon :icon="icon" size="xl"/>
      <h5 class="text-gray-darker sm:whitespace-nowrap">{{props.title}}</h5>
    </div>
    <div :class="isHelper ? 'text-gray-darker' : ''">
      <slot/>
    </div>
  </div>
</template>
<script setup>

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