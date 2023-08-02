<template>
  <BaseCard
    class="relative lg:flex-col px-5 xl:px-9 pt-7"
    :class="loanDetails ? 'pb-2' : 'relative pb-7 cursor-pointer'"
  >
    <div class="flex flex-col w-full space-y-5">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-9"
        :class="loanDetails ? 'lg:flex-col' : 'lg:-mt-9'"
      >
        <div :class="loanDetails ? 'w-full flex justify-between' : 'lg:absolute bottom-7 right-5 xl:right-9'">
          <Tag :name="!paymentOverdue ? 'ongoing' : currentInstalmentStatus" />
          <ButtonSecondary
            @click="$emit('closed')"
            class="bg-gray-dark text-white hover:text-gray-darker"
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
      <div v-if="loanDetails" class="pt-3 lg:pt-6 pb-5 space-y-9 lg:space-y-12 relative flex flex-col z-50">
        <Tabs
          tab1="Loan summary"
          tab2="Payment schedule"
          tab3="Statement"
        />
        <!--        TAB 1 - LOAN SUMMARY-->
<!--        <div>-->
<!--          <PaymentsSchedule-->
<!--              is-loan-card-->
<!--              :upcomingPayment=loanUpcomingPayment-->
<!--              :upcomingPaymentDate=loanUpcomingPaymentDate-->
<!--              :previousPayment=loanPreviousPayment-->
<!--              :previousPaymentDate=loanPreviousPaymentDate-->
<!--          />-->
<!--          <div class="flex flex-col lg:flex-row w-full pt-11 justify-between pb-8 lg:pb-0">-->
<!--            <hr class="block lg:hidden -mx-5 lg:-mx-9 pb-9"/>-->
<!--            <div class="flex flex-col w-full lg:w-2/5 space-y-5">-->
<!--              <h5 class="text-gray">Order Summary</h5>-->
<!--              <div class="grid grid-cols-5">-->
<!--                <p class="col-span-4 pt-2.5">Total inc. interest</p>-->
<!--                <p class="font-bold pt-2.5">£{{totalLoanValue}}</p>-->
<!--                <p class="col-span-4 pt-2.5">Order total</p>-->
<!--                <p class="font-bold pt-2.5">£{{totalOrderValue}}</p>-->
<!--                <p class="col-span-4 pt-2.5">Paid so far</p>-->
<!--                <p class="font-bold pt-2.5">£XX.XX</p>-->
<!--              </div>-->
<!--              <div class="h-3"/>-->
<!--            </div>-->
<!--            <div class="flex flex-col w-full lg:w-[304px] xl:w-[352px] 2xl:w-[304px] 3xl:w-[480px] space-y-5">-->
<!--              <h5 class="text-gray">Basket Summary</h5>-->
<!--              <div class="w-full">-->
<!--                <div class="grid grid-cols-5 text-xs text-gray">-->
<!--                  <div class="col-span-3">Product</div>-->
<!--                  <div>Qty.</div>-->
<!--                  <div>Price</div>-->
<!--                </div>-->
<!--                <div-->
<!--                    class="grid grid-cols-5 auto-rows-auto"-->
<!--                    v-for="item in items"-->
<!--                >-->
<!--                  <p class="col-span-3 pt-2.5 pr-2">{{item.name}}</p>-->
<!--                  <p class="font-bold pt-2.5 pr-2">{{ item.qnty }}</p>-->
<!--                  <p class="font-bold pt-2.5 pr-2">£{{ (item.price * item.qnty).toFixed(2) }}</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="flex flex-col space-y-5">-->
<!--            <h5 class="text-gray">Payment method</h5>-->
<!--            <div class="flex ">-->
<!--              <h2 class="pr-2">•••• •••• ••••</h2><h3>{{currentLastFourDigits}}</h3>-->
<!--            </div>-->
<!--            <ButtonSecondary-->
<!--                class="drop-shadow-lg bg-white border-none"-->
<!--                name="Change card"-->
<!--                icon="fa-solid fa-credit-card"-->
<!--            />-->
<!--          </div>-->
<!--          <hr class="-mx-5 xl:-mx-9 my-10"/>-->
<!--          <TitledCopy-->
<!--              title="Issues with this order?"-->
<!--              :body="retailerName + ' is responsible for any queries around delivery, mistakes with your order, refunds and returns. Contact us at Payl8r if you need help with anything else.'"-->
<!--          />-->
<!--        </div>-->

<!--          TAB 2 & 3 WRAPPER-->
          <div class="overflow-x-scroll"
          :class="!istab1 ? 'table-scroll pb-7 sm:pb-0 ' : ''"
          >

<!--          TAB 2 - PAYMENT SCHEDULE-->
            <div class="w-[190%] sm:w-full">
              <div class="grid grid-cols-8 text-xs text-gray font-semibold font-montserrat w-full bg-white">
                <div class="border-b pb-4 ">No.</div>
                <div class="col-span-2 pb-4 border-b">Date</div>
                <div class="col-span-2 pb-4 border-b">Amount due</div>
                <div class="col-span-2 pb-4 border-b">Amount paid</div>
                <div class="border-b pb-4 flex justify-end">Status</div>
              </div>
              <div
                class="grid grid-cols-8 w-full auto-rows-auto items-center h-14"
                v-for="instalment in instalments"
              >
                <p class="flex h-14 items-center border-b">{{instalment.number}}</p>
                <p class="flex h-14 items-center border-b col-span-2">{{instalment.date}}</p>
                <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountDue}}</p>
                <p class="flex h-14 items-center border-b col-span-2">£{{instalment.amountPaid}}</p>
                <div class="border-b w-full flex justify-end h-14 items-center">
                  <Tag
                    payment-status
                    :name=currentInstalmentStatus
                    class="px-[12px] py-[5px]"
                  />
                </div>
              </div>
            </div>

<!--            TAB 3 - STATEMENT-->
<!--            <div class="w-[175%] sm:w-full">-->
<!--              <div class="grid grid-cols-12 text-xs text-gray font-semibold font-montserrat w-full bg-white">-->
<!--                <div class="border-b col-span-3 pb-4 bg-white">Date</div>-->
<!--                <div class="col-span-4 pb-4 border-b bg-white">Description</div>-->
<!--                <div class="col-span-2 pb-4 border-b bg-white">Debit</div>-->
<!--                <div class="col-span-2 pb-4 border-b bg-white">Credit</div>-->
<!--                <div class="border-b pb-4 flex justify-end bg-white">Balance</div>-->
<!--              </div>-->
<!--              <div-->
<!--                  class="grid grid-cols-12 w-full auto-rows-auto items-center h-14"-->
<!--                  v-for="value in Values"-->
<!--              >-->
<!--                <p class="flex h-14 items-center border-b col-span-3">{{value.date}}</p>-->
<!--                <p class="flex h-14 items-center border-b col-span-4 pr-3 ">{{value.description}}</p>-->
<!--                <p class="flex h-14 items-center border-b col-span-2">£{{value.debit}}</p>-->
<!--                <p class="flex h-14 items-center border-b col-span-2">£{{value.credit}}</p>-->
<!--                <p class="flex h-14 items-center border-b">£{{value.balance}}</p>-->
<!--              </div>-->
<!--            </div>-->
          </div>
      </div>
    </div>
  </BaseCard>
</template>


<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
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
  currentInstalmentStatus: {
    type: String,
    required: true,
    default: 'ongoing'
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
  },
  loanDetails: {
    type: Boolean,
    default: false
  }
})

const istab1 = false

const paymentOverdue = props.currentInstalmentStatus === 'overdue'

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

const Values = [
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 160.00,
  //   credit: null,
  //   balance: 304.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 170.00,
  //   credit: null,
  //   balance: 307.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: null,
  //   credit: 307.00,
  //   balance: 377.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 160.00,
  //   credit: null,
  //   balance: 304.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 170.00,
  //   credit: null,
  //   balance: 307.00
  // },
  // {
  //   date: 'date',
  //   description: 'Initial purchase amount',
  //   debit: null,
  //   credit: 307.00,
  //   balance: 377.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 160.00,
  //   credit: null,
  //   balance: 304.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 170.00,
  //   credit: null,
  //   balance: 307.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: null,
  //   credit: 307.00,
  //   balance: 377.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: null,
  //   credit: 307.00,
  //   balance: 377.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 160.00,
  //   credit: null,
  //   balance: 304.00
  // },
  // {
  //   date: 'date',
  //   description: 'description',
  //   debit: 170.00,
  //   credit: null,
  //   balance: 307.00
  // },
  {
    date: 'date',
    description: 'Initial purchase amount',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 160.00,
    credit: null,
    balance: 304.00
  },
  {
    date: 'date',
    description: 'description',
    debit: 170.00,
    credit: null,
    balance: 307.00
  },
  {
    date: 'date',
    description: 'description',
    debit: null,
    credit: 307.00,
    balance: 377.00
  },
]

const instalments = [
  {
    number: 1,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'paid'
  },
  {
    number: 2,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'overdue'
  },
  {
    number: 3,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 4,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 5,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 6,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 7,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'paid'
  },
  {
    number: 8,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'overdue'
  },
  {
    number: 9,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 10,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 11,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 12,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 13,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'paid'
  },
  {
    number: 14,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'overdue'
  },
  {
    number: 15,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 16,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 17,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 18,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 19,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'paid'
  },
  {
    number: 20,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'overdue'
  },
  {
    number: 21,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 22,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 23,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
  {
    number: 24,
    date: 'date',
    amountDue: 0,
    amountPaid: 0,
    status: 'upcoming'
  },
]
</script>