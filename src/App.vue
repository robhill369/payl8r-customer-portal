<template>
  <div class="absolute top-0 left-0 w-screen bg-gray-light currentColor">
    <NavLayout
      :username="user.firstName+' '+user.lastName"
    />
  </div>
</template>

<script setup>
import NavLayout from "@/Layout/NavLayout.vue"
import schemaData from '@/assets/json/schema.json'

const user = schemaData.user
</script>
