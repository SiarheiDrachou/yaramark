import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Technical-rent',
        component:  () => import(/* webpackChunkName: "equipmentRental" */ "../views/Rent.vue"),
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router