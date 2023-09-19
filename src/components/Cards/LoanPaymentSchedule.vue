<template>
  <div class="w-[190%] sm:w-full">
    <div class="grid grid-cols-8 text-xs text-gray font-semibold font-montserrat w-full bg-white px-1.5 pb-4 border-b">
      <div>No.</div>
      <div class="col-span-2">Date due</div>
      <div class="col-span-2">Amount</div>
      <div class="col-span-2">Paid</div>
      <div class="flex justify-end">Status</div>
    </div>
    <div
      class="grid grid-cols-8 w-full auto-rows-auto items-center h-14 px-1.5 border-b"
      v-for="instalment in instalments"
    >
      <p class="flex h-14 items-center border-b">{{instalment.id}}</p>
      <p class="flex h-14 items-center border-b col-span-2">{{instalment.date}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountDue}}</p>
      <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountPaid}}</p>
      <div class="border-b w-full flex justify-end h-14 items-center">
        <Tag
            payment-status
            :name="instalmentStatus(instalment)"
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
  }
})

const instalmentStatus = (obj) => {
  if(obj.amountDue !== obj.amountPaid) {
    if(obj.hasLapsed) {
      return 'overdue'
    }
    else
      return 'upcoming'
  }
  else return 'paid'
}

</script>