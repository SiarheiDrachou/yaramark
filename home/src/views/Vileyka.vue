<template>
    <section class="object-description">
        <a class="object-description__link-back" href="/objects">
            <ArrowBack />

            Назад к проектам
        </a>
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

        <div class="object-description-container">
            <ObjectCarousel :images="vileyka.images" />

            <AboutTeams :lists="vileyka.lists" :heading="vileyka.heading" :headingStyle="vileyka.headingStyle || ''" :arrayStyle="vileyka.arrayStyle || ''"/>
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
                vileyka: {
                    location: 'Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви',
                    year: '01.09.2021 г.',
                    sqrt: '520 м<sup>2</sup>',
                    images: [
                        {
                            id: 'vileyka-1',
                            src: 'https://yaramark.by/img/vileyka-1.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-2',
                            src: 'https://yaramark.by/img/vileyka-2.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-3',
                            src: 'https://yaramark.by/img/vileyka-3.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-4',
                            src: 'https://yaramark.by/img/vileyka-4.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-5',
                            src: 'https://yaramark.by/img/vileyka-5.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-6',
                            src: 'https://yaramark.by/img/vileyka-6.jpg',
                            alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        },
                        {
                            id: 'vileyka-7',
                            src: 'https://yaramark.by/img/vileyka-7.jpg',
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