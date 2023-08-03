<template>
  <div class="w-[175%] sm:w-full">
    <div class="grid grid-cols-12 text-xs text-gray font-semibold font-montserrat w-full bg-white">
      <div class="border-b col-span-3 pb-4 bg-white">Date</div>
      <div class="col-span-4 pb-4 border-b bg-white">Description</div>
      <div class="col-span-2 pb-4 border-b bg-white">Debit</div>
      <div class="col-span-2 pb-4 border-b bg-white">Credit</div>
      <div class="border-b pb-4 flex justify-end bg-white">Balance</div>
    </div>
    <div
        class="grid grid-cols-12 w-full auto-rows-auto items-center h-14"
        v-for="transaction in transactions"
    >
      <p class="flex h-14 items-center border-b col-span-3">{{transaction.date}}</p>
      <p class="flex h-14 items-center border-b col-span-4 pr-3 ">{{transaction.description}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{transaction.debit}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{transaction.credit}}</p>
      <p class="flex h-14 items-center border-b">£{{transaction.balance}}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
    transactions: {
      type: Array,
      required: true
    }
  })

</script>