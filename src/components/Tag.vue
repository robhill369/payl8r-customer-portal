<template>
  <ButtonBase
    class="border border-gray-darker pointer-events-none capitalize "
    :class="name === 'paid'  && paymentStatus ? 'bg-green-light text-green-dark border-none' : '',
            name === 'overdue' && paymentStatus ? 'bg-red-light text-red-darker border-none' : '',
            name === 'expected' && paymentStatus ? 'bg-red-light text-red-darker border-none' : '',
            name === 'upcoming' && paymentStatus ? 'bg-yellow text-yellow-darker border-none' : '',
            name === 'waived' && paymentStatus ? 'bg-yellow text-yellow-darker border-none' : '',
            name === 'ongoing' && paymentStatus? 'bg-white border border-gray-darker border-none' : ''"
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
  },
  paymentStatus: {
    type: Boolean,
    default: false
  }
})


</script>
