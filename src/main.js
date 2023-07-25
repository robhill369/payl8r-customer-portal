import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */


import {
    faHouse,
    faHeadset,
    faGear,
    faUserCircle,
    faWallet,
    faArrowRightToBracket,
    faBars,
    faCircleExclamation,
    faCircleCheck,
    faCircleInfo,
    faXmark,
    faArrowsRotate,
    faThumbsUp,
    faComments,
    faEnvelope,
    faPhone,
    faHand,

    // FA Pro - free alternatives
    faMessage,
    faCreditCard
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faHouse,
    faHeadset,
    faGear,
    faUserCircle,
    faWallet,
    faArrowRightToBracket,
    faMessage,
    faCreditCard,
    faBars,
    faCircleExclamation,
    faCircleCheck,
    faCircleInfo,
    faXmark,
    faArrowsRotate,
    faThumbsUp,
    faComments,
    faEnvelope,
    faPhone,
    faHand,
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
