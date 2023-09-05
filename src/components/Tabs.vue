<template>
    <div class="grid gap-2 h-9 md:h-11 w-full max-w-[535px] lg:max-w-[512px] bg-gray-dark rounded-full text-tab text-white p-1 grid-cols-4 items-center">
      <div v-for="tab in tabs" :key="tab.name">
        <input type="radio" :name=tab.name :id=tab.name class="peer hidden" :value=tab.name />
        <label :for=tab.name class="cursor-pointer select-none rounded-full text-center peer-checked:bg-white peer-checked:text-gray-darker h-7 md:h-9 items-center flex justify-center">{{tab.name}}</label>
      </div>
    </div>
</template>
<script setup>

defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

// const hello = ref(1)
//
// const currentTab = (tabNumber) => {
//   hello.value = tabNumber;
// }

// const toKebabCase = (str) =>
//     str &&
//     str
//         .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//         .map(x => x.toLowerCase())
//         .join('-');
//
// const kebab1 = toKebabCase(props.tab1)
// const kebab2 = toKebabCase(props.tab2)
// const kebab3 = toKebabCase(props.tab3)
// const kebab4 = toKebabCase(props.tab4)

</script>