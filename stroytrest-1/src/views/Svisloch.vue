<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Республиканский центр обработки данных
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="svisloch.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="svisloch.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="svisloch.sqrt"></span>
                </li>
            </ul>
        </div>

        
        <ObjectCarousel :images="svisloch.images" />

        <AboutTeams :lists="svisloch.lists" :heading="svisloch.heading" :headingStyle="svisloch.headingStyle || ''" :arrayStyle="svisloch.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Svisloch" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Svisloch" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Svisloch" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Svisloch" */ "../assets/svg/ArrowBack.vue"),
        },
        data() {
            return {
                svisloch: {
                    location: 'Республиканский центр обработки данных',
                    year: '13.07.2020 г.',
                    sqrt: '5100 м<sup>2</sup>',
                    images: [
                        {
                            id: 'svisloch-1',
                            src: 'https://yaramark.by/img/svisloch-1.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-2',
                            src: 'https://yaramark.by/img/svisloch-2.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-3',
                            src: 'https://yaramark.by/img/svisloch-3.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-4',
                            src: 'https://yaramark.by/img/svisloch-4.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-5',
                            src: 'https://yaramark.by/img/svisloch-5.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-6',
                            src: 'https://yaramark.by/img/svisloch-6.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-7',
                            src: 'https://yaramark.by/img/svisloch-7.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-8',
                            src: 'https://yaramark.by/img/svisloch-8.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                        {
                            id: 'svisloch-9',
                            src: 'https://yaramark.by/img/svisloch-9.jpg',
                            alt: `Республиканский центр обработки данных`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство основания',
                        'Устройство асфальтобетонного покрытия',
                        'Устройство борта дорожного и тротуарного',
                        'Устройство плиточного основания',
                        'Устройство отмостки',
                        'Озеленение территории',
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