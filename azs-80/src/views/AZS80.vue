<template>
    <section class="object-description">
        
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Реконструкция АЗС № 80
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="azs80.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="azs80.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="azs80.sqrt"></span>
                </li>
            </ul>
        </div>
        
        <ObjectCarousel :images="azs80.images" />

        <AboutTeams :lists="azs80.lists" :heading="azs80.heading" :headingStyle="azs80.headingStyle || ''" :arrayStyle="azs80.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "AZS80" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "AZS80" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "AZS80" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "AZS80" */ "../assets/svg/ArrowBack.vue"),
        },
        data() {
            return {
                azs80: {
                    location: 'а/д Р-23 Минск-Микашевичи, 57-й км',
                    year: '30.11.2021 г.',
                    sqrt: '1300 м<sup>2</sup>',
                    images: [
                        {
                            id: 'AZS80-1',
                            src: 'https://yaramark.by/img/AZS80-1.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                        {
                            id: 'AZS80-2',
                            src: 'https://yaramark.by/img/AZS80-2.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                        {
                            id: 'AZS80-3',
                            src: 'https://yaramark.by/img/AZS80-3.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                        {
                            id: 'AZS80-4',
                            src: 'https://yaramark.by/img/AZS80-4.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                        {
                            id: 'AZS80-5',
                            src: 'https://yaramark.by/img/AZS80-5.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                        {
                            id: 'AZS80-6',
                            src: 'https://yaramark.by/img/AZS80-6.jpg',
                            alt: `«Реконструкция АЗС № 80»`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство борта тротуарного и дорожного',
                        'Устройство плиточного основания',
                        'Устройство бетонных оснований',
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