<template>
  <AppLayout>
    <header>
      <Navbar
          class="xs:hidden lg:block capitalize"
          :username="user.firstName+' '+user.lastName"
      />
      <NavbarMobile
          class="relative lg:hidden"
          :username="user.firstName+' '+user.lastName"
      />
    </header>
    <main class="currentColor ">
      <div class="flex flex-col lg:flex-row currentColor">
        <div class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import Navbar from './Layout/Navbar.vue'
import AppLayout from './Layout/AppLayout.vue'
import NavbarMobile from "@/Layout/NavbarMobile.vue";

import schemaData from '@/assets/json/schema.json'

const user = schemaData.user

</script>
