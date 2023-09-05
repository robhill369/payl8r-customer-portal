<template>
  <ButtonBase
    class="border border-gray-darker capitalize"
    :class="name === 'paid' ? 'bg-green-light text-green-dark border-none h-6' : '',
            name === 'overdue' ? 'bg-red-light text-red-darker border-none' : '',
            name === 'unpaid' ? 'bg-red-light text-red-darker border-none h-6' : '',
            name === 'upcoming' ? 'bg-yellow text-yellow-darker border-none h-6' : '',
            name === 'waived' ? 'bg-yellow text-yellow-darker border-none h-6' : '',
            name === 'ongoing' ? 'bg-white border border-gray-darker border-none' : '',
            name.startsWith('Late fee') ? 'border-2 border-red-dark text-red-darker h-6 px-2.5' : ''"
  >
    {{name}}<span :class="name === 'Late fee' ? 'lg:hidden' : 'hidden'"> To Pay</span>
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";

defineProps({
  name: {
    type: String,
    required: true
  }
})


</script>
