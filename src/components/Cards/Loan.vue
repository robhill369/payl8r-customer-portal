<template>
  <div class="relative flex flex-col-reverse lg:flex-col bg-white w-full px-5 sm:px-9 py-7 rounded-lg">
    <div class="flex flex-col space-y-6">
      <div class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-0">
        <div class="flex h-14 lg:h-fit pr-6">
          <Avatar class="hidden lg:flex"/>
          <div class="flex flex-col justify-between lg:pl-7 w-72">
            <h3 class="font-semibold truncate">Company Name</h3>
            <div class="flex text-gray space-x-4">
              <p class="font-bold">16th Feb 2023</p>
              <p>30 days interest free</p>
            </div>
          </div>
        </div>
        <div class="flex w-full max-w-[220px] justify-between">
          <div class="flex flex-col justify-between">
            <h3>£00.00</h3>
            <div class="flex text-gray space-x-4">
              <p class="font-bold">Left to pay</p>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <h3>£00.00</h3>
            <div class="flex text-gray space-x-4">
              <p class="font-bold">Left to pay</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar/>
      <div class="flex flex-col lg:flex-row space-y-3.5 lg:space-x-3 lg:space-y-0">
        <ButtonSecondary>
          <font-awesome-icon icon="fa-solid fa-credit-card" size="md"/>
          <span class="pl-2">Pay instalment early</span>
        </ButtonSecondary>
        <ButtonSecondary>
          <font-awesome-icon icon="fa-solid fa-credit-card" size="md"/>
          <span class="pl-2">Pay instalment early</span>
        </ButtonSecondary>
      </div>
    </div>
    <Tag class="mb-6 lg:absolute lg:right-9 lg:bottom-1">Ongoing</Tag>
  </div>
</template>
<script setup>
import Avatar from "@/components/icons/Avatar.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
</script>