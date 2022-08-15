<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="ruxtex.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="ruxtex.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="ruxtex.sqrt"></span>
                </li>
            </ul>
        </div>
        
        <ObjectCarousel :images="ruxtex.images" />

        <AboutTeams :lists="ruxtex.lists" :heading="ruxtex.heading" :headingStyle="ruxtex.headingStyle || ''" :arrayStyle="ruxtex.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Ruxtex" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Ruxtex" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Ruxtex" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Ruxtex" */ "../assets/svg/ArrowBack.vue"),
        },
        data() {
            return {
                ruxtex: {
                    location: 'Минский р-н д. Боровляны, ул. Интернациональная, д.35/2',
                    year: '01.09.2020 г.',
                    sqrt: '7200 м<sup>2</sup>',
                    images: [
                        {
                            id: 'ruxtex-1',
                            src: 'https://yaramark.by/img/ruxtex-1.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-2',
                            src: 'https://yaramark.by/img/ruxtex-2.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-3',
                            src: 'https://yaramark.by/img/ruxtex-3.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-4',
                            src: 'https://yaramark.by/img/ruxtex-4.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-5',
                            src: 'https://yaramark.by/img/ruxtex-5.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-6',
                            src: 'https://yaramark.by/img/ruxtex-6.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-7',
                            src: 'https://yaramark.by/img/ruxtex-7.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-8',
                            src: 'https://yaramark.by/img/ruxtex-8.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-9',
                            src: 'https://yaramark.by/img/ruxtex-9.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                        {
                            id: 'ruxtex-10',
                            src: 'https://yaramark.by/img/ruxtex-10.jpg',
                            alt: `«Создание производства оптомеханических компонентов, электронных узлов и лазерного оборудования на их базе. 3-ья очередь» работы по устройству оснований под полы`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Исправление существующего основания',
                        'Устройство песчаного основания',
                        'Устройство щебеночного основания с расклинцовкой',
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