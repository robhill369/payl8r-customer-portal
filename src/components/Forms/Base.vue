<template>
  <div>
    <h4>{{ title }}</h4>
    <slot name="helper"/>
    <form class="mt-9 space-y-11">
      <div class="flex flex-col space-y-7">
        <slot/>
      </div>
      <div class="flex items-center space-x-3">
        <PrimaryButton
          :name=buttonName
        />
        <a :href=linkUrl class="underline text-tab cursor-pointer">{{linkName}}</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import PrimaryButton from "@/components/Buttons/Primary.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";

defineProps ({
  title: {
    type: String,
    required: true
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
  }
})
</script>