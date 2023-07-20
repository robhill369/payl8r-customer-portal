<template>
  <div class="absolute text-nav h-full fixed w-80 flex-col bg-white drop-shadow-lg p-14">
    <div class="flex flex-col space-y-9 justify-between">
      <div>Logo</div>
      <div>
        <NavbarItem>
          Username
        </NavbarItem>
        <NavbarItem>
          Overview
        </NavbarItem>
        <NavbarItem>
          My loans
        </NavbarItem>
        <NavbarItem>
          My account
        </NavbarItem>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarItem from "@/components/NavbarItem.vue";

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
