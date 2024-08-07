<template>
  <div class="relative currentColor z-50">
    <div class="fixed z-50 w-full bg-gray-lighter drop-shadow-md"
         :class="NavOpened ? 'bg-teal' : 'bg-gray-lighter'"
    >
      <div class="flex flex-col pt-2 z-30">
        <div class="relative h-24 z-50">
          <div class="absolute top-1/2 -translate-y-1/2 left-9" @click="NavOpened = !NavOpened">
            <font-awesome-icon icon="fa-solid fa-xmark" size="2xl" v-if="NavOpened"/>
            <font-awesome-icon icon="fa-solid fa-bars" size="2xl" v-else/>
          </div>
          <router-link to="/">
            <Payl8rLogo class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-28"/>
          </router-link>
        </div>
        <div class="px-7 w-full sm:container" :class="NavOpened ? 'pb-4' : ''">
          <div v-if="!NavOpened">
<!--            v-for Notification in Notifications-->
<!--            <PaymentSuccessfulNotification class="mb-4"/>-->
<!--            <PaymentCardUpdatedNotification class="mb-4"/>-->
<!--            <PaymentsOverdueNotification class="mb-4"/>-->
          </div>
          <NavbarList
              v-else
              class="pl-5"
              :NavOpened="NavOpened"
              :username=username
              :item-hidden=itemHidden
              @closeNav="NavOpened = false"
          />
        </div>
      </div>
    </div>
    <div v-if="NavOpened" class="h-screen top-0 w-full fixed z-40 bg-gray-darker opacity-50" @click="NavOpened = !NavOpened"/>
  </div>
</template>

<script setup>
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";
import PaymentSuccessfulNotification from "@/components/Notifications/PaymentSuccessful.vue";
import PaymentsOverdueNotification from "@/components/Notifications/PaymentsOverdue.vue";
import PaymentCardUpdatedNotification from "@/components/Notifications/PaymentCard.vue";
import NavbarItem from "@/Layout/NavbarItem.vue";
import NavbarList from "@/Layout/NavbarList.vue";
import {ref} from "vue";

defineProps ({
  username: {
    type: String,
    required: true
  },
  itemHidden: {
    type: Boolean
  }
})

const NavOpened = ref(false);

</script>