<template>
    <div id="app" data-server-rendered="true">
        <Header />

        <PreviewModal v-if="isOpenPreview" />

        <main class="main">
            <section class="object-description">
                <a class="object-description__link-back" href="/objects">
                    <ArrowBack />

                    Назад к проектам
                </a>
                <ul class="object-description-list">
                    <li class="object-description-list__item location">
                        <Location />

                        <p v-text="markup.location"></p>
                    </li>
                    <li class="object-description-list__item year">
                        <span>Год постройки</span>
                        <span v-text="markup.year"></span>
                    </li>
                    <li class="object-description-list__item sqrt">
                        <span>Площадь объекта</span>
                        <span v-html="markup.sqrt"></span>
                    </li>
                </ul>
                <div class="object-description-container">
                    <ObjectCarousel :images="markup.images" />

                    <AboutTeams :lists="markup.lists" :heading="markup.heading" :headingStyle="markup.headingStyle || ''" :arrayStyle="markup.arrayStyle || ''"/>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        components: {
            Header: () => import(/* webpackChunkName: "Home" */ "./components/Header/Header.vue"),
            Footer: () => import(/* webpackChunkName: "Home" */ "./components/Footer/Footer.vue"),
            PreviewModal: () => import(/* webpackChunkName: "Home" */ "./components/PreviewModal/PreviewModal.vue"),
            Location: () => import(/* webpackChunkName: "Home" */ "./assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Home" */ "./components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Home" */ "./components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Home" */ "./assets/svg/ArrowBack.vue"),
        },
        computed: {
            ...mapState({
                isOpenPreview: state => state.isOpenPreview
            })
        },
        data() {
            return {
                markup: {
                    location: 'ООО «Флоренс компани»',
                    year: '30.09.2020 г.',
                    sqrt: '2400 м.п.',
                    images: [
                        {
                            id: 'markup-1',
                            src: 'https://yaramark.by/img/markup-1.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-2',
                            src: 'https://yaramark.by/img/markup-2.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-3',
                            src: 'https://yaramark.by/img/markup-3.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-4',
                            src: 'https://yaramark.by/img/markup-4.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-5',
                            src: 'https://yaramark.by/img/markup-5.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-6',
                            src: 'https://yaramark.by/img/markup-6.jpg',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство разметки в производственных цехах',
                    ],
                    headingStyle: {
                        marginBottom: '33px',
                    },
                    arrayStyle: {
                        marginBottom: '130px',
                    }
                }
            }
        },
    }
</script>

<style lang="scss">
    @import url('./assets/animations.scss');

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto';
    }

    // @font-face {
    //     font-family: 'Raleway Medium';
    //     src: 
    //         url('./assets/font/Raleway-Medium.ttf') format('truetype');
    //     font-weight: 500;
    //     font-style: normal;
    //     font-display: swap;
    // }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-width: 360px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    ul,
    ol,
    hr,
    label,
    div,
    fieldset,
    figure {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
    }

    h2 {
        font-size: 40px;
        line-height: 56px;
    }

    a,
    button,
    select,
    input,
    svg {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        border: none;
    }

    input,
    textarea {
        color: #878787;
        font-size: 22px;
        line-height: 26px;
        padding: 17px 29px;
        width: 100%;
        border: none !important;
        outline: none !important;
        max-width: 100%;
    }

    select {
        border: none !important;
        outline: none !important;
        background-color: transparent;
        max-width: 100%;
    }

    ul {
        list-style-type: none;
    }

    a:hover {
        text-decoration: none;
    }

    picture {

        img,
        source {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
        }
    }

    #app {
        width: 100%;
        min-width: 320px;
    }

    .anchor {
        display: block;
        position: absolute;
        top: -160px;
        visibility: hidden;

        @media (max-width: 1024px) {
            top: -80px;
        }
    }

    .button {

        &--primary {
            background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            font-size: 18px;
            line-height: 21px;
            padding: 21px 50px;
        }

        &--secondary {
            border: 1px solid#FFCB00;
            background-color: transparent;
            color: black;
        }
    }
</style>