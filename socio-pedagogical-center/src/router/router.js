import Vue from 'vue'
import VueRouter from 'vue-router'
import Shelter from "../views/Shelter.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Shelter',
        component: Shelter,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router