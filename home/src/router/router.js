import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
        props: true
    },
    {
        path: '/objects',
        name: 'Facilities',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Facilities.vue"),
        props: true
    },
    {
        path: '/about_us',
        name: 'About',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/About.vue"),
        props: true
    },
    {
        path: '/equipment_rental',
        name: 'Technical-rent',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Rent.vue"),
        props: true
    },
    {
        path: '/technical_competence',
        name: 'TechnicalCompetence',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/TechnicalCompetence.vue"),
        props: true
    },
    {
        path: '/АЗС-64',
        name: 'AZS-64',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/AZS64.vue"),
        props: true
    },
    {
        path: '/АЗС-46',
        name: 'AZS-46',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/AZS46.vue"),
        props: true
    },
    {
        path: '/АЗС-80',
        name: 'AZS-80',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/AZS80.vue"),
        props: true
    },
    {
        path: '/Компания-по-управлению-недвижимостью-индустриального-парка',
        name: 'Uprooting',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Uprooting.vue"),
        props: true
    },
    {
        path: '/Храм-Вилейка',
        name: 'Vileyka',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Vileyka.vue"),
        props: true
    },
    {
        path: '/Республиканский-центр-обработки-данных',
        name: 'Svisloch',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Svisloch.vue"),
        props: true
    },
    {
        path: '/Санвест',
        name: 'Ruxtex',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Ruxtex.vue"),
        props: true
    },
    {
        path: '/Флоренс-компани',
        name: 'Markup',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Markup.vue"),
        props: true
    },
    {
        path: '/Социально-педагогический-центр',
        name: 'Shelter',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Shelter.vue"),
        props: true
    },
    {
        path: '/Минский-объединенный-спортивный-клуб',
        name: 'Courts',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Courts.vue"),
        props: true
    },
    {
        path: '/Индустриального-парка',
        name: 'Stone',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Stone.vue"),
        props: true
    },
    {
        path: '/РУП-Стройтехнорм',
        name: 'Minina',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Minina.vue"),
        props: true
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component:  () => import(/* webpackChunkName: "Home" */ "../views/Contacts.vue"),
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router