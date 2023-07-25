<template>
  <div class="flex h-14 lg:h-fit pr-3">
    <Avatar
      class="hidden lg:flex bg-pink-light text-pink-dark"
    />
    <div class="flex flex-col justify-between lg:pl-4 w-72">
      <h3 class="font-semibold truncate">Company Name</h3>
      <div class="flex text-gray space-x-4">
        <p class="font-bold">16th Feb 2023</p>
        <p>30 days interest free</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import Avatar from "@/components/icons/Avatar.vue";
</script>