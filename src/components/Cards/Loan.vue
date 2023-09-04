<template>

  <BaseCard
    class="relative lg:flex-col px-5 xl:px-9 pt-7"
    :class="loanDetails ? 'pb-2' : 'relative pb-7'"
  >
    <div class="flex flex-col w-full space-y-5">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-6 lg:space-y-9"
        :class="loanDetails ? 'lg:flex-col' : 'lg:-mt-9 cursor-pointer'"
      >
        <div :class="loanDetails ? 'w-full flex justify-between' : 'lg:absolute bottom-7 right-5 xl:right-9'">

          <div class="relative flex items-center gap-3" :class="!loanDetails ? 'flex-row-reverse justify-between md:justify-normal' : ''">
            <Tag :name="!paymentOverdue  ? 'Ongoing' : 'Payment overdue'"
                 @click="$emit('open')"
            />
            <Tag v-if="(instalmentsWithLateFees.length - (status === 'overdue' ? 1 : 0) > 0)" :name="loanDetails ? 'Late fee to pay' : 'Late fee'" class="px-2.5 h-6 py-0"/>
          </div>

          <ButtonSecondary
            v-if="loanDetails"
            @click="$emit('close')"
            class="bg-gray-dark text-white hover:text-gray-darker"
            name="Close"
            icon="fa-solid fa-close"
            size="xl"
          />
        </div>
        <div
          class="flex justify-between"
          @click="$emit('open')"
        >
          <div class="flex h-14 lg:h-fit pr-3">
            <Avatar
                class="hidden lg:flex"
                :provider="provider"
                :avatar-colors= "paymentOverdue ? 'bg-red-light text-red' : 'bg-teal-light text-teal-dark'"
                :initial-title="retailerName"
            />
            <div
              class="flex flex-col justify-between lg:pl-4"
              :class="!loanDetails ? 'w-[80vw] sm:w-[470px] md:w-[650px] lg:w-[30vw] xl:w-[35vw] 2xl:w-80 3xl:w-auto' : ''"
            >
              <h3
                class="font-semibold"
                :class="!loanDetails ? 'truncate' : ''"
              >
                {{retailerName}}
              </h3>
              <div class="flex text-gray space-x-4">
                <p class="font-bold">{{loanStartDate}}</p>
                <p>{{termLength}} month payment plan</p>
              </div>
            </div>
          </div>
          <ButtonBase
            v-if="loanDetails"
            class="hidden md:block bg-white border border-gray-darker pointer-events-none h-fit"
          >
            <h4 class="font-[400] whitespace-nowrap">£{{monthlyPaybackValue}} p/m</h4>
          </ButtonBase>
        </div>
        <div
          class="flex w-full space-x-2 justify-between h-12 lg:h-auto"
          :class="loanDetails ? '' : 'lg:max-w-[220px] xl:max-w-[265px]'"
          @click="$emit('open')"
        >
          <div
            class="flex flex-col justify-between"
            :class="loanDetails ? 'lg:flex-row lg:space-x-3' : ''"
          >
            <h3>£{{(totalLoanValue-depositValue).toFixed(2)}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">Total re{{loanRepaid ? 'paid' : 'payable'}}</p>
            </div>
          </div>
          <div class="flex flex-col justify-between text-end"
             :class="loanDetails ? 'lg:flex-row lg:space-x-3 ' : ''"
          >
            <h3
              :class="loanRepaid && haslateFees ? 'text-red-darker' : ''"
            >£{{loanRepaid && haslateFees ? instalmentsWithLateFees.length*lateFeeValue : valueLeftToPay}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">{{loanRepaid && haslateFees ? '..late fee to pay' : 'Left to pay'}}</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        :payment-overdue=paymentOverdue
        @click="$emit('open')"
        :class="loanDetails ? '' : 'cursor-pointer'"
        :progress="(valueRepaid/(totalLoanValue-depositValue))*100"
      >
        <div
          v-if="(instalmentsWithLateFees.length - (status === 'overdue' ? 1 : 0) > 0)"
          class="absolute bg-red-dark h-3.5 w-3.5 top-0 rounded-full"
          :class="valueLeftToPay - (totalLoanValue-depositValue) === 0 ? 'left-0' : 'right-0'"
        />
      </ProgressBar>
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
            v-if="paymentOverdue && !loanRepaid"
            modal-title="Confirm instalment payment for:"
            :retailer-name="retailerName"
            :button-name="lateInstalments.length !== 1 ? 'Instalments overdue - make payment' : 'Instalment overdue - make payment'"
            button-icon="fa-solid fa-credit-card"
            :payment-type="lateInstalments.length ? 'instalment' : 'OOT interest charge'"
            is-payment
            :quantity="lateInstalments.length"
          >
            <p class=" ">We will attempt to take payment from your card. Your next<br class="hidden sm:block"> instalment will then be collected on <span class="font-bold">DATE</span>.</p>
          </LoanActionModalButtonGroup>
          <LoanActionModalButtonGroup
              v-if="!paymentOverdue && !loanRepaid"
            modal-title="Confirm early instalment payment for:"
            :retailer-name="retailerName"
            button-name="Pay instalment early"
            button-icon="fa-solid fa-credit-card"
            is-payment
            value= 123
          >
            <p>You will pay the instalment due <span class="font-bold">DATE</span> today.<br class="hidden sm:block">
              Your next instalment will then be collected on <span class="font-bold">DATE</span>.
            </p>
          </LoanActionModalButtonGroup>
          <LoanActionModalButtonGroup
              v-if="loanRepaid && haslateFees"
              modal-title="Confirm late fee payment for:"
              :retailer-name="retailerName"
              button-name="Pay late fee"
              button-icon="fa-solid fa-credit-card"
              is-payment
              :quantity=instalmentsWithLateFees.length
              :value=lateFeeValue
          >
            <p>You currently have <span class="font-bold">{{instalmentsWithLateFees.length}}</span> late fee<span v-if="instalmentsWithLateFees.length !== 1">s</span> of <span class="font-bold">£{{lateFeeValue}}</span><span v-if="instalmentsWithLateFees.length !== 1"> each. <br class="hidden sm:block">Choose how many to pay below</span>.</p>
          </LoanActionModalButtonGroup>
          <LoanActionModalButtonGroup
            v-if="!paymentOverdue && !loanRepaid"
            modal-title="Change payment date for:"
            :retailer-name="retailerName"
            button-name="Change payment date"
            button-icon="fa-solid fa-arrows-rotate"
          >
            <p>All future repayments will be changed to the newly chosen<br class="hidden sm:block">
              day of the month. Choose a new date below:
            </p>
          </LoanActionModalButtonGroup>
          <a v-if="loanDetails || (loanRepaid && !haslateFees)"
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
          :class="instalmentsWithLateFees.length ? 'grid-cols-4 3xl:max-w-[600px]' : 'grid-cols-3 max-w-[535px] lg:max-w-[512px]'"
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
          <li v-if="instalmentsWithLateFees.length">
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
          :provider=provider
          :retailer-name=retailerName
          :total-loan-value=totalLoanValue
          :total-order-value=totalOrderValue
          :value-repaid=valueRepaid
          :loan-upcoming-payment=loanUpcomingPayment
          :loan-upcoming-payment-date=loanUpcomingPaymentDate
          :loan-previous-payment=loanPreviousPayment
          :loan-previous-payment-date=loanPreviousPaymentDate
          :current-last-four-digits=currentLastFourDigits
          :order-items=orderItems
          :is-repaid=loanRepaid
        >
          <h5 class="text-gray">Payment Overdue</h5>
          <div class="w-full">Please make a manual payment to avoid late fees and potential negative effects to your credit file.</div>
          <LoanActionModalButtonGroup
            v-if="paymentOverdue"
            modal-title="Confirm instalment payment for:"
            :retailer-name="retailerName"
            button-name="Make payment now"
            button-icon="fa-solid fa-credit-card"
            is-payment
          >
            <p class=" ">We will attempt to take payment from your card. Your next<br class="hidden sm:block"> instalment will then be collected on <span class="font-bold">DATE</span>.
            </p>
          </LoanActionModalButtonGroup>
        </LoanSummary>
        <div v-else class="overflow-x-scroll table-scroll pb-7 sm:pb-0">
          <LoanPaymentSchedule
            v-if="tab === 2"
            :instalments=props.instalments
          />
          <LoanLateFees
            v-if="instalmentsWithLateFees && tab === 3"
            :instalments=props.instalments
          />
          <LoanStatement
            v-if="tab === 4"
            :purchase-date=purchaseDate
            :loan-start-date=loanStartDate
            :total-order-value=totalOrderValue
            :total-interest-value="totalInterestValue"
            :deposit-value=depositValue
            :transactions=transactions
          />
        </div>
      </div>
    </div>
  </BaseCard>
</template>


<script setup>
import {onMounted, ref} from "vue";

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
  provider: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: String,
  },
  loanStartDate: {
    type: String,
    required: true
  },
  termLength: {
    type: Number,
    required: true
  },
  monthlyPaybackValue: {
    type: Number,
    default: 0
  },
  currentInstalmentStatus: {
    type: String,
    required: true,
    default: 'ongoing'
  },
  depositValue: {
    type: Number,
  },
  totalInterestValue: {
    type: Number,
    required: true
  },
  valueLeftToPay: {
    type: Number,
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
  valueRepaid: {
    type: Number,
    required: true,
    default: 0
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
    default: []
  },
  orderItems: {
    type: Array,
    required: true
  },
  isRepaid: {
    type: Boolean
  }
})

const lateFeeValue = 30

const loanRepaid = props.valueRepaid  == props.totalLoanValue-props.depositValue

const tab = ref(1)

const overdueInstalments = props.instalments.filter(function (el) {
      return el.status === 'overdue'
    }
)

const instalmentsWithLateFees = props.instalments.filter(item => item.lateFee && item.lateFee.status === 'unpaid');
const haslateFees = instalmentsWithLateFees.length > 0

const lateInstalments = props.instalments.filter(item => item.status === 'overdue');

const currentTab = (tabNumber) => {
  tab.value = tabNumber;
}
const paymentOverdue = props.status === 'overdue'
</script>