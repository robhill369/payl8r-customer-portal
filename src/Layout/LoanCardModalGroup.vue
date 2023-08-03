<template>
  <div>
    <LoanCard
      @click="loanModalOpen = true"
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
            @closed="loanModalOpen = false"
            loan-expanded
            :retailer-name=retailerName
            :loan-start-date=loanStartDate
            :monthly-payback-value=monthlyPaybackValue
            :current-instalment-status=currentInstalmentStatus
            :total-loan-value=totalLoanValue
            :total-order-value=totalOrderValue
            :value-left-to-pay=valueLeftToPay
            :loan-upcoming-payment=loanUpcomingPayment
            :loan-upcoming-payment-date=loanUpcomingPaymentDate
            :loan-previous-payment=loanPreviousPayment
            :loan-previous-payment-date=loanPreviousPayment
            :interest-free-period=interestFreePeriod
            :current-last-four-digits=currentLastFourDigits
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
  loanDetails: {
    type: Boolean,
    default: false
  }
})

const loanModalOpen = ref(false)
</script>