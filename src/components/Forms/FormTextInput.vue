<template>
  <div class="relative w-full flex flex-col group">
    <label :for=id class="text-xs font-medium font-montserrat pb-3.5 group-focus-within:text-pink">{{ title }}</label>
    <input
      :id=id
      :type=inputType
      class="bg-gray-light px-3 sm:px-5 py-3 border-b border-gray-dark text-gray-darker w-full focus:bg-pink-lighter focus:border-pink"
      :disabled=disabled
      :placeholder="currentValuePlaceholder ? currentValuePlaceholder : placeholder"
      :value=currentValue
    />
    <font-awesome-icon icon="fa-solid fa-lock" v-if="disabled" class="absolute right-5 top-14 text-gray"/>
  </div>
</template>

<script setup>
defineProps ({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  currentValuePlaceholder: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  currentValue: {
    type: String,
  }
})
</script>