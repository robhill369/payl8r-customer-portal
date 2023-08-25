<template>
  <div>
    <LoanCard
      v-if="!loanModalOpen"
      @open="loanModalOpen = true"
      :retailer-name=retailerName
      :provider="provider"
      :status=loanStatus
      :value-repaid="valueRepaid"
      :loan-start-date=loanStartDate
      :term-length=termLength
      :deposit-value=depositValue
      :total-loan-value=totalLoanValue
      :value-left-to-pay=valueLeftToPay
    />
    <!-- Loan Modal -->
    <Teleport to="body" v-else>
      <div
        class="bg-gray-light lg:bg-gray-dark lg:bg-opacity-40 fixed h-screen w-screen top-0 left-0 flex z-40 overflow-auto">
        <div class=" lg:w-96 2xl:w-16"/>
        <div class="px-5 sm:container pt-32 lg:pt-16 pb-6 lg:pb-16 z-50 h-full w-screen overflow-auto"
        >
          <LoanCard
            @close="loanModalOpen = false"
            loan-details
            :retailer-name=retailerName
            :provider="provider"
            :purchase-date=purchaseDate
            :loan-start-date=loanStartDate
            :term-length=termLength
            :monthly-payback-value=monthlyPaybackValue
            :status=loanStatus
            :total-interest-value=totalInterestValue
            :total-order-value=totalOrderValue
            :total-loan-value=totalLoanValue
            :deposit-value=depositValue
            :value-repaid="valueRepaid"
            :value-left-to-pay=valueLeftToPay
            :loan-upcoming-payment=loanUpcomingPayment
            :loan-upcoming-payment-date=loanUpcomingPaymentDate
            :loan-previous-payment=loanPreviousPayment
            :loan-previous-payment-date=loanPreviousPaymentDate
            :current-last-four-digits=currentLastFourDigits
            :transactions=transactions
            :instalments=instalments
            :order-items=orderItems
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
import {ref} from "vue";

import LoanCard from "@/components/Cards/Loan.vue";

const props = defineProps({
  retailerName: {
    type: String,
    required: true
  },
  provider: {
    type: String
  },
  purchaseDate: {
    type: String
  },
  loanStatus: {
    type: String,
    required: true
  },
  termLength: {
    type: Number,
    required: true
  },
  loanStartDate: {
    type: String,
    required: true
  },
  monthlyPaybackValue: {
    type: Number,
    required: true
  },
  currentInstalmentStatus: {
    type: String,
    required: true,
    default: 'ongoing'
  },
  depositValue: {
    type: Number,
    required: true,
    default: 0.00
  },
  totalInterestValue: {
    type: Number,
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
  valueLeftToPay: {
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
  currentLastFourDigits: {
    type: Number,
    required: true,
  },
  transactions: {
    type: Array,
    required: true
  },
  instalments: {
    type: Array,
    required: true
  },
  orderItems: {
    type: Array,
  }
})

const loanModalOpen = ref(false)
</script>