<template>
  <div class="xs:hidden lg:block fixed text-nav h-full fixed w-[315px] flex-col bg-white drop-shadow-lg p-14 z-in border-r-2 border-[#E0E0E0]">
    <div class="flex flex-col h-[489px] justify-between">
      <div>
        <Payl8rLogo/>
      </div>
      <div>
        <NavbarItem>
          <font-awesome-icon icon="fa-solid fa-user-circle" size="xl"/>
          <template v-slot:title>Username</template>
        </NavbarItem>
        <NavbarItem>
          <font-awesome-icon icon="fa-solid fa-house" size="xl"/>
          <template v-slot:title>Overview</template>
        </NavbarItem>
        <NavbarItem>
          <font-awesome-icon icon="fa-solid fa-wallet" size="xl"/>
          <template v-slot:title>My loans</template>
        </NavbarItem>
        <NavbarItem>
          <font-awesome-icon icon="fa-solid fa-gear" size="xl"/>
          <template v-slot:title>My account</template>
        </NavbarItem>
        <NavbarItem>
          <font-awesome-icon icon="fa-solid fa-headset" size="xl"/>
          <template v-slot:title>Help centre</template>
        </NavbarItem>
      </div>
      <div>
        <button class="flex border-2 border-gray rounded-lg pr-2">
          <div class="flex w-36 justify-evenly my-3.5">
          <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" size="xl"/>
          Logout
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarItem from "@/components/NavbarItem.vue";
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
