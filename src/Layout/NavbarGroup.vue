<template>
  <Navbar
    class="xs:hidden lg:block capitalize"
    :username=username
    :item-hidden=itemHidden
    :has-footer=hasFooter
  />
  <NavbarMobile
    class="relative lg:hidden"
    :username=username
    :item-hidden=itemHidden
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
  itemHidden: {
    type: Boolean,
    default: false,
    required: true
  },
  hasFooter: {
    type: Boolean
  }
})
</script>