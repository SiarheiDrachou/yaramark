import Vue from 'vue'
import VueRouter from 'vue-router'
import Svisloch from "../views/Svisloch.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Svisloch',
        component: Svisloch,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router