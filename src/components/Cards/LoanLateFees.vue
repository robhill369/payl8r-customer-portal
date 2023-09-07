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
        class="grid grid-cols-8 w-full auto-rows-auto items-center h-14 px-1.5 border-b"
      >
        <p>{{instalment.id}}</p>
        <p class="col-span-2">{{instalment.lateFee.dateIncurred}}</p>
        <p>£{{instalment.lateFee.amountDue}}</p>
        <p class="col-span-3 pl-2">{{instalment.lateFee.cardExpired ? 'Failed payment (card expired)' : 'Failed payment'}}</p>
        <div class="flex justify-end">
          <Tag
            payment-status
            :name="instalment.lateFee.status !== 'unpaid'  ? instalment.lateFee.status : (readyToPay ? instalment.lateFee.status : 'applied')"
            class="px-[12px] py-[5px]"
          />
        </div>
      </div>
      <div v-else class="w-full items-center h-14 bg-gray-light border-b flex align-middle justify-center text-gray"/>

    </div>
    <div v-for="charge in outOfTermCharges">
      <div
          class="grid grid-cols-8 w-full auto-rows-auto items-center h-14 bg-red-lighter border-b px-1.5"
      >
        <p>+{{charge.id}}</p>
        <p class="col-span-2">{{charge.dateIncurred}}</p>
        <p>£{{charge.amountDue}}</p>
        <p class="col-span-3 pl-2">Out-of-term interest</p>
        <div class="flex justify-end items-center">
          <Tag
              payment-status
              :name="charge.status !== 'unpaid'  ? charge.status : (readyToPay ? charge.status : 'applied')"
              class="px-[12px] py-[5px]"
          />
        </div>
      </div>
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
  },
  outOfTermCharges: {
    type: Array,
    default: []
  },
  readyToPay: {
    type: Boolean
  }
})

</script>

