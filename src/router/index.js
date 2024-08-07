import {createRouter, createWebHistory} from "vue-router";
import Main from '@/Pages/Main.vue'
import Account from '@/Pages/Account.vue'
import Help from '@/Pages/Help.vue'
import Login from '@/Pages/Login.vue'
import Documents from '@/Pages/Documents.vue'

const routes = [
    {path: '/login', name: 'Login', component: Login, },
    {path: '/forgot-password', name: 'Forgotten password', component: Login},
    {path: '/', name: 'Overview', component: Main, icon:'fa-solid fa-house'},
    {path: '/my-loans', name: 'My loans', component: Main, icon:'fa-solid fa-wallet'},
    {path: '/my-documents', name: 'My documents', component: Documents, icon:'fa-solid fa-file-lines'},
    {path: '/my-account', name: 'My account', component: Account, icon:'fa-solid fa-gear'},
    {path: '/help', name: 'Help center', component: Help, icon:'fa-solid fa-headset'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router

