<template>
  <div>
    <!-- Loan Modal -->
    <Teleport to="body" v-if="loanModalOpen">
      <div
        class="bg-gray-light lg:bg-gray-dark lg:bg-opacity-40 fixed h-screen w-screen top-0 left-0 flex z-40 overflow-auto">
        <div class=" lg:w-96 2xl:w-16"/>
        <div class="px-5 sm:container pt-32 lg:pt-16 pb-6 lg:pb-16 z-50 h-full w-screen overflow-auto"
        >
          <LoanCard
            @close="loanModalOpen = false"
            loan-details
            :retailer-description=retailerDescription
            :provider="provider"
            :purchase-date=purchaseDate
            :contract-sign-date="contractSignDate"
            :term-in-months=termInMonths
            :total-interest-amount=totalInterestAmount
            :original-order-amount=originalOrderAmount
            :total-loan-value=totalLoanValue
            :deposit-amount=depositAmount
            :value-repaid="valueRepaid"
            :value-left-to-pay=valueLeftToPay
            :last-payment=lastPayment
            :upcoming-Instalment=upcomingInstalment
            :current-last-four-digits=currentLastFourDigits
            :transactions=transactions
            :instalments=instalments
            :order-items=orderItems
            :is-repaid=isRepaid
            :out-of-term-charges=outOfTermCharges
            :out-of-term-charges-amount=outOfTermChargesAmount
            :current-instalment=currentInstalment
          />
        </div>
      </div>
    </Teleport>
    <LoanCard
      @open="loanModalOpen = true"
      @tally="tallyBalance"
      @status="$emit('status', $event)"
      :retailer-description=retailerDescription
      :provider=provider
      :value-repaid="valueRepaid"
      :contract-sign-date="contractSignDate"
      :term-in-months=termInMonths
      :deposit-amount=depositAmount
      :total-loan-value=totalLoanValue
      :value-left-to-pay=valueLeftToPay
      :current-last-four-digits=currentLastFourDigits
      :instalments=instalments
      :out-of-term-charges=outOfTermCharges
      :out-of-term-charges-amount=outOfTermChargesAmount
      :current-instalment=currentInstalment
    />
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

import LoanCard from "@/components/Cards/Loan.vue";

const emit = defineEmits(['tally', 'status'])

console.log()

const props = defineProps({
  retailerDescription: {
    type: String,
    required: true
  },
  provider: {
    type: String
  },
  purchaseDate: {
    type: String
  },
  termInMonths: {
    type: Number,
    required: true
  },
  contractSignDate: {
    type: String,
    required: true
  },
  depositAmount: {
    type: Number,
    required: true,
    default: 0.00
  },
  totalInterestAmount: {
    type: Number,
  },
  totalLoanValue: {
    type: Number
  },
  originalOrderAmount: {
    type: Number
  },
  valueRepaid: {
    type: Number,
    required: true
  },
  valueLeftToPay: {
    type: Number,
    required: true
  },
  upcomingInstalment: {
    type: Object
  },
  lastPayment: {
    type: Object
  },
  currentLastFourDigits: {
    type: Number
  },
  transactions: {
    type: Array
  },
  instalments: {
    type: Array
  },
  outOfTermCharges: {
    type: Array,
  },
  orderItems: {
    type: Array,
  },
  isRepaid: {
    type: Boolean,
    default: false
  },
  outOfTermChargesAmount: {
    type: Number
  },
  currentInstalment: {
    type: Object
  }
})

const tallyBalance = (val) => {
  emit('tally', val)
}

const loanModalOpen = ref(false)
</script>