import {createRouter, createWebHistory} from "vue-router";
import Main from '@/Pages/Main.vue'
import Account from '@/Pages/Account.vue'
import Help from '@/Pages/Help.vue'

const routes = [
    {path: '/', name: 'Overview', component: Main},
    {path: '/my-loans', name: 'My loans', component: Main},
    {path: '/my-account', name: 'My account', component: Account},
    {path: '/help', name: 'Help center', component: Help},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

export default router

