<template>
  <AppLayout>
    <header>
      <Navbar msg="test"/>
    </header>
    <main>
      <div class="flex">
        <div class="xs:hidden lg:flex bg-blue-400 w-96 2xl:w-16"/>
        <div class="px-5 w-full sm:container pt-16 bg-red">
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
