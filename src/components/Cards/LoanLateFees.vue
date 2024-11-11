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
        class="grid grid-cols-8 w-full auto-rows-auto items-center px-1.5 border-b py-4"
      >
        <p>{{instalment.month}}</p>

        <div class="col-span-2 relative">
<!--          <div v-for="(n, index) in instalment.dueDates.length">-->
<!--            <p class="leading-5 invisible" :class="index !== instalment.dueDates.length-1 ? 'text-sm' : ''">{{n}}</p>-->
<!--          </div>-->
        <p class="absolute top-1/2 -translate-y-1/2">{{useDateFormat(instalment.lateFee.dateIncurred)}}</p>
        </div>

        <p>£{{instalment.lateFee.paidAmount === 0 || instalment.lateFee.paidAmount === instalment.lateFee.dueAmount ? instalment.lateFee.dueAmount.toFixed(2) : (instalment.lateFee.dueAmount-instalment.lateFee.paidAmount).toFixed(2)}}</p>
        <p class="col-span-3 pl-2">{{instalment.lateFee.cardExpired ? 'Failed payment (card expired)' : 'Failed payment'}}</p>
        <div class="flex justify-end">
          <Tag
            payment-status
            :name=lateFeeStatus(instalment.lateFee)
            class="px-[12px] py-[5px]"
          />
        </div>
      </div>
      <div v-else class="w-full items-center bg-gray-lighter border-b flex align-middle justify-center text-gray h-[57px]"/>
    </div>
    <div v-for="(charge, index) in outOfTermCharges">
      <div
          class="grid grid-cols-8 w-full auto-rows-auto items-center bg-red-lighter border-b px-1.5 py-4"
      >
        <p>+{{index+1}}</p>
        <p class="col-span-2">{{useDateFormat(charge.dateIncurred)}}</p>
        <p>£{{charge.paidAmount === 0 || charge.paidAmount === charge.dueAmount ? charge.dueAmount.toFixed(2) : (charge.dueAmount-charge.paidAmount).toFixed(2)}}</p>
        <p class="col-span-3 pl-2">Out-of-term interest</p>
        <div class="flex justify-end items-center">
          <Tag
              payment-status
              :name="charge.dueAmount !== charge.paidAmount ? 'unpaid' : 'paid'"
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
      if(obj.dueAmount !== obj.paidAmount ) {
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