<template>
    <div>
        <Banner :bg="bannerBg" :heading="bannerHeading" :text="bannerText" />

        <AboutDescription />

        <Team />
    </div>
</template>

<script>
    export default {
        components: {
            Banner: () => import(/* webpackChunkName: "AboutUs" */ "../components/Banner/Banner.vue"),
            AboutDescription: () => import(/* webpackChunkName: "AboutUs" */ "../components/AboutDescription/AboutDescription.vue"),
            Team: () => import(/* webpackChunkName: "AboutUs" */ "../components/Team/Team.vue"),            
        },
        data() {
            return {
                bannerBg: 'https://yaramark.by/img/banner-about-bg.png',
                bannerHeading: `Строительная компания «ЯраМарк»`,
                bannerText: `Наша компания основана 20 января 2020 года и действует по настоящее время, юридический и почтовый адрес: 223053, Минский район, д. Боровляны, улица Березовая роща, 21`,
            }
        }
    }
</script>