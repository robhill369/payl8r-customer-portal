<template>
  <div class="w-[190%] sm:w-full">
    <div class="grid grid-cols-8 text-xs text-gray font-semibold font-montserrat w-full bg-white px-1.5 border-b pb-4">
      <div>No.</div>
      <div class="col-span-2">Date incurred</div>
      <div>Amount</div>
      <div class="col-span-3 pl-2">Reason</div>
      <div class="flex justify-end">Status</div>
    </div>
    <div v-for="instalment in instalments">
      <div
        v-if="instalment.lateFee"
        class="grid grid-cols-8 w-full auto-rows-auto items-center px-1.5 border-b" :class="instalment.dueDates.length === 1 ? 'py-4' : 'py-3'"
      >
        <p>{{instalment.id}}</p>

        <div class="col-span-2 relative">
          <div v-for="(n, index) in instalment.dueDates.length">
            <p class="leading-5 invisible" :class="index !== instalment.dueDates.length-1 ? 'text-sm' : ''">{{n}}</p>
          </div>
        <p class="absolute top-1/2 -translate-y-1/2">{{useDateFormat(instalment.lateFee.dateIncurred)}}</p>
        </div>

        <p>£{{instalment.lateFee.amountPaid === 0 || instalment.lateFee.amountPaid === instalment.lateFee.amountDue ? instalment.lateFee.amountDue.toFixed(2) : (instalment.lateFee.amountDue-instalment.lateFee.amountPaid).toFixed(2)}}</p>
        <p class="col-span-3 pl-2">{{instalment.lateFee.cardExpired ? 'Failed payment (card expired)' : 'Failed payment'}}</p>
        <div class="flex justify-end">
          <Tag
            payment-status
            :name=lateFeeStatus(instalment.lateFee)
            class="px-[12px] py-[5px]"
          />
        </div>
      </div>
      <div v-else class="w-full items-center bg-gray-light border-b flex align-middle justify-center text-gray h-[57px]"/>
    </div>
    <div v-for="charge in outOfTermCharges">
      <div
          class="grid grid-cols-8 w-full auto-rows-auto items-center bg-red-lighter border-b px-1.5 py-4"
      >
        <p>+{{charge.id}}</p>
        <p class="col-span-2">{{useDateFormat(charge.dateIncurred)}}</p>
        <p>£{{charge.amountPaid === 0 || charge.amountPaid === charge.amountDue ? charge.amountDue.toFixed(2) : (charge.amountDue-charge.amountPaid).toFixed(2)}}</p>
        <p class="col-span-3 pl-2">Out-of-term interest</p>
        <div class="flex justify-end items-center">
          <Tag
              payment-status
              :name="charge.amountDue !== charge.amountPaid ? 'unpaid' : 'paid'"
              class="px-[12px] py-[5px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/components/Tag.vue";
import useDateFormat from "@/composables/useDateFormat";

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  },
  instalments: {
    type: Array,
    required: true
  },
  outOfTermCharges: {
    type: Array,
    default: []
  },
  readyToPay: {
    type: Boolean
  }
})

const lateFeeStatus = (obj) => {
  if(!obj.isWaived) {
      if(obj.amountDue !== obj.amountPaid ) {
        if(props.readyToPay) {
          return 'unpaid'
        }
        else return 'applied'
      }
    else
      return 'paid'
  }
  else return 'waived'
}
</script>