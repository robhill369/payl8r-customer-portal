<template>
  <div class="bg-gray-dark bg-opacity-40 fixed h-screen w-screen top-0 left-0 flex z-40 overflow-auto text-center">
    <div class="px-5 sm:container pt-32 lg:pt-16 pb-6 lg:pb-16 z-50 h-full w-screen overflow-auto">
      <BaseCard class="flex-col w-auto lg:absolute lg:-translate-x-[calc(50%-140px)] 2xl:-translate-x-[calc(50%-28px)] lg:left-1/2 top-48 py-12 px-10 items-center space-y-8 sm:space-y-7">
        <h5 class="text-gray">{{ title }}</h5>
        <h3 class="font-semibold">{{ retailerName }}</h3>
        <div class="text-center">
          <slot/>
        </div>
        <div v-if="!isPayment" class="bg-gray-light rounded-lg py-2 px-4 items-center text-gray-darker justify-between h-10">
          <select class="bg-gray-light focus:outline-none">
            <option v-for="n in 31">{{ toOrdinalSuffix(n) }}</option>
          </select>
        </div>
        <div v-else class="flex flex-col sm:flex-row justify-between align-middle items-center space-y-3 sm:space-y-0 sm:space-x-2 ">
          <div class="flex bg-gray-light rounded-lg p-2 text-nav h-10 items-center"><span>£</span>102.34</div>
          <div class="text-xs font-normal">will be charged to</div>
          <div class="flex bg-gray-light rounded-lg py-2 px-4 items-center text-gray-darker justify-between h-10">
            <VisaLogo class="w-6"/>
            <div class="flex text-nav pl-4 w-30">•••• •••• •••• 1234</div>
          </div>
        </div>
        <div class="flex space-x-2 sm:space-x-5">
          <ConfirmButton
              :name="isPayment ? 'Confirm payment' : 'Confirm date change'"
              :icon="isPayment ? 'fa-solid fa-credit-card' : ''"
          />
          <CancelButton
            name="Cancel"
            @click="$emit('close')"
          />
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import BaseCard from "@/components/Cards/Base.vue";
import ConfirmButton from "@/components/Buttons/Confirm.vue";
import VisaLogo from "@/components/icons/VisaLogo.vue";
import CancelButton from "@/components/Buttons/Cancel.vue";

defineProps({
  title: {
    type: String
  },
  isPayment: {
    type: Boolean,
    default: false
  },
  retailerName: {
    type: String,
  }
})

const toOrdinalSuffix = num => {
  const int = parseInt(num),
      digits = [int % 10, int % 100],
      ordinals = ['st', 'nd', 'rd', 'th'],
      oPattern = [1, 2, 3, 4],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
      ? int + ordinals[digits[0] - 1]
      : int + ordinals[3];
};

</script>