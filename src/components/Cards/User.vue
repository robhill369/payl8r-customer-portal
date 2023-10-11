<template>
  <BaseCard>
    <div class="flex pr-6">
      <Avatar
        class="hidden lg:block"
        avatar-colors="bg-teal-light text-teal-dark"
        icon="fa-solid fa-user-circle"
        size="2xl"
      />
      <div class="flex flex-col justify-between lg:pl-7 space-y-3">
        <h3 class="font-semibold">{{ props.username }}</h3>
        <div class="text-md text-gray normal-case">Payl8r user since {{ props.registrationDate }}</div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import BaseCard from "@/components/Cards/Base.vue";

const props = defineProps ({
  username: {
    type: String,
    required: true
  },
  registrationDate: {
    type: String,
    required: true
  }
})
</script>