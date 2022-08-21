import Vue from 'vue'
import VueRouter from 'vue-router'
import Uprooting from "../views/Uprooting.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Uprooting',
        component: Uprooting,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router