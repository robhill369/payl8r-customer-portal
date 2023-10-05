<template>
  <div class="flex flex-col-reverse lg:flex-col text-nav" :class="overviewOnly ? 'lg:-translate-y-[69px]' : ''">
    <NavbarItem path="/my-account" class="lg:text-gray lg:pointer-events-none lg:bg-white">
      <font-awesome-icon icon="fa-solid fa-user-circle" size="xl" class="-mr-1.5 lg:mr-0"/>
      <template v-slot:title>{{ username }}</template>
    </NavbarItem>
    <div>
      <NavbarItem
        path="/"
        @click="$emit('closeNav')"
      >
        <font-awesome-icon icon="fa-solid fa-house" size="xl"/>
        <template v-slot:title>Overview</template>
      </NavbarItem>
      <NavbarItem
        path="/my-loans"
        @click="$emit('closeNav')"
        v-if="!overviewOnly"
      >
        <font-awesome-icon icon="fa-solid fa-wallet" size="xl"/>
        <template v-slot:title>My loans</template>
      </NavbarItem>
      <NavbarItem
        path="/my-account"
        @click="$emit('closeNav')"
      >
        <font-awesome-icon icon="fa-solid fa-gear" size="xl"/>
        <template v-slot:title>My account</template>
      </NavbarItem>
      <NavbarItem
        path="/help"
        @click="$emit('closeNav')"
      >
        <font-awesome-icon icon="fa-solid fa-headset" size="xl"/>
        <template v-slot:title>Help centre</template>
      </NavbarItem>
      <router-link to="/login">
        <button
          class="flex border rounded-md pr-2 text-xxs lg:text-sm border-gray-darker lg:border-gray mt-4 mb-3"
          @click="$emit('closeNav')"
        >
          <div class="flex w-28 lg:w-32 justify-evenly my-2 lg:my-2.5 items-center">
            <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" size="xl"/>
            Log out
          </div>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import NavbarItem from "@/Layout/NavbarItem.vue";

defineProps ({
  username: {
    type: String
  },
  overviewOnly: {
    type: Boolean,
    default: false,
    required: true
  }
})
</script>