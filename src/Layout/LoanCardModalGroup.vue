<template>
  <div>
    <LoanCard
      @open="loanModalOpen = true"
      :retailer-name=retailerName
      :loan-start-date=loanStartDate
      :current-instalment-status=currentInstalmentStatus
      :interest-free-period=interestFreePeriod
      :total-loan-value=totalLoanValue
      :value-left-to-pay=valueLeftToPay
    />
    <!-- Loan Modal -->
    <Teleport to="body">
      <div
          v-if="loanModalOpen"
          class="bg-gray-light lg:bg-gray-dark lg:bg-opacity-40 fixed h-screen w-screen top-0 left-0 flex z-40 overflow-auto">
        <div class=" lg:w-96 2xl:w-16"/>
        <div class="px-5 sm:container pt-32 lg:pt-16 pb-6 lg:pb-16 z-50 h-full w-screen overflow-auto"
        >
          <LoanCard
            @close="loanModalOpen = false"
            loan-details
            :retailer-name=retailerName
            :loan-start-date=loanStartDate
            :interest-free-period=interestFreePeriod
            :monthly-payback-value=monthlyPaybackValue
            :current-instalment-status=currentInstalmentStatus
            :total-loan-value=totalLoanValue
            :value-left-to-pay=valueLeftToPay
            :total-order-value=totalOrderValue
            :loan-upcoming-payment=loanUpcomingPayment
            :loan-upcoming-payment-date=loanUpcomingPaymentDate
            :loan-previous-payment=loanPreviousPayment
            :loan-previous-payment-date=loanPreviousPayment
            :current-last-four-digits=currentLastFourDigits
            :transactions=transactions
            :instalments=instalments
            :late-fees=lateFees
            :order-items=orderItems
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
import LoanCard from "@/components/Cards/Loan.vue";
import {ref} from "vue";

const props = defineProps({
  retailerName: {
    type: String,
    required: true
  },
  loanStartDate: {
    type: String,
    required: true
  },
  interestFreePeriod: {
    type: Number,
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
  totalLoanValue: {
    type: Number,
    required: true
  },
  totalOrderValue: {
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
  lateFees:{
    type: Array,
  },
  orderItems: {
    type: Array,
    required: true
  }
})

const loanModalOpen = ref(false)
</script>