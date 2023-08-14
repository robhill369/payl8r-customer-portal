<!--<template>-->
<!--  <div class="w-[320%] sm:w-full">-->
<!--    <div class="grid grid-cols-9 sm:grid-cols-12 text-xs text-gray font-semibold font-montserrat w-full bg-white">-->
<!--      <div class="pb-4 border-b bg-white ">No.</div>-->
<!--      <div class="col-span-2 pb-4 border-b bg-white">Date incurred</div>-->
<!--      <div class="pb-4 border-b bg-white col-span-2">Reason</div>-->
<!--      <div class="pb-4 border-b bg-white">Amount</div>-->
<!--      <div class="pb-4 border-b bg-white">Paid</div>-->
<!--      <div class="pb-4 border-b bg-white">Balance</div>-->
<!--      <div class="border-b pb-4 bg-white flex justify-end col-span-2">Status</div>-->
<!--    </div>-->
<!--    <div-->
<!--      class="grid grid-cols-9 sm:grid-cols-12 w-full auto-rows-auto items-center h-14"-->
<!--      v-for="fee in lateFees"-->
<!--    >-->
<!--      <p class="flex h-14 items-center border-b">{{fee.instalment}}</p>-->
<!--      <p class="flex h-14 items-center border-b col-span-2 pr-3">{{fee.dateIncurred}}</p>-->
<!--      <p class="flex h-14 items-center border-b col-span-2">Failed payment attempt</p>-->
<!--      <p class="flex h-14 items-center border-b col-span-2">£{{fee.amountDue}}</p>-->
<!--      <p class="flex h-14 items-center border-b ">£{{fee.amountPaid}}</p>-->
<!--      <p class="flex h-14 items-center border-b col-span-2">£{{fee.balance}}</p>-->
<!--      <div class="border-b w-full flex justify-end h-14 items-center">-->
<!--        <Tag-->
<!--            payment-status-->
<!--            :name=fee.status-->
<!--            class="px-[12px] py-[5px]"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->

<!--import Tag from "@/components/Tag.vue";-->

<!--defineProps({-->
<!--    transactions: {-->
<!--      type: Array,-->
<!--      required: true-->
<!--    },-->
<!--    lateFees: {-->
<!--      type: Array,-->
<!--    }-->
<!--  })-->

<!--</script>-->

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
        <p class="flex h-14 items-center border-b">{{instalment.id}}</p>
        <p class="flex h-14 items-center col-span-2 border-b">{{instalment.lateFee.dateIncurred}}</p>
        <p class="flex h-14 items-center col-span-2 border-b">Failed payment</p>
        <p class="flex h-14 items-center border-b">£{{instalment.lateFee.amountDue}}</p>
        <p class="flex h-14 items-center border-b">£{{instalment.lateFee.amountPaid}}</p>
        <div class="border-b w-full flex justify-end h-14 items-center">
          <Tag
              payment-status
              :name=instalment.lateFee.status
              class="px-[12px] py-[5px]"
          />
        </div>
<!--        <p class="flex h-14 items-center border-b col-span-2">{{fee.dateIncurred}}</p>-->
<!--        <p class="flex h-14 items-center border-b col-span-2">Failed payment attempt</p>-->
<!--        <p class="flex h-14 items-center border-b">£{{fee.amountDue}}</p>-->
<!--        <p class="flex h-14 items-center border-b">£{{fee.amountDue}}</p>-->
<!--        <div class="border-b w-full flex justify-end h-14 items-center">-->
<!--          <Tag-->
<!--              payment-status-->
<!--              :name=fee.status-->
<!--              class="px-[12px] py-[5px]"-->
<!--          />-->
<!--        </div>-->
      </div>
      <div v-else class="w-full items-center h-14 bg-gray-light border-b flex align-middle justify-center text-gray">

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
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
  lateFees: {
    type: Array,
  }
})
// const hasLateFee = (obj) => {
//   if(Object.keys(obj).length !== 0) {
//     return true
//   }
//   else {
//     return false
//   }
// }



// console.log(instalments[0])

</script>

