<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Реконструкция зданий РУП «Стройтехнорм»
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="minina.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="minina.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="minina.sqrt"></span>
                </li>
            </ul>
        </div>
        
        <ObjectCarousel :images="minina.images" />

        <AboutTeams :lists="minina.lists" :heading="minina.heading" :headingStyle="minina.headingStyle || ''" :arrayStyle="minina.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Minina" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Minina" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Minina" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Minina" */ "../assets/svg/ArrowBack.vue"),
        },
        data() {
            return {
                minina: {
                    location: 'Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11',
                    year: '16.11.2021 г.',
                    sqrt: '890 м<sup>2</sup>',
                    images: [
                        {
                            id: 'Minina-1',
                            src: 'https://yaramark.by/img/minina-1.jpg',
                            alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
                        },
                        {
                            id: 'Minina-2',
                            src: 'https://yaramark.by/img/minina-2.jpg',
                            alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
                        },
                        {
                            id: 'Minina-3',
                            src: 'https://yaramark.by/img/minina-3.jpg',
                            alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
                        },
                        {
                            id: 'Minina-4',
                            src: 'https://yaramark.by/img/minina-4.jpg',
                            alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
                        },
                        {
                            id: 'Minina-5',
                            src: 'https://yaramark.by/img/minina-5.jpg',
                            alt: `«Реконструкция зданий РУП «Стройтехнорм» по ул. Кузьмы Минина 7, 11»`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство борта тротуарного и дорожного',
                        'Устройство плиточного основания',
                        'Разработка грунта',
                        'Вертикальная планировка',
                        'Устройство основания под устройство асфальтобетонного покрытия',
                        'Устройство наружны сетей ливневой канализации',
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