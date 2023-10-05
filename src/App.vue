<template>
  <AppLayout>
    <header v-if="!isEntryPage">
      <NavbarGroup
        :username="user.firstName+' '+user.lastName"
        :overview-only=isSingleLoan
      />
    </header>
    <main class="currentColor h-full">
      <div class="flex flex-col lg:flex-row currentColor">
        <div v-if="!isEntryPage" class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16" :class="isEntryPage ? 'h-screen' : ''">
          <router-view
            @show="isSingleLoan = true"
            @nav="isEntryPage = true"
          />
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import {ref} from "vue";

import schemaData from '@/assets/json/schema.json'

import AppLayout from './Layout/AppLayout.vue'
import NavbarGroup from "@/Layout/NavbarGroup.vue";

const user = schemaData.user

const isSingleLoan = ref(false)
const isEntryPage = ref(false)

</script>
