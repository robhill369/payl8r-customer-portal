<template>
  <AppLayout>
    <header>
      <Navbar class="xs:hidden lg:block"/>
      <NavbarMobile class="relative lg:hidden"/>
    </header>
    <main class="currentColor ">
      <div class="flex flex-col lg:flex-row currentColor">
<!--        teleport height of mobile navbar -->
        <div class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16 currentColor">
          <MainPage class="currentColor"/>
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import Navbar from './Layout/Navbar.vue'
import AppLayout from './Layout/AppLayout.vue'
import MainPage from './Pages/Main.vue'
import NavbarMobile from "@/Layout/NavbarMobile.vue";
import PaymentSuccessfulNotification from "@/components/Notifications/PaymentSuccessful.vue";
import PaymentsOverdueNotification from "@/components/Notifications/PaymentsOverdue.vue";
import PaymentCardUpdatedNotification from "@/components/Notifications/PaymentCardUpdated.vue";
import NavbarList from "@/Layout/NavbarList.vue";

</script>
