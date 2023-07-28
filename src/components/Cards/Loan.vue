<template>
  <BaseCard class="relative lg:flex-col px-5 xl:px-9 py-7">
    <div class="flex flex-col w-full space-y-5">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-9"
        :class="loanDetails ? 'lg:flex-col' : 'lg:-mt-9'"
      >
        <div :class="loanDetails ? 'w-full flex justify-between' : 'lg:absolute bottom-7 right-5 xl:right-9'">
          <Tag :status= loanStatus />
          <ButtonPrimary
            class="bg-gray-dark"
            v-if="loanDetails"
            name="Close"
            icon="fa-solid fa-close"
            size="xl"
          />
        </div>
        <div class="flex justify-between">
          <div class="flex h-14 lg:h-fit pr-3">
            <Avatar
                class="hidden lg:flex"
                :avatar-colors= "paymentOverdue ? 'bg-red-light text-red' : 'bg-teal-light text-teal'"
            />
            <div class="flex flex-col justify-between lg:pl-4 w-72">
              <h3 class="font-semibold truncate">{{retailerName}}</h3>
              <div class="flex text-gray space-x-4">
                <p class="font-bold">{{loanStartDate}}</p>
                <p>{{interestFreePeriod}} days interest free</p>
              </div>
            </div>
          </div>
          <ButtonBase
            v-if="loanDetails"
            class="hidden sm:block bg-white border border-gray-darker pointer-events-none h-fit"
          >
            <h4 class="font-[400]">£{{ monthlyPaybackValue }} p/m</h4>
          </ButtonBase>
        </div>
        <div
          class="flex w-full space-x-2 justify-between h-12 lg:h-auto"
          :class="loanDetails ? '' : 'lg:max-w-[265px]'"
        >
          <div
            class="flex flex-col justify-between"
            :class="loanDetails ? 'lg:flex-row lg:space-x-3' : ''"
          >
            <h3>£{{totalLoanValue}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">Total inc. interest</p>
            </div>
          </div>
          <div class="flex flex-col justify-between"
               :class="loanDetails ? 'lg:flex-row lg:space-x-3' : ''"
          >
            <h3>£{{valueLeftToPay}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">Left to pay</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        :color="paymentOverdue ? 'red-light' : 'teal'"
      />
      <div>
        <div v-if="loanDetails"
          class="flex flex-col -mx-5 xl:-mx-9 mt-2"
          :class="paymentOverdue ? 'bg-red-light' : 'border-b'"
        >
          <div v-if="paymentOverdue" class="flex items-center mx-5 xl:mx-6 3xl:mx-9 py-5">
            <Avatar
                class="w-8 h-8"
                avatar-colors="bg-red text-red-light"
                icon="fa-solid fa-circle-exclamation"
                size="lg"
            />
            <div class="text-sm space-y-2 pl-3">
              <div>We have been unable to take payment for this loan automatically and it is now overdue.</div>
              <div>Please make a manual payment to avoid late fees and potential negative effects to your credit file.</div>
            </div>
          </div>

        </div>
        <div
          class="flex flex-col md:flex-row space-y-3.5 md:space-x-3 md:space-y-0"
          :class="loanDetails ? 'py-7 border-b -mx-5 px-5 xl:-mx-9 xl:px-9' : ''"
        >
          <ButtonSecondary
            v-if="paymentOverdue"
            class="w-full sm:w-auto"
            name="Instalment overdue - make payment"
            icon="fa-solid fa-exclamation-circle"
          />
          <ButtonSecondary
            v-if="!paymentOverdue"
            class="w-full sm:w-auto"
            name="Pay instalment early"
            icon="fa-solid fa-credit-card"
          />
          <ButtonSecondary
            v-if="!paymentOverdue"
            class="w-full sm:w-auto"
            name="Change payment date"
            icon="fa-solid fa-arrows-rotate"
          />
          <ButtonSecondary
            v-if="loanDetails"
            class="w-full sm:w-auto"
            name="View loan agreement"
            icon="fa-solid fa-file"
          />
        </div>
      </div>
<!--      <Tag-->
<!--          class="mb-6 lg:absolute lg:right-5 lg:bottom-1 xl:right-9"-->
<!--          :class="loanDetails ? 'lg:left-5 lg:top-10 xl:left-9' : ''"-->
<!--          status="ongoing"-->
<!--      />-->
      <div v-if="loanDetails" class="pt-3 lg:pt-6 pb-5 space-y-9 lg:space-y-12">
        <Tabs/>
        <div>
          <PaymentsSchedule
            is-loan-card
            :upcomingPayment=loanUpcomingPayment
            :upcomingPaymentDate=loanUpcomingPaymentDate
            :previousPayment=loanPreviousPayment
            :previousPaymentDate=loanPreviousPaymentDate
          />
          <div class="flex flex-col lg:flex-row w-full pt-11 justify-between pb-8 lg:pb-0">
            <hr class="block lg:hidden -mx-5 lg:-mx-9 pb-9"/>
            <div class="flex flex-col w-full lg:w-2/5 space-y-5">
              <h5 class="text-gray">Order Summary</h5>
              <div class="grid grid-cols-5">
                <p class="col-span-4 pt-2.5">Total inc. interest</p>
                <p class="font-bold pt-2.5">£{{totalLoanValue}}</p>
                <p class="col-span-4 pt-2.5">Order total</p>
                <p class="font-bold pt-2.5">£{{totalOrderValue}}</p>
                <p class="col-span-4 pt-2.5">Paid so far</p>
                <p class="font-bold pt-2.5">£XX.XX</p>
              </div>
              <div class="h-3"/>
            </div>
            <div class="flex flex-col w-full lg:w-[304px] xl:w-[352px] 2xl:w-[304px] 3xl:w-[480px] space-y-5">
              <h5 class="text-gray">Basket Summary</h5>
              <div class="w-full">
                <div class="grid grid-cols-5 text-xs text-gray">
                  <div class="col-span-3">Product</div>
                  <div>Qty.</div>
                  <div>Price</div>
                </div>
                <div
                    class="grid grid-cols-5 auto-rows-auto"
                    v-for="item in items"
                >
                  <p class="col-span-3 pt-2.5 pr-2">{{item.name}}</p>
                  <p class="font-bold pt-2.5 pr-2">{{ item.qnty }}</p>
                  <p class="font-bold pt-2.5 pr-2">£{{ (item.price * item.qnty).toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <h5 class="text-gray">Payment method</h5>
            <div class="flex ">
              <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>
            </div>
            <ButtonSecondary
              class="drop-shadow-lg bg-white border-none"
              name="Change card"
              icon="fa-solid fa-credit-card"
            />
          </div>
        </div>
        <hr class="-mx-5 xl:-mx-9"/>
        <TitledCopy
          title="Issues with this order?"
          :body="retailerName + ' is responsible for any queries around delivery, mistakes with your order, refunds and returns. Contact us at Payl8r if you need help with anything else.'"
        />
      </div>
    </div>
  </BaseCard>
</template>
<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
import ButtonPrimary from "@/components/Buttons/Primary.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
import BaseCard from "@/components/Cards/Base.vue";
import ButtonBase from "@/components/Buttons/Base.vue";
import Tabs from "@/components/Tabs.vue";
import TitledCopy from "@/Layout/TitledCopy.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";
import Avatar from "@/components/Avatar.vue";

const props = defineProps({
  retailerName: {
    type: String,
    required: true
  },
  loanStartDate: {
    type: String,
    required: true
  },
  interestFreePeriod: {
    type: Number,
    required: true
  },
  monthlyPaybackValue: {
    type: Number,
    required: true
  },
  loanStatus: {
    type: String,
    required: true
  },
  totalLoanValue: {
    type: Number,
    required: true
  },
  totalOrderValue: {
    type: Number,
    required: true
  },
  valueLeftToPay: {
    type: Number,
    required: true
  },
  loanUpcomingPayment: {
    type: Number,
    required: true,
    default: 0
  },
  loanUpcomingPaymentDate: {
    type: Date,
    required: true,
  },
  loanPreviousPayment: {
    type: Number,
    required: true,
    default: 0
  },
  loanPreviousPaymentDate: {
    type: Date,
    required: true,
  },
  currentLastFourDigits: {
    type: Number,
    required: true,
  }
})

const loanDetails = true
const paymentOverdue = true

const items = [
  {
    name: 'product 1',
    qnty: 1,
    price: 10.00
  },
  {
    name: 'product 2',
    qnty: 1,
    price: 30.00
  },
  {
    name: 'product 3',
    qnty: 3,
    price: 20.00
  },
]
</script>