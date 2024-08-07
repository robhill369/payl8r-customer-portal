<template>
  <div>
    <h4>{{ title }}</h4>
    <slot name="helper"/>
    <form class="mt-9" :class="isEntryPage ? 'space-y-7' : 'space-y-11'">
      <div class="flex flex-col space-y-7">
        <slot/>
      </div>
      <div class="flex" :class="linkBelowButton ? 'flex-col space-y-6' : 'flex-row items-center space-x-3'">
        <PrimaryButton
          :name=buttonName
        />
        <router-link v-if="isEntryPage" :to=linkUrl class="underline font-montserrat text-xxs font-semibold cursor-pointer">{{linkName}}</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import PrimaryButton from "@/components/Buttons/Secondary.vue";

defineProps ({
  title: {
    type: String
  },
  buttonName: {
    type: String,
    required: true,
  },
  linkName: {
    type: String
  },
  linkUrl: {
    type: String
  },
  linkBelowButton: {
    type: Boolean
  },
  isEntryPage: {
    type: Boolean
  }
})
</script>