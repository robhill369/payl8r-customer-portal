<template>

  <BaseCard
    class="relative lg:flex-col px-5 xl:px-9 pt-7"
    :class="loanDetails ? 'pb-2' : 'relative pb-7'"
  >
    <div class="flex flex-col w-full space-y-5">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-9"
        :class="loanDetails ? 'lg:flex-col' : 'lg:-mt-9 cursor-pointer'"
        @click="$emit('open')"
      >
        <div :class="loanDetails ? 'w-full flex justify-between' : 'lg:absolute bottom-7 right-5 xl:right-9'">
          <Tag :name="!paymentOverdue ? 'Ongoing' : 'Payment overdue'"
          />
          <ButtonSecondary
            @click="$emit('close')"
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
                :avatar-colors= "paymentOverdue ? 'bg-red-light text-red' : 'bg-teal-light text-teal-dark'"
                :initial-title="retailerName"
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
        @click="$emit('open')"
        :class="loanDetails ? '' : 'cursor-pointer'"
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
          <LoanActionModalButtonGroup
              v-if="paymentOverdue"
              modal-title="Confirm instalment payment for:"
              :retailer-name="retailerName"
              button-name="Instalment overdue - make payment"
              button-icon="fa-solid fa-credit-card"
              is-payment
          >
            <p class=" ">We will attempt to take payment from your card. Your next<br class="hidden sm:block"> instalment will then be collected on <span class="font-bold">DATE</span>.
            </p>
          </LoanActionModalButtonGroup>
          <LoanActionModalButtonGroup
            v-else
            modal-title="Confirm early instalment payment for:"
            :retailer-name="retailerName"
            button-name="Pay instalment early"
            button-icon="fa-solid fa-credit-card"
            is-payment
          >
            <p>You will pay the instalment due <span class="font-bold">DATE</span> today.<br class="hidden sm:block">
              Your next instalment will then be collected on <span class="font-bold">DATE</span>.
            </p>
          </LoanActionModalButtonGroup>
          <LoanActionModalButtonGroup
            v-if="!paymentOverdue"
            modal-title="Change payment date for:"
            :retailer-name="retailerName"
            button-name="Change payment date"
            button-icon="fa-solid fa-arrows-rotate"
          >
            <p>All future repayments will be changed to the newly chosen<br class="hidden sm:block">
              day of the month. Choose a new date below:
            </p>
          </LoanActionModalButtonGroup>
          <a v-if="loanDetails"
            href="https://somo.co.uk/"
            target="_blank"
            class="text-button text-center py-2.5 px-5 rounded-full bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected active:text-white flex justify-center w-full md:w-fit"
          >
            <font-awesome-icon icon="fa-solid fa-file" size="lg" class="pr-2 lg:hidden xl:block"/>
            View loan agreement
          </a>
        </div>
      </div>
      <div v-if="loanDetails" class="pt-3 lg:pt-6 pb-5 space-y-9 lg:space-y- relative flex flex-col">
        <ul class="grid gap-2 h-9 md:h-11 w-full bg-gray-dark rounded-full text-tab text-white p-1"
          :class="hasLateFees ? 'grid-cols-4 3xl:max-w-[600px]' : 'grid-cols-3 max-w-[535px] lg:max-w-[512px]'"
        >
          <li>
            <button
              @click="currentTab(1)"
              class="w-full h-7 md:h-9 rounded-full"
              :class="tab === 1 ? 'bg-white text-gray-darker' : ''"
            >
              Loan<br class="sm:hidden"> summary
            </button>
          </li>
          <li>
            <button
              @click="currentTab(2)"
              class="w-full h-7 md:h-9 rounded-full"
              :class="tab === 2 ? 'bg-white text-gray-darker' : ''"
            >
              Payment schedule
            </button>
          </li>
          <li v-if="hasLateFees">
            <button
                @click="currentTab(3)"
                class="w-full h-7 md:h-9 rounded-full"
                :class="tab === 3 ? 'bg-white text-gray-darker' : ''"
            >
              Late<br class="sm:hidden"> fees
            </button>
          </li>
          <li>
            <button
              @click="currentTab(4)"
              class="w-full h-7 md:h-9 rounded-full"
              :class="tab === 4 ? 'bg-white text-gray-darker' : ''"
            >
              Statement
            </button>
          </li>
        </ul>
        <LoanSummary
            v-if="tab === 1"
            :retailer-name=retailerName
            :total-loan-value=totalLoanValue
            :total-order-value=totalOrderValue
            :loan-upcoming-payment=loanUpcomingPayment
            :loan-upcoming-payment-date=loanUpcomingPaymentDate
            :loan-previous-payment=loanPreviousPayment
            :loan-previous-payment-date=loanPreviousPaymentDate
            :current-last-four-digits=currentLastFourDigits
            :order-items=orderItems
        />
        <div v-else class="overflow-x-scroll table-scroll pb-7 sm:pb-0">
          <LoanPaymentSchedule
              v-if="tab === 2"
              :instalments=instalments
          />
          <LoanLateFees
              v-if="hasLateFees && tab === 3"
              :late-fees=lateFees
              :instalments=instalments
          />
          <LoanStatement
              v-if="tab === 4"
              :transactions=transactions
          />
        </div>
      </div>
    </div>
  </BaseCard>
</template>


<script setup>
import {ref} from "vue";

import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
import BaseCard from "@/components/Cards/Base.vue";
import ButtonBase from "@/components/Buttons/Base.vue";
import Avatar from "@/components/Avatar.vue";
import LoanSummary from "@/components/Cards/LoanSummary.vue";
import LoanPaymentSchedule from "@/components/Cards/LoanPaymentSchedule.vue";
import LoanStatement from "@/components/Cards/LoanStatement.vue";
import LoanActionModalButtonGroup from "@/Layout/LoanActionModalButtonGroup.vue";
import LoanLateFees from "@/components/Cards/LoanLateFees.vue";

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
  valueLeftToPay: {
    type: Number,
    required: true
  },
  totalOrderValue: {
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
  },
  transactions: {
    type: Array,
    required: true
  },
  instalments: {
    type: Array,
    required: true
  },
  lateFees: {
    type: Array,
  },
  orderItems: {
    type: Array,
    required: true
  }
})

const tab = ref(1)

const currentTab = (tabNumber) => {
  tab.value = tabNumber;
}

const hasLateFees = ref(true)

const paymentOverdue = props.currentInstalmentStatus === 'overdue'
</script>