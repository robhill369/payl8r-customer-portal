<template>
  <BaseCard class="relative  lg:flex-col px-5 xl:px-9 py-7">
    <div
      class="flex flex-col space-y-4"
      :class="isModal ? 'lg:pt-20' : ''"
    >
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-0 "
        :class="isModal ? 'lg:flex-col' : ''"
      >
        <div class="flex justify-between">
          <LoanDescription
              :avatar-colors=avatarColors
              :class="isModal ? 'pb-10' : ''"
          />
          <ButtonBase
              v-if="isModal"
              class="hidden lg:block bg-white border border-gray-darker pointer-events-none"
          >
            <h4 class="font-[400]">£00.00 p/m</h4>
          </ButtonBase>
        </div>
        <LoanFees :class="isModal ? '' : 'pr-2'"/>
      </div>
      <ProgressBar :class="isModal ? '' : ''"/>
      <div>
        <div v-if="isModal"
          class="flex flex-col -mx-5 xl:-mx-9 mt-3.5"
          :class="hasWarning ? 'bg-red-light' : 'border-b border-gray'"
        >
          <div v-if="hasWarning" class="lg:mx-5 xl:mx-9">
            Warning
          </div>

        </div>
        <div
          class="flex flex-col md:flex-row space-y-3.5 md:space-x-3 md:space-y-0"
          :class="isModal ? 'py-7 border-b border-gray -mx-5 px-5 xl:-mx-9 xl:px-9' : ''"
        >
          <ButtonSecondary
              name="Pay instalment early"
              icon="fa-solid fa-credit-card"
          />
          <ButtonSecondary
            name="Change payment date"
            icon="fa-solid fa-arrows-rotate"
          />
          <ButtonSecondary
              name="View loan agreement"
              icon="fa-solid fa-file"
              v-if="isModal"
          />
        </div>
      </div>
    </div>
    <Tag
        class="mb-6 lg:absolute lg:right-5 lg:bottom-1 xl:right-9"
        :class="isModal ? 'lg:left-5 lg:top-10 xl:left-9' : ''"
        status="ongoing"
    />
    <div v-if="isModal" class="pt-10 pb-5 space-y-12">
      <Tabs/>
      <div>
        <PaymentsSchedule
            is-loan-card
            upcomingPayment='loanUpcomingPayment'
            upcomingPaymentDate='loanUpcomingPaymentDate'
            previousPayment='loanPreviousPayment'
            previousPaymentDate='loanPreviousPaymentDate'
        />

        <div class="flex flex-col lg:flex-row w-full pt-11 justify-between">
          <div class="flex flex-col w-2/5 space-y-5">
            <h5 class="text-gray">Order Summary</h5>
            <div class="w-full space-y-3">
              <div class="flex justify-between">
                <p>Total inc. interest</p>
                <p class="font-bold">£00.00</p>
              </div>
              <div class="flex justify-between">
                <p>Order total</p>
                <p class="font-bold">£00.00</p>
              </div>
              <div class="flex justify-between">
                <p>Paid so far</p>
                <p class="font-bold">£00.00</p>
              </div>
            </div>
            <div class="h-3"/>
          </div>
          <div class="flex flex-col w-[304px] xl:w-[352px] 2xl:w-[304px] space-y-4">
            <h5 class="text-gray">Basket Summary</h5>
            <div class="w-full">
              <div class="grid grid-cols-5 text-xs text-gray">
                <div class="col-span-3">Product</div>
                <div>Qty.</div>
                <div>Price</div>
              </div>
              <div
                  class="grid grid-cols-5 auto-rows-auto"
                  v-for="item in items"
              >
                <p class="col-span-3 pt-2.5 pr-2">{{item.name}}</p>
                <p class="font-bold pt-2.5">{{ item.qnty }}</p>
                <p class="font-bold pt-2.5">£{{ (item.price * item.qnty).toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <h5 class="text-gray">Payment method</h5>
          <div class="flex ">
            <h2 class="pr-2">•••• •••• ••••</h2><h3>1234</h3>
          </div>
          <ButtonSecondary
              class="drop-shadow-lg bg-white border-none"
              name="Change card"
              icon="fa-solid fa-credit-card"
          />
        </div>
      </div>
      <hr class="border-gray lg:-mx-5 xl:-mx-9"/>
      <TitledCopy
          title="Issues with this order?"
          :body="retailerName + ' is responsible for any queries around delivery, mistakes with your order, refunds and returns. Contact us at Payl8r if you need help with anything else.'"
      />
    </div>
  </BaseCard>
</template>
<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
import LoanDescription from "@/components/Cards/LoanDescription.vue";
import LoanFees from "@/components/Cards/LoanFees.vue";
import BaseCard from "@/components/Cards/Base.vue";
import ButtonBase from "@/components/Buttons/Base.vue";
import Tabs from "@/components/Tabs.vue";
import TitledCopy from "@/Layout/TitledCopy.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";

defineProps({
  avatarColors: {
    type: String,
  },
  upcomingPayment: {
    type: Number,
    required: true,
    default: 0
  },
  upcomingPaymentDate: {
    type: Date,
    required: true,
  },
  previousPayment: {
    type: Number,
    required: true,
    default: 0
  },
  previousPaymentDate: {
    type: Date,
    required: true,
  },
  retailerName: {
    type: String,
    required: true
  }
})

const isModal = true
const hasWarning = false

const items = [
  {
    name: 'product 1',
    qnty: 1,
    price: 10.00
  },
  {
    name: 'product 2',
    qnty: 1,
    price: 30.00
  },
  {
    name: 'product 2',
    qnty: 3,
    price: 20.00
  }
]
</script>