<template>
  <PageBase>
    <div>
      <div>
        <h2>Hey, Username</h2>
        <div class="mt-4 text-md text-gray">This is your Payl8r dashboard</div>
      </div>
<!--      <div>-->
<!--        FLASH MESSAGE-->
<!--      </div>-->
    </div>
    <CardSection>
        <CardSectionHeader name ="My overview">
        </CardSectionHeader>
        <PaymentsCard/>
    </CardSection>
    <CardSection v-if="isOverviewPage">
      <CardSectionHeader name="My account status">
        <template v-slot:icon>
          <Avatar class="w-7 h-7 mr-4"/>
        </template>
      </CardSectionHeader>
      <PaymentsScheduleCard/>
    </CardSection>
    <CardSection>
      <CardSectionHeader name="My active loans">
        <template v-slot:button v-if="isOverviewPage">
          <PrimaryButton>View all loans</PrimaryButton>
        </template>
        <template v-slot:tabs v-else>
          <Tabs/>
        </template>
      </CardSectionHeader>
<!--      v-for required for active loans-->
        <LoanCard/>
        <LoanCard/>
        <LoanCard/>
    </CardSection>
    <CardSection>
      <CardSectionHeader name="Keeping your account healthy">
        <p class="text-gray pt-4">Tips and actions to keep your account running smoothly</p>
      </CardSectionHeader>
      <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <SimpleCard/>
        <SimpleCard/>
      </div>
    </CardSection>
  </PageBase>
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
import PageBase from "@/Pages/Base.vue";
import Tabs from "@/components/Tabs.vue";


const isOverviewPage = true

</script>