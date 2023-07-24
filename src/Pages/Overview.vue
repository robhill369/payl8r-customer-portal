<template>
  <div class="flex flex-col justify-between space-y-24">
    <div class="bg-blue-400 w-full">
      Intro
    </div>
    <CardSection>
        <CardSectionHeader name ="My overview">
        </CardSectionHeader>
        <PaymentsCard/>
    </CardSection>
    <CardSection>
      <CardSectionHeader name="My account status">
        <template v-slot:icon>
          <Avatar class="w-7 h-7 mr-4"/>
        </template>
      </CardSectionHeader>
      <PaymentsScheduleCard/>
    </CardSection>
    <CardSection>
      <CardSectionHeader name="My active loans">
        <template v-slot:button>
          <PrimaryButton>View all loans</PrimaryButton>
        </template>
      </CardSectionHeader>
<!--      v-for required for active loans-->
        <LoanCard/>
        <LoanCard/>
        <LoanCard/>
    </CardSection>
    <CardSection>
        <CardSectionHeader name="Keeping your account healthy">
          <p class="text-gray pt-2">Tips and actions to keep your account running smoothly</p>
        </CardSectionHeader>
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
import CardSectionHeader from "@/Layout/CardSectionHeader.vue";
import PrimaryButton from "@/components/Buttons/Primary.vue";
import Avatar from "@/components/icons/Avatar.vue";

</script>