<template>
  <BaseCard class="px-9 py-7">
    <Avatar
      class="bg-pink-light text-pink-dark"
      :icon=icon
      size="xl"
    />
    <TitledCopy class="pl-7"
      :title=title
      :body=body
    />
  </BaseCard>
</template>
<script setup>
import Avatar from "@/components/icons/Avatar.vue";
import TitledCopy from "@/Layout/TitledCopy.vue";
import BaseCard from "@/components/Cards/Base.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  icon: {
    type: String
  }
})

</script>