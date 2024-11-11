<template>
  <div class="flex relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden" :class="provider === 'payl8r' ? avatarColors : ''">
    <div v-if="provider !== 'payl8r'" class="w-full h-full">
      <UpfrontLogo v-if="provider === 'upfront'" class="h-full w-full py-3 pl-1" :class="provider === 'upfront' ? 'bg-purple' : ''"/>
    </div>
    <h1 v-else-if="initialTitle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[400] capitalize">
      {{initialTitle ? initialTitle.charAt(0) : ''}}
    </h1>
    <font-awesome-icon v-if="icon" :icon="icon" :size="props.size" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>

<script setup>

import UpfrontLogo from "@/components/icons/UpfrontIconLogo.vue";

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: String,
    default: 'xl'
  },
  initialTitle: {
    type: String,
  },
  avatarColors: {
    type: String
  },
  provider: {
    type: String,
    default: 'payl8r'
  }
})

</script>