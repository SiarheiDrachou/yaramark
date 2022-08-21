import Vue from 'vue'
import VueRouter from 'vue-router'
import Markup from "../views/Markup.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Markup',
        component: Markup,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router