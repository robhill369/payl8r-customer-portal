<template>
  <div class="fixed text-nav h-full w-[315px] flex-col bg-white drop-shadow-lg p-14 z-in border-r-2 border-[#E0E0E0]">
    <div class="flex flex-col h-[489px] justify-between">
      <Payl8rLogo/>
      <NavbarList/>
    </div>
  </div>
</template>

<script setup>
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";
import NavbarList from "@/Layout/NavbarList.vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
