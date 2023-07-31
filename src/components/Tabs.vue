<template>
    <div class="grid grid-cols-3 gap-2 h-9 lg:h-11 w-full max-w-[391px] bg-gray-dark rounded-full text-tab text-white p-1">
      <div>
        <input type="radio" name="option" id="1" value="1" class="peer hidden" checked/>
        <label for="1" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 lg:h-9 pt-1.5 lg:pt-2.5">option 1</label>
      </div>

      <div>
        <input type="radio" name="option" id="2" value="2" class="peer hidden"/>
        <label for="2" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 lg:h-9 pt-1.5 lg:pt-2.5">option 2</label>
      </div>

      <div>
        <input type="radio" name="option" id="3" value="3" class="peer hidden"/>
        <label for="3" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 lg:h-9 pt-1.5 lg:pt-2.5">option 3</label>
      </div>
    </div>
</template>
<script setup>
</script>