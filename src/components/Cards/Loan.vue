<template>
  <BaseCard
    class="relative lg:flex-col px-5 xl:px-9 pt-7"
    :class="loanExpanded ? 'pb-2' : 'relative pb-7 cursor-pointer'"
  >
    <div class="flex flex-col w-full space-y-5">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-9"
        :class="loanExpanded ? 'lg:flex-col' : 'lg:-mt-9'"
      >
        <div :class="loanExpanded ? 'w-full flex justify-between' : 'lg:absolute bottom-7 right-5 xl:right-9'">
          <Tag :name="!paymentOverdue ? 'Ongoing' : 'Payment overdue'"
          />
          <ButtonSecondary
            @click="$emit('closed')"
            class="bg-gray-dark text-white hover:text-gray-darker"
            v-if="loanExpanded"
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
            v-if="loanExpanded"
            class="hidden sm:block bg-white border border-gray-darker pointer-events-none h-fit"
          >
            <h4 class="font-[400]">£{{ monthlyPaybackValue }} p/m</h4>
          </ButtonBase>
        </div>
        <div
          class="flex w-full space-x-2 justify-between h-12 lg:h-auto"
          :class="loanExpanded ? '' : 'lg:max-w-[265px]'"
        >
          <div
            class="flex flex-col justify-between"
            :class="loanExpanded ? 'lg:flex-row lg:space-x-3' : ''"
          >
            <h3>£{{totalLoanValue}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">Total inc. interest</p>
            </div>
          </div>
          <div class="flex flex-col justify-between"
               :class="loanExpanded ? 'lg:flex-row lg:space-x-3' : ''"
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
        <div v-if="loanExpanded"
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
          :class="loanExpanded ? 'py-7 border-b -mx-5 px-5 xl:-mx-9 xl:px-9' : ''"
        >
          <ButtonSecondary
            v-if="paymentOverdue"
            class="w-full sm:w-auto"
            name="Instalment overdue - make payment"
            icon="fa-solid fa-exclamation-circle"
          />
          <ButtonSecondary
            v-else
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
            v-if="loanExpanded"
            class="w-full sm:w-auto z-50"
            name="View loan agreement"
            icon="fa-solid fa-file"
            href="https://somo.co.uk/"
            target="_blank"
          />
        </div>
      </div>
      <div v-if="loanExpanded" class="pt-3 lg:pt-6 pb-5 space-y-9 lg:space-y- relative flex flex-col z-50">

        <ul class="grid grid-cols-3 gap-2 h-9 md:h-11 w-full w-full max-w-[535px] lg:max-w-[512px] bg-gray-dark rounded-full text-tab text-white p-1">
          <li>
            <button
              @click="currentTab(1)"
              class="w-full h-7 md:h-9 rounded-full"
              :class="tab === 1 ? 'bg-white text-gray-darker' : ''"
            >
              Loan summary
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
          <li>
            <button
              @click="currentTab(3)"
              class="w-full h-7 md:h-9 rounded-full"
              :class="tab === 3 ? 'bg-white text-gray-darker' : ''"
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
            :loan-previous-payment-date=loanPreviousPayment
            :current-last-four-digits=currentLastFourDigits
            :order-items=orderItems
        />
        <div v-if="tab !== 1" class="overflow-x-scroll table-scroll pb-7 sm:pb-0">
          <LoanPaymentSchedule
              v-if="tab === 2"
              :instalments=instalments
          />
          <LoanStatement
              v-if="tab === 3"
              :transactions=transactions
          />
        </div>
      </div>
    </div>
  </BaseCard>
<!--  <LoanActionModal-->
<!--      title="This is the title"-->
<!--      is-payment-->
<!--  >-->
<!--    <p>You will pay the instalment due <span class="font-bold">DATE</span> today.<br class="hidden sm:block">-->
<!--      Your next instalment will then be collected on <span class="font-bold">DATE</span> .</p>-->
<!--  </LoanActionModal>-->
</template>


<script setup>
import {ref} from "vue";

import ProgressBar from "@/components/ProgressBar.vue";
import ButtonSecondary from "@/components/Buttons/Secondary.vue";
import Tag from "@/components/Tag.vue";
import BaseCard from "@/components/Cards/Base.vue";
import ButtonBase from "@/components/Buttons/Base.vue";
import Tabs from "@/components/Tabs.vue";
import PaymentsSchedule from "@/components/Cards/PaymentsSchedule.vue";
import Avatar from "@/components/Avatar.vue";
import LoanSummary from "@/components/Cards/LoanSummary.vue";
import LoanPaymentSchedule from "@/components/Cards/LoanPaymentSchedule.vue";
import LoanStatement from "@/components/Cards/LoanStatement.vue";
import LoanActionModal from "@/components/Modals/LoanAction.vue";

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
  loanExpanded: {
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
  orderItems: {
    type: Array,
    required: true
  }
})

const loanDetails = [
  {
    name: 'Loan summary',
  },
  {
    name: 'Payment schedule',
  },
  {
    name: 'Statement',
  },
]

const tab = ref(1)

const currentTab = (tabNumber) => {
  tab.value = tabNumber;
}

const paymentOverdue = props.currentInstalmentStatus === 'overdue'

</script>