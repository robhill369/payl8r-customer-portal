<template>
  <div>
    <h4>{{ title }}</h4>
    <slot name="helper"/>
    <form class="mt-9 space-y-11">
      <div class="flex flex-col space-y-7">
        <slot/>
      </div>
      <PrimaryButton
        :name=buttonName
      />
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
  }
})
</script>