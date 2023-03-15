<template>
    <div>
        <Banner :bg="bannerBg" :heading="bannerHeading" :text="bannerText" />

        <AboutDescription />

        <Team />
    </div>
</template>

<script>
    import Banner from "../components/Banner/Banner.vue";
    import AboutDescription from "../components/AboutDescription/AboutDescription.vue";
    import Team from "../components/Team/Team.vue";

    export default {
        components: {
            Banner,
            AboutDescription,
            Team,            
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