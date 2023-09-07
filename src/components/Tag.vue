<template>
  <ButtonBase
    class="border border-gray-darker capitalize"
    :class="name === 'paid' ? 'bg-green-light text-green-dark border-none' : '',
            name === 'overdue' ? 'bg-red-light text-red-darker border-none' : '',
            name === 'unpaid' || name === 'applied' ? 'bg-red-light text-red-darker border-none' : '',
            name === 'upcoming' ? 'bg-yellow text-yellow-darker border-none' : '',
            name === 'waived' ? 'bg-yellow text-yellow-darker border-none' : '',
            name === 'ongoing' ? 'bg-white border border-gray-darker border-none' : '',
            name.match('Late fee') ? 'border-2 border-red-dark text-red-darker normal-case' : ''"
  >
    {{name}}
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
