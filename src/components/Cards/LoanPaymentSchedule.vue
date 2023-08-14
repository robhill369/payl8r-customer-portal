<template>
  <div class="w-[190%] sm:w-full">
    <div class="grid grid-cols-8 text-xs text-gray font-semibold font-montserrat w-full bg-white">
      <div class="border-b pb-4 ">No.</div>
      <div class="col-span-2 pb-4 border-b">Date due</div>
      <div class="col-span-2 pb-4 border-b">Amount</div>
      <div class="col-span-2 pb-4 border-b">Paid</div>
      <div class="border-b pb-4 flex justify-end">Status</div>
    </div>
    <div
        class="grid grid-cols-8 w-full auto-rows-auto items-center h-14"
        v-for="instalment in instalments"
    >
      <p class="flex h-14 items-center border-b">{{instalment.id}}</p>
      <p class="flex h-14 items-center border-b col-span-2">{{instalment.date}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountDue}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountPaid}}</p>
      <div class="border-b w-full flex justify-end h-14 items-center">
        <Tag
            payment-status
            :name=instalment.status
            class="px-[12px] py-[5px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";

defineProps({
  instalments: {
    type: Array,
    required: true
  },
  currentInstalmentStatus: {
    type: String,
    required: true
  }
})

</script>