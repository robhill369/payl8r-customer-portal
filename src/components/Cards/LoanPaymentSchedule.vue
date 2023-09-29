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
      class="grid grid-cols-8 w-full auto-rows-auto items-center px-1.5 border-b" :class="instalment.dueDates.length === 1 ? 'py-4' : 'py-3'"
      v-for="instalment in instalments"
    >
      <p class="flex items-center">{{instalment.id}}</p>
      <div class="flex items-center col-span-2">
        <p v-if="instalment.dueDates.length === 1">
          {{useDateFormat(instalment.dueDates[0])}}
        </p>
        <div v-else>
          <div class="flex" v-for="(date, index) in instalment.dueDates">
            <p class="leading-5" :class="index !== instalment.dueDates.length-1 ? isPaid(instalment)+' line-through text-sm' : ''">{{useDateFormat(date)}}</p>
          </div>
        </div>
      </div>
      <p class="flex items-center col-span-2">£{{instalment.amountDue}}</p>
      <p class="flex items-center col-span-2">£{{instalment.amountPaid}}</p>
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

const isPaid = (instalment) => {
  if(instalment.amountDue !== instalment.amountPaid) {
    return 'text-red-dark'
  }
  else return 'text-gray'
}

</script>