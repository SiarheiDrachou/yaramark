<template>
    <section class="object-description">
        <a class="object-description__link-back" href="/objects">
            <ArrowBack />

            Назад к проектам
        </a>

        <h3 class="object-description__heading">
            Реконструкция АЗС № 46
        </h3>

        <ul class="object-description-list">
            <li class="object-description-list__item location">
                <Location />

                <p v-text="azs46.location"></p>
            </li>
            <li class="object-description-list__item year">
                <span>Год постройки</span>
                <span v-text="azs46.year"></span>
            </li>
            <li class="object-description-list__item sqrt">
                <span>Площадь объекта</span>
                <span v-html="azs46.sqrt"></span>
            </li>
        </ul>

        <div class="object-description-container">
            <ObjectCarousel :images="azs46.images" />

            <AboutTeams :lists="azs46.lists" :heading="azs46.heading" :headingStyle="azs46.headingStyle || ''" :arrayStyle="azs46.arrayStyle || ''"/>
        </div>
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
                azs46: {
                    location: 'На территории «Национального аэропорта Минск»',
                    year: '06.08.2021 г.',
                    sqrt: '9000 м<sup>2</sup>',
                    images: [
                        {
                            id: 'AZS46-1',
                            src: 'https://yaramark.by/img/AZS46-1.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-2',
                            src: 'https://yaramark.by/img/AZS46-2.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-3',
                            src: 'https://yaramark.by/img/AZS46-3.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-4',
                            src: 'https://yaramark.by/img/AZS46-4.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-5',
                            src: 'https://yaramark.by/img/AZS46-5.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-6',
                            src: 'https://yaramark.by/img/AZS46-6.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-7',
                            src: 'https://yaramark.by/img/AZS46-7.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-8',
                            src: 'https://yaramark.by/img/AZS46-8.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-9',
                            src: 'https://yaramark.by/img/AZS46-9.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-10',
                            src: 'https://yaramark.by/img/AZS46-10.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-11',
                            src: 'https://yaramark.by/img/AZS46-11.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-12',
                            src: 'https://yaramark.by/img/AZS46-12.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-13',
                            src: 'https://yaramark.by/img/AZS46-13.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-14',
                            src: 'https://yaramark.by/img/AZS46-14.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-15',
                            src: 'https://yaramark.by/img/AZS46-15.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-16',
                            src: 'https://yaramark.by/img/AZS46-16.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-17',
                            src: 'https://yaramark.by/img/AZS46-17.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-18',
                            src: 'https://yaramark.by/img/AZS46-18.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-19',
                            src: 'https://yaramark.by/img/AZS46-19.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-20',
                            src: 'https://yaramark.by/img/AZS46-20.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                        {
                            id: 'AZS46-21',
                            src: 'https://yaramark.by/img/AZS46-21.jpg',
                            alt: `Реконструкция АЗС № 46 на территории «Национального аэропорта Минск»`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство борта тротуарного и дорожного',
                        'Устройство плиточного основания',
                        'Разработка грунта',
                        'Вертикальная планировка',
                        'Устройство основания под устройство асфальтобетонного покрытия',
                        'Устройство асфальтобетонного покрытия',
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