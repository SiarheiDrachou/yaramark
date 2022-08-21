import Vue from 'vue'
import VueRouter from 'vue-router'
import Facilities from "../views/Facilities.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Facilities',
        component: Facilities,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router