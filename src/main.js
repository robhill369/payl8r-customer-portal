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
    faCircleUser,
    faCircleInfo,
    faXmark,
    faArrowsRotate,
    faThumbsUp,
    faComments,
    faEnvelope,
    faPhone,
    faLock,
    faFile,
    faFileLines,
    faChevronLeft,
    faChevronRight,
    faDownload,

    // FA Pro - free alternatives
    faMessage,
    faCreditCard,
    faHand,
} from '@fortawesome/free-solid-svg-icons'

import {
    faInstagram,
    faLinkedin,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'

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
    faCircleUser,
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
    faFileLines,
    faChevronLeft,
    faChevronRight,
    faInstagram,
    faLinkedin,
    faFacebook,
    faDownload
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
