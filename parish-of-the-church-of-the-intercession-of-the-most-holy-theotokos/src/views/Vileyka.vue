<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Приход храма Покрова Пресвятой Богородицы
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="vileyka.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="vileyka.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="vileyka.sqrt"></span>
                </li>
            </ul>
        </div>

        
        <ObjectCarousel :images="vileyka.images" />

        <AboutTeams :lists="vileyka.lists" :heading="vileyka.heading" :headingStyle="vileyka.headingStyle || ''" :arrayStyle="vileyka.arrayStyle || ''"/>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Vileyka" */ "../assets/svg/Location.vue"),
            ObjectCarousel: () => import(/* webpackChunkName: "Vileyka" */ "../components/ObjectCarousel/ObjectCarousel.vue"),
            AboutTeams: () => import(/* webpackChunkName: "Vileyka" */ "../components/AboutDescription/AboutTeams.vue"),
            ArrowBack: () => import(/* webpackChunkName: "Vileyka" */ "../assets/svg/ArrowBack.vue"),
        },
        data() {
            return {
                vileyka: {
                    location: 'Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви',
                    year: '01.09.2021 г.',
                    sqrt: '520 м<sup>2</sup>',
                    images: [
                        {
                            id: 'vileyka-1',
                            src: 'https://yaramark.by/img/vileyka-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-1.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-2',
                            src: 'https://yaramark.by/img/vileyka-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-2.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-3',
                            src: 'https://yaramark.by/img/vileyka-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-3.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-4',
                            src: 'https://yaramark.by/img/vileyka-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-4.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-5',
                            src: 'https://yaramark.by/img/vileyka-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-5.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-6',
                            src: 'https://yaramark.by/img/vileyka-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-6.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-7',
                            src: 'https://yaramark.by/img/vileyka-7.jpg',
                            WEBPsrc: 'https://yaramark.by/img/vileyka-7.webp',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Устройство отмостки',
                        'Установка тротуарного борта',
                        'Устройство литочного основания',
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