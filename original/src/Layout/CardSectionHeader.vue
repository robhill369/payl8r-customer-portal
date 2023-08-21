<template>
  <div class="w-full">
    <div class="flex flex-col w-full lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
      <div class="flex justify-between lg:justify-normal items-center lg:space-x-6">
        <div class="flex items-center">
          <slot name="icon"/>
          <h4>{{props.title}}</h4>
        </div>
        <slot name="button"/>
      </div>
      <slot name="tabs"/>
    </div>
    <slot/>
  </div>
</template>

<script setup>

const props = defineProps({
      title: {
        type: String,
        required: true,
      }
    }
)


</script>