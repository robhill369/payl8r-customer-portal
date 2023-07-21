<template>
  <div class="flex flex-col justify-between space-y-14 ">
    <div class="bg-blue-400 w-full">
      Intro
    </div>
    <CardSection>
      <PaymentsCard/>
    </CardSection>
    <CardSection>
      <PaymentsScheduleCard/>
    </CardSection>
    <CardSection>
      <LoanCard/>
      <LoanCard/>
      <LoanCard/>
    </CardSection>
    <CardSection>
      <SimpleCard/>
      <SimpleCard/>
    </CardSection>

    <div>footer</div>

  </div>
</template>

<script setup>
import PaymentsCard from "@/components/Cards/Payments.vue";
import CardSection from "@/Layout/CardSection.vue";
import LoanCard from "@/components/Cards/Loan.vue";
import SimpleCard from "@/components/Cards/Simple.vue";
import PaymentsScheduleCard from "@/components/Cards/PaymentsSchedule.vue";
</script>