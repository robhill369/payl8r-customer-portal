<template>
  <div>
    <PaymentsSchedule
        is-loan-card
        :upcoming-payment=loanUpcomingPayment
        :upcoming-payment-date=loanUpcomingPaymentDate
        :previous-payment=loanPreviousPayment
        :previous-payment-date=loanPreviousPaymentDate
    >
      <slot/>
    </PaymentsSchedule>
    <div class="pt-11 w-full" :class="provider === 'upfront' ? 'lg:flex lg:justify-between' : ''">
      <div class="flex flex-col lg:flex-row w-full justify-between pb-8 lg:pb-0">
        <hr class="block lg:hidden -mx-5 lg:-mx-9 pb-9"/>
        <div
          class="flex flex-col w-72 md:w-2/5 space-y-5"
          :class="provider === 'upfront' ? 'lg:w-3/5' : ''"
        >
          <h5 class="text-gray">{{provider === 'upfront' ? 'Loan' : 'Order'}} Summary</h5>
          <div class="grid grid-cols-5">
            <p class="col-span-4 pt-2.5">Loan total</p>
            <p class="font-bold pt-2.5">£{{totalLoanValue}}</p>
            <p class="col-span-4 pt-2.5">{{provider === 'upfront' ? 'Amount borrowed' : 'Order total'}}</p>
            <p class="font-bold pt-2.5">£{{totalOrderValue}}</p>
            <p class="col-span-4 pt-2.5">Paid so far</p>
            <p class="font-bold pt-2.5">£{{valueRepaid}}</p>
          </div>
          <div class="h-3"/>
        </div>
        <div
          class="flex flex-col w-72 lg:w-72 xl:w-80 2xl:w-80 3xl:w-[480px] space-y-5"
          :class="provider === 'upfront' ? 'hidden' : ''"
        >
          <h5 class="text-gray">Basket Summary</h5>
          <div class="w-full">
            <div class="grid grid-cols-5 text-xs text-gray">
              <div class="col-span-3">Product</div>
              <div>Qty.</div>
              <div>Price</div>
            </div>
            <div
                class="grid grid-cols-5 auto-rows-auto"
                v-for="item in orderItems"
            >
              <p class="col-span-3 pt-2.5 pr-2">{{item.name}}</p>
              <p class="font-bold pt-2.5 pr-2">{{ item.qnty }}</p>
              <p class="font-bold pt-2.5 pr-2">£{{ (item.price * item.qnty).toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col space-y-5 flex-shrink-0 w-72 xl:w-80 3xl:w-[480px]"
        v-if="!isRepaid"
      >
        <h5 class="text-gray">Payment method</h5>
        <div class="flex ">
          <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>
        </div>
        <router-link to="/my-account">
          <ButtonSecondary
              class="drop-shadow-lg bg-white border-none"
              name="Change card"
              icon="fa-solid fa-credit-card"
          />
        </router-link>
      </div>
    </div>
    <hr class="-mx-5 xl:-mx-9 my-10"/>
    <TitledCopy
        :title="provider === 'upfront' ? 'Issues with this loan?' : 'Issues with this order?'"
        :body="provider === 'upfront' ? 'Upfront loan copy for support channels required here' :
          retailerName+' is responsible for any queries around delivery, mistakes with your order, refunds and returns. Contact us at Payl8r if you need help with anything else.'"
    />
  </div>
</template>
<script setup>
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import TitledCopy from "@/Layout/TitledCopy.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";

defineProps({
  retailerName: {
    type: String,
    required: true,
    default: 'The retailer'
  },
  provider: {
    type: String
  },
  totalLoanValue: {
    type: Number,
    required: true
  },
  totalOrderValue: {
    type: Number,
    required: true
  },
  valueRepaid: {
    type: Number,
    required: true
  },
  loanUpcomingPayment: {
    type: Number,
    required: true,
    default: 0
  },
  loanUpcomingPaymentDate: {
    type: Date,
    required: true,
  },
  loanPreviousPayment: {
    type: Number,
    required: true,
    default: 0
  },
  loanPreviousPaymentDate: {
    type: Date,
    required: true,
  },
  isRepaid: {
    type: Boolean,
    default: false
  },
  currentLastFourDigits: {
    type: Number,
    required: true,
  },
  orderItems: {
    type: Array,
    required: true
  }
})

</script>