<template>
  <ButtonBase class="bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-selected text-white">
    <slot/>
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";
</script>
