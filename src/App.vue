<template>
  <AppLayout>
    <header>
      <Navbar
          class="xs:hidden lg:block"
          username="USERNAME"
      />
      <NavbarMobile
          class="relative lg:hidden"
          username="USERNAME"
      />
    </header>
    <main class="currentColor ">
      <div class="flex flex-col lg:flex-row currentColor">
<!--        teleport height of mobile navbar -->
        <div class="h-20 lg:h-auto lg:flex w-full lg:w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16">
          <MainPage/>
<!--          <HelpPage/>-->
<!--          <AccountPage-->
<!--            username="USERNAME"-->
<!--            current-last-four-digits="FOUR"-->
<!--            registration-date="REG DATE"-->
<!--            current-legal-name="CURRENT LEGAL NAME"-->
<!--            current-email="CURRENT EMAIL ADDRESS"-->
<!--          />-->
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
import HelpPage from "@/Pages/Help.vue";
import AccountPage from "@/Pages/Account.vue";



</script>
