<template>
  <div class="w-[190%] sm:w-full">
    <div class="grid grid-cols-8 text-xs text-gray font-semibold font-montserrat w-full bg-white">
      <div class="border-b pb-4 ">No.</div>
      <div class="col-span-2 pb-4 border-b">Date incurred</div>
      <div class="col-span-2 pb-4 border-b">Reason</div>
      <div class="pb-4 border-b">Amount</div>
      <div class="pb-4 border-b">Paid</div>
      <div class="border-b pb-4 flex justify-end">Status</div>
    </div>
    <div v-for="instalment in instalments">
      <div
        v-if="instalment.lateFee"
        class="grid grid-cols-8 w-full auto-rows-auto items-center h-14"
      >
        <p class="flex h-14 items-center border-b pl-1.5">{{instalment.id}}</p>
        <p class="flex h-14 items-center col-span-2 border-b">{{instalment.lateFee.dateIncurred}}</p>
        <p class="flex h-14 items-center col-span-2 border-b">Failed payment</p>
        <p class="flex h-14 items-center border-b">£{{instalment.lateFee.amountDue}}</p>
        <p class="flex h-14 items-center border-b">£{{instalment.lateFee.amountPaid}}</p>
        <div class="border-b w-full flex justify-end h-14 items-center">
          <Tag
            payment-status
            :name="instalment.lateFee.status ? instalment.lateFee.status : 'unpaid'"
            class="px-[12px] py-[5px]"
          />
        </div>
      </div>
      <div v-else class="w-full items-center h-14 bg-gray-light border-b flex align-middle justify-center text-gray"/>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  },
  instalments: {
    type: Array,
    required: true
  }
})

</script>

