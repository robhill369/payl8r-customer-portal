<template>
  <BaseNotification
      class="bg-green-light text-green-dark"
      title="Payment successful"
      icon="fa-solid fa-circle-check"
  >
    <p>It can take a few minutes for this to reflect in your account.</p>
  </BaseNotification>
</template>

<script setup>
import BaseNotification from "@/components/Notifications/Base.vue";

</script>