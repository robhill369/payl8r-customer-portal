<template>
  <div class="flex flex-col md:flex-row justify-between items-center w-full gap-[4vh] lg:mt-12 lg:px-12 xl:px-36 2xl:px-0 3xl:px-64 -translate-y-10 md:translate-y-0">
    <div class="space-y-3">
      <Payl8rLogo class="w-24 md:mt-4"/>
      <p class="hidden md:flex pt-4">
        Got a product with Payl8r or Upfront? Manage all your loans from here.
        Just login below with your shared account:
      </p>
      <RockerHandImage class="w-80 hidden md:flex"/>
    </div>
    <div class="md:space-y-3 lg:space-y-6 h-[80vh] md:h-auto flex flex-col justify-between md:justify-normal mx-4 sm:mx-16 md:mx-0">
        <div class="w-full relative h-12">
          <h1 class="absolute z-20 whitespace-nowrap px-2">Oh, hey there</h1>
          <div class="absolute top-5 bg-purple-light w-60 h-5"/>
        </div>
        <p class="md:hidden">
          Got a product with Payl8r or Upfront? Manage all your loans from here.
          Just login below with your shared account:
        </p>
      <BaseCard class="px-6 mx-auto md:px-9 pb-9 w-80 sm:w-96">
        <BaseForm
          class="w-full -mt-3"
          button-name="Log in"
          link-name="Forgotten your password?"
          link-url="https://www.somo.co.uk/"
        >
          <FormTextInput title="Email address" id="email"/>
          <FormTextInput title="Enter a new password" id="password" input-type="password"/>
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
import BaseForm from "@/components/Forms/Base.vue";
import FormTextInput from "@/components/Forms/FormTextInput.vue";
import BaseCard from "@/components/Cards/Base.vue";
import SecondaryButton from "@/components/Buttons/Secondary.vue";
import Payl8rLogo from "@/components/icons/Payl8rLogo.vue";
import UpfrontLogo from "@/components/icons/UpfrontLogo.vue";
import RockerHandImage from "@/components/icons/RockerHand.vue";

</script>