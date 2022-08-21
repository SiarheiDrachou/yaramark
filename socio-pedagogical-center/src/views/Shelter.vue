<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Благоустройство территории детского социального приюта
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="shelter.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="shelter.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="shelter.sqrt"></span>
                </li>
            </ul>
        </div>

        
        <ObjectCarousel :images="shelter.images" />

        <AboutTeams :lists="shelter.lists" :heading="shelter.heading" :headingStyle="shelter.headingStyle || ''" :arrayStyle="shelter.arrayStyle || ''"/>
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
                shelter: {
                    location: 'г. Минск, ул. М. Танка, 34а.',
                    year: '05.04.2020 г.',
                    sqrt: '40 м<sup>2</sup>',
                    images: [
                        {
                            id: 'shelter-1',
                            src: 'https://yaramark.by/img/shelter-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-1.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-2',
                            src: 'https://yaramark.by/img/shelter-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-2.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-3',
                            src: 'https://yaramark.by/img/shelter-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-3.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-4',
                            src: 'https://yaramark.by/img/shelter-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-4.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-5',
                            src: 'https://yaramark.by/img/shelter-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-5.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-6',
                            src: 'https://yaramark.by/img/shelter-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-6.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                        {
                            id: 'shelter-7',
                            src: 'https://yaramark.by/img/shelter-7.jpg',
                            WEBPsrc: 'https://yaramark.by/img/shelter-7.webp',
                            alt: `Благоустройство территории детского социального приюта по адресу: г. Минск, ул. М. Танка, 34а. Благотворительность`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Ремонт основания из плитки',
                        'Ремонт отмостки',
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