import Vue from 'vue'
import VueRouter from 'vue-router'
import TechnicalCompetence from "../views/TechnicalCompetence.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'TechnicalCompetence',
        component: TechnicalCompetence,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router