import Vue from 'vue'
import VueRouter from 'vue-router'
import Minina from "../views/Minina.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Minina',
        component: Minina,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router