import Vue from 'vue'
import VueRouter from 'vue-router'
import LogoiskImprovement from "../views/LogoiskImprovement.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'LogoiskImprovement',
        component: LogoiskImprovement,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router