<template>
  <div class="flex flex-col space-y-10 w-full">
    <div>
      <h4>My account</h4>
    </div>
    <div class="flex flex-col space-y-10">
<!--      :class="Columns ? '' : 'flex-col'"-->
      <slot/>
    </div>
  </div>
</template>

<script setup>

</script>