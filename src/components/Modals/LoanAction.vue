<template>
  <div class="bg-gray-dark bg-opacity-40 fixed h-screen w-screen top-0 left-0 flex z-40 overflow-auto text-center">
    <div class="px-5 sm:container pt-32 lg:pt-16 pb-6 lg:pb-16 z-50 h-screen w-screen overflow-auto">
      <BaseCard class="flex-col w-auto sm:h-auto lg:absolute lg:-translate-x-[calc(50%-140px)] 2xl:-translate-x-[calc(50%-28px)] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 py-10 px-10 items-center justify-between h-full sm:h-auto sm:space-y-7">
        <h5 class="text-gray">{{ title }}</h5>
        <h3 class="font-semibold lg:w-72">{{ retailerDescription }}</h3>
        <div class="text-center">
          <slot/>
        </div>
        <div v-if="isPayment">
          <div v-if="initialQuantity > 1" class="flex flex-col space-y-1 sm:space-y-3 justify-center text-center">
            <p class="font-bold">A total of</p>
            <div class="flex justify-center space-x-12 items-center text-gray">
              <button
                  class="w-16 py-2 flex justify-end"
                  :class="quantity === 1 ? 'opacity-30' : 'cursor-pointer'"
                  @click="handleDecrement(quantity)"
                  :disabled="quantity <= 1"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-left" size="2xl"/>
              </button>
              <div id="total-count" class="text-gray-darker text-figure w-12">
                {{quantity}}
              </div>
              <button
                  class="w-16 py-2 flex justify-start "
                  :class="quantity === initialQuantity ? 'opacity-30' : 'cursor-pointer'"
                  @click="handleIncrement(quantity)"
                  :disabled="quantity >= initialQuantity"
              >
                <font-awesome-icon icon="fa-solid fa-chevron-right" size="2xl"/>
              </button>
            </div>

            <p class="font-bold">{{paymentType}}<span v-if="quantity !== 1">s</span>, amounting to</p>
            <h1>£{{props.array.slice(0, quantity).reduce((a, b) => a + b, 0)}}</h1>
            <div
                class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center sm:space-x-3"
            >
              <div class="text-xs">will be charged to</div>
              <div class="flex bg-gray-light rounded-lg py-2 px-4 items-center text-gray-darker justify-between h-10">
                <font-awesome-icon icon="fa-solid fa-credit-card" size="xl"/>
                <div class="flex text-nav pl-4 w-30">•••• •••• •••• {{props.currentLastFourDigits}}</div>
              </div>
            </div>
          </div>
          <div v-else class="flex flex-col sm:flex-row justify-between align-middle items-center space-y-3 sm:space-y-0 sm:space-x-2 ">
            <div class="flex bg-gray-light rounded-lg p-2 text-nav h-10 items-center"><span>£</span>{{array[0]}}</div>
            <div class="text-xs font-normal">will be charged to</div>
            <div class="flex bg-gray-light rounded-lg py-2 px-4 items-center text-gray-darker justify-between h-10">
              <font-awesome-icon icon="fa-solid fa-credit-card" size="xl"/>
              <div class="flex text-nav pl-4 w-30">•••• •••• •••• {{props.currentLastFourDigits}}</div>
            </div>
          </div>
        </div>
        <div v-else class="bg-gray-light rounded-lg py-2 px-4 items-center text-gray-darker justify-between h-10">
          <select class="bg-gray-light focus:outline-none">
            <option v-for="n in 31">{{ toOrdinalSuffix(n) }}</option>
          </select>
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
import CancelButton from "@/components/Buttons/Cancel.vue";

const props = defineProps({
  title: {
    type: String
  },
  isPayment: {
    type: Boolean,
    default: false
  },
  retailerDescription: {
    type: String,
  },
  paymentType: {
    type: String,
    default: 'late fee'
  },
  currentLastFourDigits: {
    type: Number
  },
  array: {
    type: Array,
    default: []
  }
})

const quantity = ref(props.array.length)
const initialQuantity = props.array.length
const handleIncrement = () => {
  quantity.value += 1
}
const handleDecrement = () => {
  quantity.value -= 1
}

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