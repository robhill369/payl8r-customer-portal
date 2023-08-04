<template>
    <section class="relative flex flex-col space-y-10">
      <slot/>
    </section>
</template>

<script setup>

const props = defineProps( {
    hasCols: {
      type: Boolean
    }
}
)
</script>