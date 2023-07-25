<template>
  <BaseCard class="relative flex-col-reverse lg:flex-col px-5 xl:px-9 py-7">
    <div class="flex flex-col space-y-6">
      <div class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-0">
        <LoanDescription/>
        <LoanFees class="pr-2"/>
      </div>
      <ProgressBar/>
      <div class="flex flex-col md:flex-row space-y-3.5 md:space-x-3 md:space-y-0">
        <ButtonSecondary
            name="Pay instalment early"
            icon="fa-solid fa-credit-card"
        />
        <ButtonSecondary
          name="Change payment date"
          icon="fa-solid fa-arrows-rotate"
        />
      </div>
    </div>
    <Tag class="mb-6 lg:absolute lg:right-5 lg:bottom-1 xl:right-9"
      status="ongoing"
    />
  </BaseCard>
</template>
<script setup>
import Avatar from "@/components/icons/Avatar.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
import LoanDescription from "@/components/Cards/LoanDescription.vue";
import LoanFees from "@/components/Cards/LoanFees.vue";
import BaseCard from "@/components/Cards/Base.vue";
</script>