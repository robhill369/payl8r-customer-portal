<template>
  <Navbar
    class="xs:hidden lg:block capitalize"
    :username=username
    :overview-only=overviewOnly
  />
  <NavbarMobile
    class="relative lg:hidden"
    :username=username
    :overview-only=overviewOnly
  />
</template>

<script setup>
import NavbarMobile from "@/Layout/NavbarMobile.vue";
import Navbar from "@/Layout/Navbar.vue";

defineProps({
  username: {
    type: String,
    required: true
  },
  overviewOnly: {
    type: Boolean,
    default: false,
    required: true
  }
})
</script>