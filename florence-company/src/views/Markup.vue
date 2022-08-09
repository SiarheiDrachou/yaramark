<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования
            </h3>

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
        </div>

        <ObjectCarousel :images="markup.images" />

        <AboutTeams :lists="markup.lists" :heading="markup.heading" :headingStyle="markup.headingStyle || ''" :arrayStyle="markup.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Home" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Home" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Home" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Home" */ "../assets/svg/ArrowBack.vue"),
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