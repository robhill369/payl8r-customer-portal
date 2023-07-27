<template>
  <div
    class="flex w-full space-x-2 justify-between"
    :class="isModal ? '' : 'lg:max-w-[265px]'"
  >
    <div class="flex flex-col justify-between "
      :class="isModal ? 'lg:flex-row lg:space-x-3' : ''"
    >
      <h3>£00.00</h3>
      <div class="flex text-gray">
        <p class="font-bold">Total inc. interest</p>
      </div>
    </div>
    <div class="flex flex-col justify-between"
      :class="isModal ? 'lg:flex-row lg:space-x-3' : ''"
    >
      <h3>£00.00</h3>
      <div class="flex text-gray">
        <p class="font-bold">Left to pay</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const isModal = true
</script>