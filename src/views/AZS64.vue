<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Строительство автозаправочной станции №64
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="azs64.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="azs64.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="azs64.sqrt"></span>
                </li>
            </ul>
        </div>
        
        <ObjectCarousel :images="azs64.images" />

        <AboutTeams :lists="azs64.lists" :heading="azs64.heading" :headingStyle="azs64.headingStyle || ''" :arrayStyle="azs64.arrayStyle || ''"/>
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
                azs64: {
                    location: 'г. Минске по ул. Запорожская - ул. Передовая',
                    year: '24.08.2020 г.',
                    sqrt: '6 700 м<sup>2</sup>',
                    images: [
                        {
                            id: 'AZS64-1',
                            src: 'https://yaramark.by/img/AZS64-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-1.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-2',
                            src: 'https://yaramark.by/img/AZS64-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-2.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-3',
                            src: 'https://yaramark.by/img/AZS64-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-3.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-4',
                            src: 'https://yaramark.by/img/AZS64-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-4.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-5',
                            src: 'https://yaramark.by/img/AZS64-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-5.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-6',
                            src: 'https://yaramark.by/img/AZS64-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-6.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-7',
                            src: 'https://yaramark.by/img/AZS64-7.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-7.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-8',
                            src: 'https://yaramark.by/img/AZS64-8.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-8.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-9',
                            src: 'https://yaramark.by/img/AZS64-9.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-9.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-10',
                            src: 'https://yaramark.by/img/AZS64-10.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-10.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-11',
                            src: 'https://yaramark.by/img/AZS64-11.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-11.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-12',
                            src: 'https://yaramark.by/img/AZS64-12.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-12.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                        {
                            id: 'AZS64-13',
                            src: 'https://yaramark.by/img/AZS64-13.jpg',
                            WEBPsrc: 'https://yaramark.by/img/AZS64-13.webp',
                            alt: `Строительство автозаправочной станции №64 в г. Минске`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство борта тротуарного и дорожного',
                        'Устройство плиточного основания',
                        'Разработка грунта',
                        'Вертикальная планировка',
                        'Устройство основания под устройство асфальтобетонного покрытия',
                    ],
                    headingStyle: {
                        marginBottom: '33px',
                    },
                    arrayStyle: {
                        marginBottom: '130px',
                    }
                }
            }
        }
    }
</script>