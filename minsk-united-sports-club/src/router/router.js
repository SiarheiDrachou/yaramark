import Vue from 'vue'
import VueRouter from 'vue-router'
import Courts from "../views/Courts.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Courts',
        component: Courts,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router