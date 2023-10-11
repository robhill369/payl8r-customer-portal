<template>
  <div class="fixed text-nav h-full w-[315px] flex-col bg-white drop-shadow-lg p-14 z-in border-r-2 border-[#E0E0E0]">
    <div class="flex flex-col justify-between h-[489px]">
      <router-link to="/"><Payl8rLogo/></router-link>
      <NavbarList
        :username=username
        :item-hidden=itemHidden
      />
    </div>
    <div v-if="hasFooter" class="absolute h-[69px] w-full bg-gray-light bottom-0 left-0 px-14 flex items-center normal-case space-x-4">
      <p>Find us on</p>
      <a href="https://www.instagram.com/payl8r" target="_blank">
        <font-awesome-icon icon="fa-brands fa-instagram" size="xl"/>
      </a>
      <a href="https://www.facebook.com/payl8r" target="_blank">
        <font-awesome-icon icon="fa-brands fa-facebook" size="xl"/>
      </a>
      <a href="https://www.linkedin.com/company/payl8r" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="xl"/>
      </a>
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
  itemHidden: {
    type: Boolean,
    default: false
  },
  hasFooter: {
    type: Boolean
  }
})
</script>
