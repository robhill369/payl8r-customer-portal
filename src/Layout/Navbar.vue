<template>
  <div class="fixed text-nav h-full w-[315px] flex-col bg-white drop-shadow-lg p-14 z-in border-r-2 border-[#E0E0E0]">
    <div class="flex flex-col justify-between h-[489px]">
      <router-link to="/"><Payl8rLogo/></router-link>
      <NavbarList
        :username=username
        :overview-only=overviewOnly
      />
    </div>
  </div>
</template>

<script setup>
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";
import NavbarList from "@/Layout/NavbarList.vue";

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
