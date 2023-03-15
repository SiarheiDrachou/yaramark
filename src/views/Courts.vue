<template>
    <section class="object-description">
        <div class="object-description--top">
            <a class="object-description__link-back" href="/objects">
                <ArrowBack />

                Назад к проектам
            </a>

            <h3 class="object-description__heading">
                Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов
            </h3>

            <ul class="object-description-list">
                <li class="object-description-list__item location">
                    <Location />

                    <p v-text="courts.location"></p>
                </li>
                <li class="object-description-list__item year">
                    <span>Год постройки</span>
                    <span v-text="courts.year"></span>
                </li>
                <li class="object-description-list__item sqrt">
                    <span>Площадь объекта</span>
                    <span v-html="courts.sqrt"></span>
                </li>
            </ul>
        </div>
        
        <ObjectCarousel :images="courts.images" />

        <AboutTeams :lists="courts.lists" :heading="courts.heading" :headingStyle="courts.headingStyle || ''" :arrayStyle="courts.arrayStyle || ''"/>
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
                courts: {
                    location: 'Минская обл., Минский р-н, аг. Ждановичи-1',
                    year: '30.04.2020 г.',
                    sqrt: '2550 м<sup>2</sup>',
                    images: [
                        {
                            id: 'courts-1',
                            src: 'https://yaramark.by/img/courts-1.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-1.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-2',
                            src: 'https://yaramark.by/img/courts-2.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-2.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-3',
                            src: 'https://yaramark.by/img/courts-3.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-3.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-4',
                            src: 'https://yaramark.by/img/courts-4.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-4.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-5',
                            src: 'https://yaramark.by/img/courts-5.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-5.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-6',
                            src: 'https://yaramark.by/img/courts-6.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-6.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-7',
                            src: 'https://yaramark.by/img/courts-7.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-7.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                        {
                            id: 'courts-8',
                            src: 'https://yaramark.by/img/courts-8.jpg',
                            WEBPsrc: 'https://yaramark.by/img/courts-8.webp',
                            alt: `Строительство площадки и инженерных сетей для временной воздухоопорной конструкции для размещения теннисных кортов" по адресу: Минская обл., Минский р-н, аг. Ждановичи-1, включая электромонтажные работы`,
                        },
                    ],
                    heading: 'Полный комплекс работ по благоустройству:',
                    lists: [
                        'Исправление существующего профиля',
                        'Устройство основания из щебня',
                        'Устройство саортиврого покрытия из теннесита',
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