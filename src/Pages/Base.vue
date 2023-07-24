<template>
  <div class="flex flex-col justify-between space-y-14">
    <slot/>
  </div>
  <Footer/>
</template>
<script setup>
import Footer from "@/Layout/Footer.vue";
</script>