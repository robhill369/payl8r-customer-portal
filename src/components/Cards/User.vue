<template>
  <BaseCard class="px-6 sm:px-9 py-7">
    <div class="flex h-14 lg:h-fit pr-6">
      <Avatar
        class="hidden lg:flex bg-pink-light text-pink-dark"
        icon="fa-solid fa-message"
        size="2xl"
      />
      <div class="flex flex-col justify-between lg:pl-7 w-96">
        <h3 class="font-semibold truncate">User Name</h3>
        <div class="text-md text-gray">Payl8r user since 20th December 2003</div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import Avatar from "@/components/icons/Avatar.vue";
import BaseCard from "@/components/Cards/Base.vue";
</script>