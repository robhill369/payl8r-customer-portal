<template>
  <BaseNotification
      class="bg-red-light text-red-dark"
      title="Action needed"
      icon="fa-solid fa-circle-exclamation"
  >
    <slot/>
  </BaseNotification>
</template>

<script setup>
import BaseNotification from "@/components/Notifications/Base.vue";

</script>