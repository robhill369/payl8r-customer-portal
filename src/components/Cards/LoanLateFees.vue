<template>
  <div class="w-[320%] sm:w-full">
    <div class="grid grid-cols-11 sm:grid-cols-12 text-xs text-gray font-semibold font-montserrat w-full bg-white">
      <div class="border-b col-span-2 pb-4 bg-white">Date due</div>
      <div class="col-span-2 pb-4 border-b bg-white">Date incurred</div>
      <div class="pb-4 border-b bg-white sm:col-span-2">Instalment</div>
      <div class="pb-4 border-b bg-white col-span-2">Reason</div>
      <div class="pb-4 border-b bg-white">Amount</div>
      <div class="pb-4 border-b bg-white">Paid</div>
      <div class="pb-4 border-b bg-white">Balance</div>
      <div class="border-b pb-4 bg-white flex justify-end">Status</div>
    </div>
    <div
      class="grid grid-cols-11 sm:grid-cols-12 w-full auto-rows-auto items-center h-14"
      v-for="fee in lateFees"
    >
      <p class="flex h-14 items-center border-b col-span-2">{{fee.dateDue}}</p>
      <p class="flex h-14 items-center border-b col-span-2 pr-3">{{fee.dateIncurred}}</p>
      <p class="flex h-14 items-center border-b sm:col-span-2">{{fee.instalment}}</p>
      <p class="flex h-14 items-center border-b col-span-2">Failed payment attempt</p>
      <p class="flex h-14 items-center border-b">£{{fee.amountDue}}</p>
      <p class="flex h-14 items-center border-b">£{{fee.amountPaid}}</p>
      <p class="flex h-14 items-center border-b">£{{fee.balance}}</p>
      <div class="border-b w-full flex justify-end h-14 items-center">
        <Tag
            payment-status
            :name=fee.status
            class="px-[12px] py-[5px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import Tag from "@/components/Tag.vue";

defineProps({
    transactions: {
      type: Array,
      required: true
    },
    lateFees: {
      type: Array,
    }
  })

</script>