import Vue from 'vue'
import VueRouter from 'vue-router'
import EquipmentRental from "../views/Rent.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Technical-rent',
        component: EquipmentRental,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router