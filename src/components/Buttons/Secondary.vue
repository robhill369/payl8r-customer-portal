<template>
  <ButtonBase class="bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected active:text-white">
    <slot/>
  </ButtonBase>
</template>

<script setup>
import ButtonBase from "@/components/Buttons/Base.vue";
</script>
