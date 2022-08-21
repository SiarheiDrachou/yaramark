<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Корчевание и вытряхивание пней с расчисткой территории
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="uprooting.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="uprooting.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="uprooting.sqrt"></span>
                </li>
            </ul>
        </div>

        <ObjectCarousel :images="uprooting.images" />

        <AboutTeams :lists="uprooting.lists" :heading="uprooting.heading" :headingStyle="uprooting.headingStyle || ''" :arrayStyle="uprooting.arrayStyle || ''"/>
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
                uprooting: {
                    location: 'Китайско-Белорусский индустриальный парк «Великий камень», пр-т Пекинский, 18',
                    year: '31.07.2020 г.',
                    sqrt: '60000 м<sup>2</sup>',
                    images: [
                        {
                            id: 'uprooting-1',
                            src: 'https://yaramark.by/img/uprooting-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-1.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-2',
                            src: 'https://yaramark.by/img/uprooting-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-2.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-3',
                            src: 'https://yaramark.by/img/uprooting-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-3.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-4',
                            src: 'https://yaramark.by/img/uprooting-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-4.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-5',
                            src: 'https://yaramark.by/img/uprooting-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-5.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-6',
                            src: 'https://yaramark.by/img/uprooting-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-6.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-7',
                            src: 'https://yaramark.by/img/uprooting-7.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-7.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-8',
                            src: 'https://yaramark.by/img/uprooting-8.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-8.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-9',
                            src: 'https://yaramark.by/img/uprooting-9.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-9.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-10',
                            src: 'https://yaramark.by/img/uprooting-10.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-10.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-11',
                            src: 'https://yaramark.by/img/uprooting-11.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-11.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                        {
                            id: 'uprooting-12',
                            src: 'https://yaramark.by/img/uprooting-12.jpg',
                            WEBPsrc: 'https://yaramark.by/img/uprooting-12.webp',
                            alt: `Корчевание и вытряхивание пней с расчисткой территории`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Корчевание и вытряхивание пней с расчисткой территории',
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