<template>

  <BaseCard
    class="relative lg:flex-col px-5 xl:px-9 pt-7 transition ease-in-out duration-200"
    :class="loanDetails ? 'pb-2' : 'relative pb-8 hover:scale-105 hover:drop-shadow-lg cursor-pointer', status === 'Urgent' && !loanDetails ? 'border border-red-400' : ''"
  >
    <div
      v-if="status === 'Complete'"
      class="bg-teal  w-full h-full absolute top-0 left-0 opacity-20"
      :class="loanDetails ? 'h-[387px] lg:h-[370px] rounded-t-lg' : 'h-full border border-teal-dark rounded-lg'"
      @click="$emit('open')"
    />
    <div class="flex flex-col w-full space-y-5" :class="loanDetails ? 'z-10' : ''">
      <div
        class="flex flex-col lg:flex-row w-full lg:justify-between space-y-7 lg:space-y-9"
        :class="loanDetails ? 'lg:flex-col' : 'lg:-mt-9 cursor-pointer'"
      >
        <div :class="loanDetails ? 'w-full flex justify-between items-center' : 'lg:absolute bottom-7 right-5 xl:right-9'">

          <div class="relative flex items-center gap-3" :class="!loanDetails ? 'md:flex-row-reverse justify-between md:justify-normal' : ''">
            <Tag :name="status"
                 @click="$emit('open')"
                 :class="loanDetails && (status === 'Payment overdue' || status === 'Urgent') && (instalmentsWithLateFees.length - ((status === 'Payment overdue' || status === 'Urgent') ? 1 : 0) > 0) ? 'px-1 sm:px-auto' : 'px-3 sm:px-auto'"
            />
            <Tag v-if="lateFeesTotal" :name="!loanRepaid ? '*Late fee' : 'Late fee to pay'" class="px-[10px] py-[3px] mr-2 sm:mr-0" :class="loanDetails && (status === 'Payment overdue' || status === 'Urgent') ? 'w-20 sm:w-auto' : ''"/>
          </div>

          <ButtonSecondary
            v-if="loanDetails"
            @click="$emit('close')"
            class="bg-gray-dark text-white hover:text-gray-darker w-[98px] sm:w-auto h-fit"
            name="Close"
            icon="fa-solid fa-close"
            size="xl"
          />
        </div>
        <div
          class="flex justify-between"
          @click="$emit('open')"
        >
          <div class="flex h-12 lg:h-fit pr-3">
            <Avatar
                class="hidden lg:flex"
                :provider="provider"
                :avatar-colors= "(status === 'Payment overdue' || status === 'Urgent') ? 'bg-red-light text-red' : 'bg-teal-light text-teal-dark'"
                :initial-title="retailerDescription"
            />
            <div
              class="flex flex-col justify-between lg:pl-4"
              :class="!loanDetails ? 'w-[80vw] sm:w-[470px] md:w-[650px] lg:w-[30vw] xl:w-[35vw] 2xl:w-80 3xl:w-auto' : ''"
            >
              <h3
                class="font-semibold"
                :class="!loanDetails ? 'truncate' : ''"
              >
                {{retailerDescription}}
              </h3>
              <div class="flex text-gray space-x-4">
                <p class="font-bold">{{useDateFormat(contractSignDate)}}</p>
                <p>{{termInMonths}} month payment plan</p>
              </div>
            </div>
          </div>
          <ButtonBase
            v-if="loanDetails && currentInstalment && nextInstalment && lapsedInstalments.length !== termInMonths"
            class="hidden md:block bg-white border border-gray-darker pointer-events-none h-fit"
          >
            <h4 class="font-[400] whitespace-nowrap">£{{nextInstalment.dueAmount}} p/m</h4>
          </ButtonBase>
        </div>
        <div
          class="flex w-full space-x-2 justify-between h-16 lg:h-auto"
          :class="loanDetails ? '' : 'lg:max-w-[220px] xl:max-w-[265px]'"
          @click="$emit('open')"
        >
          <div
            class="flex flex-col justify-between space-y-2 lg:space-y-0"
            :class="loanDetails ? 'lg:flex-row lg:space-x-3' : ''"
          >
            <h3>£{{(totalLoanValue+outOfTermChargesAmount).toFixed(2)}}</h3>
            <div class="flex text-gray">
              <p class="font-bold">Total re{{loanRepaid ? 'paid' : 'payable'}}</p>
            </div>
          </div>
          <div class="flex flex-col justify-between text-end space-y-2 lg:space-y-0"
             :class="loanDetails ? 'lg:flex-row lg:space-x-2 lg:items-center' : '', status !== 'Complete' ? 'relative' : ''">
            <h3 :class="loanRepaid && lateFeesTotal ? 'text-red-darker' : ''">
              £{{loanRepaid && lateFeesTotal ? lateFeesTotal.toFixed(2) : valueLeftToPay.toFixed(2)}}
            </h3>
            <h5 v-if="!loanRepaid && lateFeesTotal" class="w-20 absolute top-3.5 lg:top-5 font-medium text-red-darker -right-1.5" :class="loanDetails ? 'lg:right-[73px]' : ''">
              + £{{lateFeesTotal}}*
            </h5>
            <div class="flex text-gray">
              <p class="font-bold">Left to pay</p>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        :payment-overdue="(status === 'Payment overdue' || status === 'Urgent')"
        @click="$emit('open')"
        :class="loanDetails ? '' : 'cursor-pointer'"
        :progress="(valueRepaid/(totalLoanValue+outOfTermChargesAmount))*100"
      >
        <div
          v-if="lateFeesTotal"
          class="absolute bg-red-dark h-3.5 w-3.5 top-0 rounded-full"
          :class="valueLeftToPay - (totalLoanValue-depositAmount) === 0 ? 'left-0' : 'right-0'"
        />
      </ProgressBar>
      <div>
        <div v-if="loanDetails"
          class="flex flex-col -mx-5 xl:-mx-9 mt-2"
          :class="(status === 'Payment overdue' || status === 'Urgent') ? 'bg-red-light' : 'border-b'"
        >
          <div v-if="(status === 'Payment overdue' || status === 'Urgent')" class="flex items-center mx-5 xl:mx-6 3xl:mx-9 py-5">
            <Avatar
              class="w-8 h-8"
              avatar-colors="text-red"
              icon="fa-solid fa-circle-exclamation"
              size="xl"
            />
            <div v-if="!loanRepaid">
              <div class="text-sm space-y-2 pl-3" v-if="lateInstalmentsTotal">
                <div>We have been unable to take payment for this loan automatically and it is now overdue.</div>
                <div>Please make a manual payment to avoid late fees and potential negative effects to your credit file.</div>
              </div>
              <div v-else class="text-sm space-y-2 pl-3" >
                <div>You have been charged out-of-term interest from instalments that were overdue.</div>
                <div>Please pay the remaining balance to avoid potential negative effects to your credit file.</div>
              </div>
            </div>
            <div v-else class="text-sm space-y-2 pl-3">
              <div>You have late fees left to pay.</div>
              <div>Please pay the remaining balance to avoid potential negative effects to your credit file.</div>
            </div>
          </div>

        </div>
        <div
          class="flex flex-col md:flex-row space-y-3.5 md:space-x-3 md:space-y-0"
          :class="loanDetails ? 'py-7 border-b -mx-5 px-5 xl:-mx-9 xl:px-9' : ''"
        >
          <template v-if="!loanRepaid">
            <template v-if="(status === 'Payment overdue' || status === 'Urgent')">
              <LoanActionModalButtonGroup
                v-if="valueLeftToPay == outOfTermChargesAmount"
                modal-title="Confirm payment for:"
                :retailer-description="retailerDescription"
                button-name="OOT interest due - pay now"
                button-icon="fa-solid fa-credit-card"
                payment-type="OOT interest charge"
                is-payment
                :current-last-four-digits=currentLastFourDigits
                :array="OOTCharges"
              >
                <p>You currently have <span class="font-bold">{{OOTCharges.length}}</span> out-of-term (OOT) interest charge<span v-if="OOTCharges.length !== 1">s</span> due.<span v-if="OOTCharges.length !== 1"><br class="hidden sm:block"> Choose how many to pay below</span>.</p>
              </LoanActionModalButtonGroup>
              <LoanActionModalButtonGroup
                v-else
                modal-title="Confirm instalment payment for:"
                :retailer-description="retailerDescription"
                :button-name="lateInstalments.length > 1 ? 'Instalments overdue - pay now' : 'Instalment overdue - pay now'"
                button-icon="fa-solid fa-credit-card"
                payment-type="late instalment"
                is-payment
                :current-last-four-digits=currentLastFourDigits
                :array="lateInstalments"
              >
                <p v-if="lateInstalments.length === 1">We will attempt to take payment from your card.<span v-if="nextInstalment !== null"> Your next<br class="hidden sm:block"> instalment will then be collected on <span class="font-bold">{{useDateFormat(currentInstalment.dueDates[0])}}</span>.</span></p>
                <p v-else>You currently have <span class="font-bold">{{lateInstalments.length}}</span> instalment<span v-if="lateInstalments.length !== 1">s</span> overdue<span v-if="instalmentsWithLateFees.length !== 1">.<br class="hidden sm:block"> Choose how many to pay below</span>.</p>
              </LoanActionModalButtonGroup>
              <LoanActionModalButtonGroup
                v-if="(lateInstalmentsTotal || outOfTermChargesAmount) && lateFeesTotal && instalments[instalments.length-1].isDue"
                modal-title="Pay remaining loan balance for:"
                :retailer-description="retailerDescription"
                button-name="Pay balance"
                button-icon="fa-solid fa-credit-card"
                payment-type="late instalment"
                is-payment
                :current-last-four-digits=currentLastFourDigits
                :array="Array(1).fill(remainingBalance)"
              >
                <p class="pb-5">The following payments are now due:</p>
                <div class="grid auto-rows-auto grid-cols-5 gap-y-1">
                  <template v-if="lateInstalmentsTotal">
                    <p class="text-left col-span-3">Overdue instalments</p>
                    <p class="text-right font-bold">£</p>
                    <p class="font-bold text-right">{{lateInstalmentsTotal.toFixed(2)}}</p>
                  </template>
                  <template v-if="outOfTermChargesAmount">
                    <p class="text-left col-span-3">Out-of-term interest</p>
                    <p class="text-right font-bold">£</p>
                    <p class="font-bold text-right">{{outOfTermChargesAmount.toFixed(2)}}</p>
                  </template>
                  <template v-if="lateFeesTotal">
                    <p class="text-left col-span-3">Late fees</p>
                    <p class="text-right font-bold">£</p>
                    <p class="font-bold text-right">{{lateFeesTotal.toFixed(2)}}</p>
                  </template>
                    <p class="text-left col-span-3 text-md pt-3 font-bold">Total to pay</p>
                    <p class="text-right text-md font-bold pt-3">£</p>
                    <p class="font-bold text-md text-right pt-3">{{remainingBalance}}</p>
                </div>
              </LoanActionModalButtonGroup>
            </template>
            <template v-else>
              <LoanActionModalButtonGroup
                v-if="currentInstalment.paidAmount !== currentInstalment.dueAmount"
                modal-title="Confirm early instalment payment for:"
                :retailer-description="retailerDescription"
                button-name="Pay instalment early"
                button-icon="fa-solid fa-credit-card"
                is-payment
                :current-last-four-digits=currentLastFourDigits
                :array=Array(1).fill(currentInstalment.dueAmount-currentInstalment.paidAmount)
              >
                <p>You will pay the instalment due <span class="font-bold">{{useDateFormat(currentInstalment.dueDates[currentInstalment.dueDates.length-1])}}</span> today.<span v-if="nextInstalment"><br class="hidden sm:block">
                  Your next instalment will then be collected on <span class="font-bold">{{useDateFormat(nextInstalment.dueDates[nextInstalment.dueDates.length-1])}}</span>.</span>
                </p>
              </LoanActionModalButtonGroup>
              <LoanActionModalButtonGroup
                modal-title="Change payment date for:"
                :retailer-description="retailerDescription"
                button-name="Change payment date"
                button-icon="fa-solid fa-arrows-rotate"
              >
                <p>All future repayments will be changed to the newly chosen<br class="hidden sm:block">
                  day of the month. Choose a new date below:
                </p>
              </LoanActionModalButtonGroup>
            </template>
          </template>
          <template v-else>
            <LoanActionModalButtonGroup
              v-if="lateFeesTotal"
              modal-title="Confirm late fee payment for:"
              :retailer-description="retailerDescription"
              button-name="Pay late fee"
              button-icon="fa-solid fa-credit-card"
              is-payment
              :current-last-four-digits=currentLastFourDigits
              :array=lateFees
            >
              <p>You currently have <span class="font-bold">{{lateFees.length}}</span> late fee<span v-if="lateFees.length !== 1">s</span> worth <span class="font-bold">£{{lateFeesTotal.toFixed(2)}}.</span><span v-if="lateFees.length !== 1"><br class="hidden sm:block"> Choose how many to pay below.</span></p>
            </LoanActionModalButtonGroup>
            <a
              v-if="!loanDetails"
              href="https://somo.co.uk/"
              target="_blank"
              class="text-button text-center py-2.5 px-5 rounded-full bg-button-secondary hover:bg-button-secondary-hover active:bg-button-secondary-selected active:text-white flex justify-center w-full md:w-fit z-10"
            >
              <font-awesome-icon icon="fa-solid fa-file" size="lg" class="pr-2 lg:hidden xl:block"/>
              View loan agreement
            </a>
          </template>
          <a
            v-if="loanDetails"
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
              Late Fees<span v-if="outOfTermCharges.length"><br class="sm:hidden"> & Charges</span>
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
          :retailer-description=retailerDescription
          :total-loan-value=totalLoanValue
          :original-order-amount=originalOrderAmount
          :deposit-amount=depositAmount
          :value-repaid=valueRepaid
          :out-of-term-charges-amount=outOfTermChargesAmount
          :upcoming-instalment=upcomingInstalment
          :last-payment=lastPayment
          :current-last-four-digits=currentLastFourDigits
          :order-items=orderItems
          :loan-repaid=loanRepaid
          :is-complete="status === 'Complete'"
        >
          <template v-if="!loanRepaid">
            <div v-if="(status === 'Payment overdue' || status === 'Urgent')" class="md:w-96 lg:w-64 xl:w- 2xl:w-64 3xl:w-[480px]">
              <div class="space-y-4" v-if="valueLeftToPay === outOfTermChargesAmount">
                <h5 class="text-gray">Out-of-term interest to pay</h5>
                <div>Please make a manual payment to avoid late fees and potential negative effects to your credit file.</div>
                <LoanActionModalButtonGroup
                modal-title="Confirm payment for:"
                :retailer-description="retailerDescription"
                button-name="Make payment now"
                button-icon="fa-solid fa-credit-card"
                payment-type="OOT interest charge"
                is-payment
                :current-last-four-digits=currentLastFourDigits
                :array="OOTCharges"
              >
                <p>You currently have <span class="font-bold">{{OOTCharges.length}}</span> out-of-term (OOT) interest charge<span v-if="OOTCharges.length !== 1">s</span> due.<span v-if="OOTCharges.length !== 1"><br class="hidden sm:block"> Choose how many to pay below</span>.</p>
              </LoanActionModalButtonGroup>
              </div>
              <div class="space-y-4" v-else>
                <h5 class="text-gray">Instalments Overdue</h5>
                <div class="w-full">Please make a manual payment to avoid late fees and potential negative effects to your credit file.</div>
                <LoanActionModalButtonGroup
                  modal-title="Confirm instalment payment for:"
                  :retailer-description="retailerDescription"
                  button-name="Make payment now"
                  button-icon="fa-solid fa-credit-card"
                  payment-type="late instalment"
                  is-payment
                  :current-last-four-digits=currentLastFourDigits
                  :array="lateInstalments"
                >
                  <p v-if="lateInstalments.length === 1">We will attempt to take payment from your card.<span v-if="nextInstalment !== null"> Your next<br class="hidden sm:block"> instalment will then be collected on <span class="font-bold">{{useDateFormat(currentInstalment.dueDates[0])}}</span>.</span></p>
                  <p v-else>You currently have <span class="font-bold">{{lateInstalments.length}}</span> instalment<span v-if="lateInstalments.length !== 1">s</span> overdue<span v-if="instalmentsWithLateFees.length !== 1">.<br class="hidden sm:block"> Choose how many to pay below</span>.</p>
                </LoanActionModalButtonGroup>
              </div>
            </div>
          </template>
          <div class="lg:w-72 xl:w-80 2xl:w-64 3xl:w-[480px] space-y-4" v-else>
            <h5 class="text-gray">Late fees to pay</h5>
            <div class="w-full">Please pay the remaining balance to avoid potential negative effects to your credit file.</div>
            <LoanActionModalButtonGroup
              v-if="lateFeesTotal"
              modal-title="Confirm late fee payment for:"
              :retailer-description="retailerDescription"
              button-name="Make payment now"
              button-icon="fa-solid fa-credit-card"
              is-payment
              :current-last-four-digits=currentLastFourDigits
              :array=lateFees
            >
              <p>You currently have <span class="font-bold">{{lateFees.length}}</span> late fee<span v-if="lateFees.length !== 1">s</span> worth <span class="font-bold">£{{lateFeesTotal.toFixed(2)}}.</span><span v-if="lateFees.length !== 1"><br class="hidden sm:block"> Choose how many to pay below.</span></p>
            </LoanActionModalButtonGroup>
          </div>
        </LoanSummary>
        <div v-else class="overflow-x-scroll table-scroll pb-7 sm:pb-0">
          <LoanPaymentSchedule
            v-if="tab === 2"
            :instalments=props.instalments
          />
          <LoanLateFees
            v-if="instalmentsWithLateFees && tab === 3"
            :instalments=lapsedInstalments.slice(0,instalmentsWithLateFees[instalmentsWithLateFees.length-1].id)
            :out-of-term-charges=props.outOfTermCharges
            :ready-to-pay=loanRepaid
          />
          <LoanStatement
            v-if="tab === 4"
            :contract-sign-date=useDateFormat(contractSignDate)
            :original-order-amount=originalOrderAmount
            :total-interest-amount="totalInterestAmount"
            :deposit-amount=depositAmount
            :transactions=transactions
          />
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import {ref, onMounted} from "vue";
import useDateFormat from "@/composables/useDateFormat";

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

const emit = defineEmits(['tally', 'status'])

const props = defineProps({
  retailerDescription: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: String,
  },
  contractSignDate: {
    type: Date,
    required: true
  },
  termInMonths: {
    type: Number,
    required: true
  },
  depositAmount: {
    type: Number,
  },
  totalInterestAmount: {
    type: Number
  },
  valueLeftToPay: {
    type: Number,
    required: true
  },
  totalLoanValue: {
    type: Number
  },
  originalOrderAmount: {
    type: Number
  },
  valueRepaid: {
    type: Number,
    required: true,
    default: 0
  },
  lastPayment: {
    type: Object
  },
  upcomingInstalment: {
    type: Object
  },
  currentLastFourDigits: {
    type: Number
  },
  loanDetails: {
    type: Boolean,
    default: false
  },
  transactions: {
    type: Array,
    default: []
  },
  instalments: {
    type: Array,
    default: []
  },
  outOfTermCharges: {
    type: Array,
    default: []
  },
  orderItems: {
    type: Array
  },
  outOfTermChargesAmount: {
    type: Number
  },
  currentInstalment: {
    type: Object,
    default: {}
  }
})

const tab = ref(1)
const status = ref('')
const remainingBalance = ref()

onMounted(() => {
  if(lapsedInstalments.length !== props.termInMonths) {
    if(lateInstalments.length) {
      status.value = 'Payment overdue'
    }
    else {
      status.value = 'Ongoing'
    }
  }
  else {
    if(OOTCharges.length || lateFees.length || lateInstalments.length) {
      status.value = 'Urgent'
    }
    else {
      status.value = 'Complete'
    }
  }
  emit('status', status.value)
})

const remainingPayments = (arr) => {
  const newArray = []
  arr.forEach((item) => {
    if (item.paidAmount !== item.dueAmount)
      newArray.push(item.dueAmount - item.paidAmount)
  })
  return newArray
}

const remainingLateFeePayments = (arr) => {
  const newArray = []
  arr.forEach((item) => {
    if((item.lateFee.dueAmount - item.lateFee.paidAmount !== 0) && !item.lateFee.isWaived && !item.lateFee.isAutoWaivable) {
      newArray.push(item.lateFee.dueAmount - item.lateFee.paidAmount)
    }
  })
  return newArray
}

const currentTab = (tabNumber) => {
  tab.value = tabNumber;
}

const instalmentsWithLateFees = props.instalments.filter(item => item.lateFee)
const lapsedInstalments = props.instalments.filter(item => item.isDue)
const nextInstalment = lapsedInstalments.length !== props.termInMonths ? props.instalments[props.currentInstalment.id] : null
const lateInstalments = remainingPayments(lapsedInstalments)
const lateInstalmentsTotal = lateInstalments.reduce((acc, obj) => {return acc + obj}, 0)
const lateFees = remainingLateFeePayments(instalmentsWithLateFees)
const lateFeesTotal = lateFees.reduce((acc, obj) => {return acc + obj}, 0)
const OOTCharges = remainingPayments(props.outOfTermCharges)
const loanRepaid = props.valueLeftToPay === 0

remainingBalance.value = lateInstalmentsTotal+lateFeesTotal+props.outOfTermChargesAmount

emit('tally', Number(props.valueLeftToPay)+lateFeesTotal)

</script>
