<template>
  <AppLayout>
    <header>
      <Navbar msg="test"/>
    </header>
    <main>
      <div class="flex">
        <div class="xs:hidden lg:flex w-96 2xl:w-14"/>
        <div class="mx-5 sm:mx-0 sm:container pt-16 bg-red">
          <OverviewPage/>
        </div>
      </div>
    </main>
  </AppLayout>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AppLayout from './Layout/AppLayout.vue'
import OverviewPage from './Pages/Overview.vue'

</script>
