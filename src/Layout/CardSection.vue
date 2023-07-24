<template>
    <div class="relative flex flex-col space-y-10">
<!--      :class="HelpPage and simple card ? 'flex-col' : 'flex-row'"-->
      <slot/>
    </div>
</template>

<script setup>
import CardSectionHeader from "@/Layout/CardSectionHeader.vue";
</script>