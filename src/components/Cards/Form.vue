<template>
  <BaseCard>
    <Avatar
      :class=avatarColors
      :icon=icon
      :size=iconSize
    />
    <TitledCopy class="pl-7"
      :title=title
      :body=body
    />
  </BaseCard>
</template>
<script setup>
import Avatar from "@/components/Avatar.vue";
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
  },
  iconSize: {
    type: String,
    default: 'xl'
  },
  avatarColors: {
    type: String
  }
})

</script>