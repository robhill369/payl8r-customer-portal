<template>
  <div class="flex flex-col md:flex-row justify-between w-full gap-[4vh] md:gap-10 lg:mt-8 lg:px-12 xl:px-36 2xl:px-0 3xl:px-64 -translate-y-10 md:translate-y-0">
    <div class=" flex flex-col justify-between">
      <Payl8rLogo class="md:mt-4 mx-auto md:mx-0"/>
      <p class="hidden md:block">
        {{ $route.path === '/login' ? 'Got a product with Payl8r or Upfront? Manage all your loans from here. Just login below with your shared account:' : 'Tell us your email address on file and we will send you a link to reset your password.'}}
      </p>
      <RockerHandImage class="w-80 hidden md:flex"/>
    </div>
    <div class="md:space-y-3 lg:space-y-6 h-[80vh] md:h-auto flex flex-col justify-between md:justify-normal sm:mx-16 md:mx-0">
        <div class="w-full relative h-12">
          <h1 class="absolute z-20 whitespace-nowrap px-2">{{ $route.path === '/login' ? 'Oh, hey there' : 'It happens.'}}</h1>
          <div class="absolute top-5 bg-purple-light h-5" :class="$route.path === '/login' ? 'w-60' : 'w-52'"/>
        </div>
        <p class="md:hidden h-16">
          {{ $route.path === '/login' ? 'Got a product with Payl8r or Upfront? Manage all your loans from here. Just login below with your shared account:' : 'Tell us your email address on file and we will send you a link to reset your password.'}}
        </p>
      <BaseCard class="sm:w-96 h-80">
        <BaseForm
          v-if="$route.path === '/login'"
          class="w-full -mt-10"
          button-name="Log in"
          link-name="Forgotten your password?"
          link-url="/forgot-password"
          is-entry-page
        >
          <FormTextInput title="Email address" id="email" :has-focus-styling="false"/>
          <FormTextInput title="Password" id="password" input-type="password" :has-focus-styling="false"/>
        </BaseForm>
        <BaseForm
            v-else
            class="w-full mt-2"
            title="Reset my password"
            button-name="Submit"
            link-name="Go back to login"
            link-url="/login"
            link-below-button
            is-entry-page
        >
          <FormTextInput title="Email address" id="email" :has-focus-styling="false"/>
        </BaseForm>
      </BaseCard>
      <div class="flex space-x-3 pt-3 lg:pt-5">
        <a href="https://payl8r.com/" target="_blank">
          <SecondaryButton class="h-14">
            <Payl8rLogo class="w-20 h-full"/>
          </SecondaryButton>
        </a>
        <a href="https://www.upfrontcredit.co.uk/" target="_blank">
          <SecondaryButton class=h-14>
            <UpfrontLogo class="w-20 h-full"/>
          </SecondaryButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, defineEmits} from "vue";
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";
import BaseCard from "@/components/Cards/Base.vue";
import SecondaryButton from "@/components/Buttons/Secondary.vue";
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";
import UpfrontLogo from "@/components/icons/UpfrontLogo.vue";
import RockerHandImage from "@/components/icons/RockerHand.vue";
import {useRoute} from "vue-router";

const emit = defineEmits(['nav'])

const route = useRoute()

onMounted(() => {
  if(route.path !== '/login' || route.path !== '/forgot-password') {
    emit('nav')
  }
})
</script>