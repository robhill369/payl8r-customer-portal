<template>
  <div class="flex flex-col bg-white w-full px-9 py-7 rounded-lg space-y-6">
    <div class="flex w-full justify-between">
      <div class="flex h-fit">
        <Avatar/>
        <div class="flex flex-col justify-between pl-7 w-72">
          <h3 class="font-semibold truncate">Company Name</h3>
          <div class="flex text-gray space-x-4">
            <p class="font-bold">16th Feb 2023</p>
            <p>30 days interest free</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col h justify-between">
        <h3>£00.00</h3>
        <div class="flex text-gray space-x-4">
          <p class="font-bold">Left to pay</p>
        </div>
      </div>
      <div class="flex flex-col h justify-between">
        <h3>£00.00</h3>
        <div class="flex text-gray space-x-4">
          <p class="font-bold">Left to pay</p>
        </div>
      </div>
    </div>
    <ProgressBar/>
    <div class="flex justify-between">
      <div class="flex space-x-3">
        <ButtonSecondary>
          <font-awesome-icon icon="fa-solid fa-credit-card" size="md"/>
          <span class="pl-2">Pay instalment early</span>
        </ButtonSecondary>
        <ButtonSecondary>
          <font-awesome-icon icon="fa-solid fa-credit-card" size="md"/>
          <span class="pl-2">Pay instalment early</span>
        </ButtonSecondary>
      </div>
      <Tag>Ongoing</Tag>
    </div>
  </div>
</template>
<script setup>
import Avatar from "@/components/icons/Avatar.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
</script>