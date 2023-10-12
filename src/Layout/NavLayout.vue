<template>
    <header v-if="!isEntryPage">
      <NavbarGroup
          :username=username
          :item-hidden=itemHidden
          :has-footer=hasNavFooter
      />
    </header>
    <main class="currentColor h-full">
      <div class="flex flex-col lg:flex-row currentColor">
        <div v-if="!isEntryPage" class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16" :class="isEntryPage ? 'h-screen' : ''">
          <router-view
              @show="itemHidden = true"
              @nav="isEntryPage = true"
          />
        </div>
      </div>
    </main>
</template>

<script setup>
import {ref} from "vue";
import NavbarGroup from "@/Layout/NavbarGroup.vue"

defineProps({
  username: {
    type: String
  },
  hasNavFooter: {
    type: Boolean
  }
})

const itemHidden = ref(false)
const isEntryPage = ref(false)

</script>