<template>
    <div class="grid grid-cols-3 gap-2 h-9 md:h-11 w-full max-w-[503px] bg-gray-dark rounded-full text-tab text-white p-1">
      <div>
        <input type="radio" name=kebab1 :id=kebab1 class="peer hidden" :value=kebab1 checked/>
        <label :for="kebab1" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 md:h-9 pt-1.5 md:pt-2.5">{{tab1}}</label>
      </div>
      <div>
        <input type="radio" name=kebab2 :id=kebab2 class="peer hidden" :value=kebab2 />
        <label :for="kebab2" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 md:h-9 pt-1.5 md:pt-2.5">{{tab2}}</label>
      </div>
      <div>
        <input type="radio" name=kebab3 :id=kebab3 class="peer hidden" :value=kebab3 />
        <label :for="kebab3" class="block cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 md:h-9 pt-1.5 md:pt-2.5">{{tab3}}</label>
      </div>
    </div>
</template>
<script setup>

const props = defineProps({
  tab1: String,
  tab2: String,
  tab3: String,
})


const toKebabCase = (str) =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');

const kebab1 = toKebabCase(props.tab1)
const kebab2 = toKebabCase(props.tab2)
const kebab3 = toKebabCase(props.tab3)
</script>