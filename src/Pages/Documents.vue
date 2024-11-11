<template>
  <PageBase>
    <h2 class="font-bold"> My documents </h2>
    <div class="flex bg-white rounded-2xl drop-shadow-md flex-col ">
      <div class="py-8 mx-5 lg:mx-11 space-x-2 space-y-2 text-center md:text-left">
        <button class="w-fit text-button rounded-full items-center whitespace-nowrap py-2.5 px-5 bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected active:text-white">
          <span>Default notice</span>
        </button>
        <button class="w-fit text-button rounded-full items-center whitespace-nowrap py-2.5 px-5 bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected active:text-white">
        <span>Nosia</span>
        </button>
        <button class="w-fit text-button rounded-full items-center whitespace-nowrap py-2.5 px-5 bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected active:text-white">
          <span>Nosia initial</span>
        </button>
        <button class="w-fit text-button rounded-full items-center whitespace-nowrap py-2.5 px-5 bg-button-tertiary hover:bg-button-tertiary-hover active:bg-button-tertiary-selected active:text-white">
          <span>???</span>
        </button>
      </div>
      <hr class="border-gray-lighter mb-6">
<!--      <SearchInput v-model="search" class="lg:hidden"/>-->
      <div class=" mt-8 lg:mt-2 table-scroll">
        <div class="table-scroll-inner">
          <div class="grid items-center text-xs pb-6 font-semibold px-5 lg:!pl-11 grid-cols-4 md:grid-cols-5 gap-x-5">
            <div class=" md:col-span-2">Document name</div>
            <div>Type</div>
            <div>Created date</div>
          </div>
          <div
              v-for="(document, index) in filteredDocuments(documents)"
              :key="document.id"
              class="grid items-center text-xs font-lato px-5 py-5 lg:!pl-11 grid-cols-4 md:grid-cols-5 gap-x-5"
              :class="index % 2 === 0 ? 'bg-gray-lightest' : 'bg-white'"
          >
            <div class="md:col-span-2 w-fit line-clamp-1">
              {{ document.name}}
            </div>
            <div >{{ document.type }}</div>
            <div >{{ document.created_at }}</div>
            <div class="flex justify-center">
              <a
                class="relative h-8 w-8 bg-gray-darker rounded-full hover:bg-pink active:bg-gray-dark cursor-pointer"
                download
                :href="document.source"
              >
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  size="lg" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  :class="index % 2 === 0 ? 'text-gray-lighter' : 'text-white'"
                />
              </a>
            </div>
        </div>
      </div>
      <div class="h-28"/>
    </div>
    </div>
  </PageBase>
</template>

<script setup>
import {ref} from "vue";
import schemaData from '../assets/json/schema.json'
import PageBase from "./Base.vue";

const documents = schemaData.documents
const search = ref('')
const isShowingDocumentDetails = ref(false)
const document = ref({})

const filteredDocuments = (documents) => {
  return documents
}

</script>