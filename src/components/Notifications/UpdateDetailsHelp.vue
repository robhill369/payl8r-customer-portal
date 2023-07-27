<template>
  <BaseNotification
      class="bg-yellow-light text-yellow-dark"
      icon="fa-solid fa-circle-info"
      title="Need to update your name or email?"
      is-helper="true"
  >
    <p>Please email support@payl8r.com to change these details with our team.</p>
  </BaseNotification>
</template>

<script setup>
import BaseNotification from "@/components/Notifications/Base.vue";

</script>