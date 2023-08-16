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
        class="grid grid-cols-12 w-full auto-rows-auto items-center"
    >
      <p class="flex h-14 items-center border-b col-span-3">{{purchaseDate}}</p>
      <p class="flex h-14 items-center border-b col-span-4 pr-3 ">Initial purchase amount</p>
      <p class="flex h-14 items-center border-b col-span-4">£{{totalOrderValue}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{totalOrderValue}}</p>
      <p class="flex h-14 items-center border-b col-span-3">{{loanStartDate}}</p>
      <p class="flex h-14 items-center border-b col-span-6 pr-3 ">Deposit payment</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{depositValue}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{(totalOrderValue-depositValue).toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b col-span-3">{{loanStartDate}}</p>
      <p class="flex h-14 items-center border-b col-span-4 pr-3 ">Interest for entire term</p>
      <p class="flex h-14 items-center border-b col-span-4">£{{totalInterestValue}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{totalInterestValue+totalOrderValue-depositValue}}</p>
      <template v-for="transaction in transactions">
        <p class="flex h-14 items-center border-b col-span-3">{{transaction.date}}</p>
        <p class="flex h-14 items-center border-b col-span-4 pr-3 ">{{transaction.description}}</p>
        <p class="flex h-14 items-center border-b col-span-2">£{{transaction.debit}}</p>
        <p class="flex h-14 items-center border-b col-span-2">£{{transaction.credit}}</p>
        <p class="flex h-14 items-center border-b flex justify-end">£{{transaction.balance}}</p>
      </template>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    loanStartDate: {
      type: String,
      required: true
    },
    purchaseDate: {
      type: String
    },
    totalOrderValue: {
      type: Number
    },
    totalInterestValue: {
      type: Number
    },
    depositValue: {
      type: Number
    },
    transactions: {
      type: Array,
      required: true
    }
  })
</script>