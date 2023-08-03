import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
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
    faLock,
    faFile,

    // FA Pro - free alternatives
    faMessage,
    faCreditCard,
    faHand,
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
    faLock,
    faFile,
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
