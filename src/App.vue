<template>
  <AppLayout>
    <header>
      <Navbar msg="test"/>
    </header>
    <main>
      <OverviewPage/>
    </main>
  </AppLayout>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AppLayout from './Layout/AppLayout.vue'
import OverviewPage from './Pages/Overview.vue'

</script>
