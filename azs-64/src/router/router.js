import Vue from 'vue'
import VueRouter from 'vue-router'
import AZS64 from "../views/AZS64.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'AZS-64',
        component: AZS64,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router