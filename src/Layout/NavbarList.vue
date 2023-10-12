<template>
  <div class="flex flex-col-reverse lg:flex-col text-nav" :class="itemHidden ? 'lg:-translate-y-[69px]' : ''">
    <NavbarItem path="/my-account" class="lg:text-gray lg:pointer-events-none lg:bg-white">
      <font-awesome-icon icon="fa-solid fa-user-circle" size="xl" class="-mr-1.5 lg:mr-0"/>
      <template v-slot:title>{{ username }}</template>
    </NavbarItem>
    <div>
      <template v-for="route in router.options.routes.slice(2)">
        <NavbarItem
          :path=route.path
          @click="$emit('closeNav')"
        >
          <font-awesome-icon :icon="route.icon" size="xl"/>
          <template v-slot:title>{{ route.name }}</template>
        </NavbarItem>
      </template>
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
import router from "@/router";

defineProps ({
  username: {
    type: String
  },
  itemHidden: {
    type: Boolean,
    default: false
  }
})
</script>