<template>
  <router-link
    :to=path
    class="hover:bg-teal cursor-pointer -mx-14 px-14 py-6 flex items-center"
    :class="$route.path === path ? 'bg-teal' : ''"
  >
    <div class="pr-5"><slot/></div>
    <slot name="title"></slot>
  </router-link>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true
  }
})
</script>