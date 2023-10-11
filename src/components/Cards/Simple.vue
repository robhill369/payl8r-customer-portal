<template>
  <BaseCard class="px-9 py-7 items-center">
    <Avatar
      :class=props.avatarColors
      :icon=props.icon
      :size=props.iconSize
    />
    <TitledCopy class="pl-7"
      :title=props.title
      :body=props.body
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