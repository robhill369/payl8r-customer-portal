<!--Some code are commented due to functionalities that are not used but may be in use in the future.-->
<template>
  <div>
    <!-- This template does not add any html -->
    <input type="hidden" v-model="bankResponse" id="bankResponse">
  </div>
</template>
<script setup>
import {onBeforeUpdate, onMounted, ref} from "vue";

  const props = defineProps({
    model:Object
  })

  const buttonIsDisabled = ref(true)
  const bankResponse = ref('')
  const day = ref(null)
  const bankConnectDropDownValidation = ref(false)
  const showValidation = ref(true)
  const responseFormData = ref(props.model.responseFormData)
      // applicationType: this.model.,
  const contentData = ref(props.model.contentData)
  const wpwlExpiryBool = ref(false)
  const wpwlCardBool = ref(false)
  const wpwlCcvBool = ref(false)
  const buttonLocked = ref(false)
  const plp = plp || ref({});

  const tpStyling = () => {
      return `
    $(document).ready(function () {
      function displayIframe() {
        let form_04 = document.getElementById('processContainer');
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.id = 'secure-3ds';
        let frameContainer = document.createElement('div');
        frameContainer.id = 'frameContainer';
        let iframe = document.createElement('iframe');
        iframe.id = 'tpform';
        iframe.style = 'height:100%;width:100%;border:none;'
        iframe.name = 'tpform';
        frameContainer.appendChild(iframe);
        modal.appendChild(frameContainer);
        form_04.after(modal);
      }
       function toggleTP3dsSecure() {
          document.getElementById('secure-3ds').classList.toggle('show-modal');
       }
      $('#bank_details_submit').click(function () {
        if(wpwlExpiryBool === true && wpwlCardBool === true && wpwlCcvBool === true && buttonLocked === false && $('#app_fee_contract_agree').prop('checked')){
          $('.bankConnectValidationText').css("display", "none");
          $('.bankConnectValidationTextArea').css("display", "none");
          `+ buttonHandler() +`
        }else {
          $('.bankConnectValidationText').css("display", "block");
        }
    });
      $('#tpformView').attr('action', '` + responseFormData.value.protocolHost + '/frontend/ajax/iframe-cnp.php?la=' + props.model.externalId + '&ckey=' + encodeURI(props.model.cookieKey) + '&idx=' + this.responseFormData.value.iframeData.id + `')
      window.document.addEventListener('tpCheck', tpStatus, false)
      function tpStatus (e) {
        var response = e.detail
        if (response.result.code === '000.000.000' || response.result.code === '000.100.110' || response.result.code === '000.100.111' || response.result.code === '000.100.112') {
          ` /* This is the code that runs if card details are submitted correctly */ `
        } else if (response.result.code === '000.200.000') {
          // do another loop.
        } else {
          if (!alert('Authorisation failed, please re-enter your details.')) {
            window.location.reload(true)
          }
        }
      }
    })`
    }
    const options = () => {
      return `
      const wpwlOptions = {
        style: 'plain',
        brandDetection: true,
        onReady: function () {
          var additionalHTML = '<input type="hidden" name="customer.surname" value="` + responseFormData.value.lastName + '"><input type="hidden" name="customer.birthDate" value="' + responseFormData.value.dob + '"><input type="hidden" name="billing.postcode" value="' + this.responseFormData.postcode + `">'
          $('form.wpwl-form-card').find('.wpwl-button').before(additionalHTML)
          $('.wpwl-control-cardHolder').attr('value', '` + responseFormData.value.firstName + ' ' + responseFormData.value.lastName + `')
          $('.wpwl-control-expiry').attr('placeholder', 'Expiry Date')
          $('.wpwl-control-expiry').blur(function () {
            if (!$('.wpwl-control-expiry').hasClass('wpwl-has-error') && $('.wpwl-control-expiry').val() !== '') {
              $('.wpwl-control-expiry').css('border-bottom', '1px solid #00E2BD')
              $('.wpwl-control-expiry').css('border', 'none !important');
              $('.wpwl-control-expiry').css('color', 'rgb(145 225 163)');
              $('.wpwl-control-expiry').css('font-weight', 'bolder');
              wpwlExpiryBool.value = true
              model.value.ccvValidation = true;
            } else {
                $('.wpwl-control-expiry').css('border', 'none !important');
                $('.wpwl-control-expiry').css('color', '#a94442');
              wpwlExpiryBool.value = false
            }
          })
          $('.wpwl-control-cardNumber').click()
        },
        onBlurSecurityCode: function (isValid) {
          if (isValid) {
            $('.wpwl-control-cvv').css('border', 'none !important');
            $('.wpwl-control-cvv').css('color', 'rgb(145 225 163)');
            $('.wpwl-control-cvv').css('font-weight', 'bolder');
            wpwlCcvBool.value = true
            this.ccvValidation = true
          } else {
              $('.wpwl-control-cvv').css('border', 'none !important');
              $('.wpwl-control-cvv').css('color', '#a94442');
            wpwlCcvBool.value = false
            this.ccvValidation = false
          }
        },
        onBlurCardNumber: function (isValid) {
          if (isValid) {
            $('.wpwl-wrapper-cardNumber').css('border', 'none !important');
            $('.wpwl-wrapper-cardNumber').css('color', 'rgb(145 225 163)');
            $('.wpwl-wrapper-cardNumber').css('font-weight', 'bolder');
            wpwlCardBool.value = true
            this.cardNumberValidation = true
          } else {
            wpwlCardBool.value = false
            this.cardNumberValidation = false
          }
        },
        iframeStyles: {
          'card-number-placeholder': {
            'font-weight:': 600,
            'font-family': 'sans-serif'
          },
          'cvv-placeholder': {
            'font-weight:':600,
            'font-family': 'sans-serif'
          }
        },
        showCVVHint: true,
        paymentTarget: 'tpform',
        shopperResultTarget: 'tpform',
        showLabels: false
      }`
    }
    const buttonHandler = () => {
      return " displayIframe(); " +
          "toggleTP3dsSecure(); " +
          "$('.wpwl-button').click();"
    }
  }
  onMounted(() => {
    // window.$paymentDay = null; // set global to have access on the tpStyling function, which is a string
    // window.$applicationType = this.applicationType; // set global to have access on the tpStyling function, which is a string
    const tpStyling = this.tpStyling();
    const options = this.options();
    // let approveBankDetails = this.approveBankDetails(this.responseFormData.decision);
    const tpWidget = document.createElement('script')
    tpWidget.id = 'tp-widget';
    // this.responseFormData.test_mode is the pre_url to total processing. Either eu-test. or eu-prod.
    // Below variables are provided by the backend (AKA: testMode && iframeData.id
    tpWidget.src = 'https://' + this.responseFormData.testMode + 'oppwa.com/v1/paymentWidgets.js?checkoutId=' + this.responseFormData.iframeData.id
    document.body.appendChild(tpWidget)
    const totalProcessingSettings = document.createElement('script')
    totalProcessingSettings.id = 'tp-settings'
    totalProcessingSettings.text = options + tpStyling;
    // + approveBankDetails
    document.body.appendChild(totalProcessingSettings)
  }),
  onBeforeUpdate(() => {
    const totalProcessingSettings = document.getElementById('tp-settings')
    if (totalProcessingSettings) {
      totalProcessingSettings.remove()
    }
    const tpWidget = document.getElementById('tp-widget')
    if(tpWidget){
      tpWidget.remove()
    }
  })
}
</script>