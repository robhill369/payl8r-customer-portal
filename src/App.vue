<template>
  <AppLayout>
    <header>
      <NavbarGroup
        :username="user.firstName+' '+user.lastName"
        :overview-only=isSingleLoan
      />
    </header>
    <main class="currentColor ">
      <div class="flex flex-col lg:flex-row currentColor">
        <div class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16">
          <router-view @show="isSingleLoan = true"/>
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import {ref} from "vue";
import Navbar from './Layout/Navbar.vue'
import AppLayout from './Layout/AppLayout.vue'
import NavbarMobile from "@/Layout/NavbarMobile.vue";

import schemaData from '@/assets/json/schema.json'
import NavbarGroup from "@/Layout/NavbarGroup.vue";

const user = schemaData.user

const isSingleLoan = ref(false)



</script>
