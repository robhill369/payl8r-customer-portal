<template>
    <div class="relative flex flex-col space-y-10">
      <slot/>
    </div>
</template>

<script setup>

const props = defineProps( {
    hasCols: {
      type: Boolean
    }
}
)
</script>