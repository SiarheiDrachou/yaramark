import Vue from 'vue'
import VueRouter from 'vue-router'
import Vileyka from "../views/Vileyka.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Vileyka',
        component: Vileyka,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router