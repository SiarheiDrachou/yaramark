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
    import Location from "../assets/svg/Location.vue";
    import ObjectCarousel from "../components/ObjectCarousel/ObjectCarousel.vue";
    import AboutTeams from "../components/AboutDescription/AboutTeams.vue";
    import ArrowBack from "../assets/svg/ArrowBack.vue";

    export default {
        components: {
            Location,
            ObjectCarousel,
            AboutTeams,
            ArrowBack,
        },
        data() {
            return {
                markup: {
                    location: 'Минская обл., Минский р-н, Новодворский с/с, д. Большое Стиклево, дом № 40/2',
                    year: '30.09.2020 г.',
                    sqrt: '2400 м.п.',
                    images: [
                        {
                            id: 'markup-1',
                            src: 'https://yaramark.by/img/markup-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-1.webp',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-2',
                            src: 'https://yaramark.by/img/markup-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-2.webp',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-3',
                            src: 'https://yaramark.by/img/markup-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-3.webp',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-4',
                            src: 'https://yaramark.by/img/markup-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-4.webp',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-5',
                            src: 'https://yaramark.by/img/markup-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-5.webp',
                            alt: `«Техническая модернизация здания специализированного для производства электротехнического, электронного и оптического оборудования (производственный корпус с АБК) с инвентарным номером 614/С-46617» Нанесение разметки`,
                        },
                        {
                            id: 'markup-6',
                            src: 'https://yaramark.by/img/markup-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/markup-6.webp',
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