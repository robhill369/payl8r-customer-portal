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
      <p class="flex h-14 items-center border-b col-span-3">{{contractSignDate}}</p>
      <p class="flex h-14 items-center border-b col-span-4 pr-3 ">Initial purchase amount</p>
      <p class="flex h-14 items-center border-b col-span-4">£{{originalOrderAmount.toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{originalOrderAmount.toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b col-span-3">{{contractSignDate}}</p>
      <p class="flex h-14 items-center border-b col-span-6 pr-3 ">Deposit payment</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{depositAmount.toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{(originalOrderAmount-depositAmount).toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b col-span-3">{{contractSignDate}}</p>
      <p class="flex h-14 items-center border-b col-span-4 pr-3 ">Interest for entire term</p>
      <p class="flex h-14 items-center border-b col-span-4">£{{totalInterestAmount.toFixed(2)}}</p>
      <p class="flex h-14 items-center border-b flex justify-end">£{{(totalInterestAmount+originalOrderAmount-depositAmount).toFixed(2)}}</p>
      <template v-for="transaction in transactions">
        <p class="flex h-14 items-center border-b col-span-3">{{useDateFormat(transaction.date)}}</p>
        <p class="flex h-14 items-center border-b col-span-4 pr-3 ">{{transaction.description}}</p>
        <p class="flex h-14 items-center border-b col-span-2">{{transaction.debit ? '£'+transaction.debit.toFixed(2) : ''}}</p>
        <p class="flex h-14 items-center border-b col-span-2">{{transaction.credit ? '£'+transaction.credit.toFixed(2) : ''}}</p>
        <p class="flex h-14 items-center border-b flex justify-end">£{{transaction.balance}}</p>
      </template>
    </div>
  </div>
</template>

<script setup>
import useDateFormat from "@/composables/useDateFormat";

const props = defineProps({
    contractSignDate: {
      type: String,
      required: true
    },
    originalOrderAmount: {
      type: Number
    },
    totalInterestAmount: {
      type: Number
    },
    depositAmount: {
      type: Number
    },
    transactions: {
      type: Array,
      required: true
    }
  })
</script>