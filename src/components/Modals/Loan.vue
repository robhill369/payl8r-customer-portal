<template>
  <div class="bg-gray-light lg:bg-gray-dark lg:bg-opacity-40 h-screen w-screen fixed top-0 left-0 flex z-40 overflow-auto">
    <div class=" lg:w-96 2xl:w-16"/>
    <div class="px-5 sm:container py-16 z-50 overflow-auto">
      <LoanCard
          loan-details
          retailer-name="RETAILER NAME"
          loan-start-date="STARTDATE"
          avatar-colors="bg-pink-light text-pink-dark"
          monthly-payback-value=XX.XX
          loan-status="STATUS"
          total-loan-value=XX.XX
          total-order-value=XX.XX
          value-left-to-pay=XX.XX
          loan-upcoming-payment=XX.XX
          loan-upcoming-payment-date="UPCOMINGPAYDATE"
          loan-previous-payment="XX.XX"
          loan-previous-payment-date="LSTPAYDATE"
          interest-free-period="XX"
          current-last-four-digits="XXXX"
          instalment-status="paid"
      />

    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import LoanCard from "@/components/Cards/Loan.vue";
import BaseCard from "@/components/Cards/Base.vue";

</script>