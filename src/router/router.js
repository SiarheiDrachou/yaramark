import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Rent from "../views/Rent.vue";
import TechnicalCompetence from "../views/TechnicalCompetence.vue";
import Facilities from "../views/Facilities.vue";
import Contacts from "../views/Contacts.vue";
import Shelter from "../views/Shelter.vue";
import Courts from "../views/Courts.vue";
import Uprooting from "../views/Uprooting.vue";
import Svisloch from "../views/Svisloch.vue";
import Ruxtex from "../views/Ruxtex.vue";
import AZS64 from "../views/AZS64.vue";
import Markup from "../views/Markup.vue";
import Minina from "../views/Minina.vue";
import AZS46 from "../views/AZS46.vue";
import AZS80 from "../views/AZS80.vue";
import Vileyka from "../views/Vileyka.vue";
import Stone from "../views/Stone.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:  Home,
        props: true
    },
    {
        path: '/about_us',
        name: 'About',
        component:  About,
        props: true
    },
    {
        path: '/equipment_rental',
        name: 'Rent',
        component:  Rent,
        props: true
    },
    {
        path: '/technical_competence',
        name: 'TechnicalCompetence',
        component:  TechnicalCompetence,
        props: true
    },
    {
        path: '/objects',
        name: 'Facilities',
        component:  Facilities,
        props: true
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component:  Contacts,
        props: true
    },
    {
        path: '/objects/socio-pedagogical-center',
        name: 'Shelter',
        component:  Shelter,
        props: true
    },
    {
        path: '/objects/minsk-united-sports-club',
        name: 'Courts',
        component:  Courts,
        props: true
    },
    {
        path: '/objects/industrial-park-property-management-company',
        name: 'Uprooting',
        component:  Uprooting,
        props: true
    },
    {
        path: '/objects/stroytrest-1',
        name: 'Svisloch',
        component:  Svisloch,
        props: true
    },
    {
        path: '/objects/sanvest',
        name: 'Ruxtex',
        component:  Ruxtex,
        props: true
    },
    {
        path: '/objects/azs-64',
        name: 'AZS-64',
        component:  AZS64,
        props: true
    },
    {
        path: '/objects/florence-company',
        name: 'Markup',
        component:  Markup,
        props: true
    },
    {
        path: '/objects/stroytekhnorm',
        name: 'Minina',
        component:  Minina,
        props: true
    },
    {
        path: '/objects/azs-46',
        name: 'AZS-46',
        component:  AZS46,
        props: true
    },
    {
        path: '/objects/azs-80',
        name: 'AZS-80',
        component:  AZS80,
        props: true
    },
    {
        path: '/objects/parish-of-the-church-of-the-intercession-of-the-most-holy-theotokos',
        name: 'Vileyka',
        component:  Vileyka,
        props: true
    },
    {
        path: '/objects/great-stone',
        name: 'Stone',
        component:  Stone,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router