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
      class="grid grid-cols-8 w-full auto-rows-auto items-center px-1.5 border-b py-4"
      v-for="instalment in instalments" :key="instalment.month"
    >
      <p class="flex items-center">{{instalment.month}}</p>
      <div class="flex items-center col-span-2">
        <div v-if="instalment.dueDates.length === 1" class="relative">
          <p>{{ useDateFormat(instalment.dueDates.toString()) }}</p>
          <div v-if="instalment.numberOfAttempts" class="absolute top-5 text-xxs text-gray">{{useOrdinalSuffix(instalment.numberOfAttempts+1)}} attempt</div>
        </div>
        <div v-else class="relative">
          <p>{{ useDateFormat(instalment.dueDates[instalment.dueDates.length-1].toString()) }}</p>
          <div class="absolute top-5 text-xxs text-gray">{{useOrdinalSuffix(instalment.dueDates.length)}} attempt </div>
        </div>
      </div>
      <p class="flex items-center col-span-2">£{{instalment.dueAmount.toFixed(2)}}</p>
      <p class="flex items-center col-span-2">£{{instalment.paidAmount.toFixed(2)}}</p>
      <div class=" w-full flex justify-end items-center">
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
import useDateFormat from "@/composables/useDateFormat";
import useOrdinalSuffix from "@/composables/useOrdinalSuffix";

defineProps({
  instalments: {
    type: Array,
    required: true
  }
})

const instalmentStatus = (obj) => {
  if(obj.dueAmount !== obj.paidAmount) {
    if(obj.isDue) {
      return 'overdue'
    }
    else
      return 'upcoming'
  }
  else return 'paid'
}

const isPaid = (instalment) => {
  if(instalment.dueAmount !== instalment.paidAmount) {
    return 'text-red-dark'
  }
  else return 'text-gray'
}

</script>