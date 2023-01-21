<template>
    <section class="objects">
        <ul class="objects-list">
            <li class="objects-list__item" v-for="facility in facilities" :key="facility.heading">
                <picture v-if="facility.src || facility.WEBPsrc">
                    <source
                        v-if="facility.WEBPsrc"
                        :srcset="facility.WEBPsrc"
                        :alt="facility.alt"
                        type="image/webp"
                    />
                    <img :src="facility.src" :alt="facility.alt">
                </picture>

                <a class="objects-list__item__link" :href="facility.linkName">{{facility.heading}}</a>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                facilities: [
                    {
                        id: 1,
                        src: 'https://yaramark.by/img/courts-7.jpg',
                        WEBPsrc: 'https://yaramark.by/img/courts-7.webp',
                        alt: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        heading: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        linkName: '/objects/minsk-united-sports-club',
                    },
                    {
                        id: 2,
                        src: 'https://yaramark.by/img/svisloch-9.jpg',
                        WEBPsrc: 'https://yaramark.by/img/svisloch-9.webp',
                        alt: `Реконструкция существующего склада ветеринарных препаратов`,
                        heading: `Реконструкция существующего склада ветеринарных препаратов`,
                        linkName: '/objects/stroytrest-1',
                    },
                    {
                        id: 3,
                        src: 'https://yaramark.by/img/uprooting-10.jpg',
                        WEBPsrc: 'https://yaramark.by/img/uprooting-10.webp',
                        alt: `«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»`,
                        heading: `Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»`,
                        linkName: '/objects/industrial-park-property-management-company',
                    },
                    {
                        id: 4,
                        src: 'https://yaramark.by/img/ruxtex-6.jpg',
                        WEBPsrc: 'https://yaramark.by/img/ruxtex-6.webp',
                        alt: `Общество с ограниченной ответственностью «Санвеста»`,
                        heading: `Общество с ограниченной ответственностью «Санвеста»`,
                        linkName: '/objects/sanvest',
                    },
                    {
                        id: 5,
                        src: 'https://yaramark.by/img/AZS64-11.jpg',
                        WEBPsrc: 'https://yaramark.by/img/AZS64-11.webp',
                        alt: `Строительство автозаправочной станции №64`,
                        heading: `Строительство автозаправочной станции №64`,
                        linkName: '/objects/azs-64',
                    },
                    {
                        id: 6,
                        src: 'https://yaramark.by/img/markup-1.jpg',
                        WEBPsrc: 'https://yaramark.by/img/markup-1.webp',
                        alt: `ООО «Флоренс компани»`,
                        heading: `ООО «Флоренс компани»`,
                        linkName: '/objects/florence-company',
                    },
                    {
                        id: 7,
                        src: 'https://yaramark.by/img/minina-1.jpg',
                        WEBPsrc: 'https://yaramark.by/img/minina-1.webp',
                        alt: `РУП «Стройтехнорм»`,
                        heading: `РУП «Стройтехнорм»`,
                        linkName: '/objects/stroytekhnorm',
                    },
                    {
                        id: 8,
                        src: 'https://yaramark.by/img/azs-belorusneft-46.jpg',
                        WEBPsrc: 'https://yaramark.by/img/azs-belorusneft-46.webp',
                        alt: `Реконструкция АЗС № 46`,
                        heading: `Реконструкция АЗС № 46`,
                        linkName: '/objects/azs-46',
                    },
                    {
                        id: 9,
                        src: 'https://yaramark.by/img/azs-belorusneft-80.jpg',
                        WEBPsrc: 'https://yaramark.by/img/azs-belorusneft-80.webp',
                        alt: `Реконструкция АЗС № 80`,
                        heading: `Реконструкция АЗС № 80`,
                        linkName: '/objects/azs-80',
                    },
                    {
                        id: 10,
                        src: 'https://yaramark.by/img/vileyka-1.jpg',
                        WEBPsrc: 'https://yaramark.by/img/vileyka-1.webp',
                        alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        heading: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        linkName: '/objects/parish-of-the-church-of-the-intercession-of-the-most-holy-theotokos',
                    },
                    {
                        id: 11,
                        src: 'https://yaramark.by/img/shelter-1.jpg',
                        WEBPsrc: 'https://yaramark.by/img/shelter-1.webp',
                        alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
                        heading: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
                        linkName: '/objects/socio-pedagogical-center',
                    },

                    {
                        id: 12,
                        src: 'https://yaramark.by/img/stone-7.jpg',
                        WEBPsrc: `https://yaramark.by/img/stone-7.webp`,
                        alt: `Унитарное предприятие "Компания по управлению недвижимостью индустриального парка"`,
                        heading: `Унитарное предприятие "Компания по управлению недвижимостью индустриального парка"`,
                        linkName: '/objects/great-stone',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss">
    .objects {
        max-width: 1280px;
        margin: 45px auto 130px;

        &-list {
            display: grid;
            grid-template-columns: repeat(3, 384px);
            grid-gap: 24px;

            @media(max-width: 1340px) {
                grid-template-columns: repeat(2, 384px);
                justify-content: center;
            }

            @media(max-width: 840px) {
                grid-template-columns: 384px;
            }

            &__item {
                box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
                font-size: 24px;
                line-height: 34px;
                font-weight: 500;

                img {
                    max-height: 288px;
                    height: 288px;
                }

                &__link {
                    padding: 10px;
                    height: 190px;
                    color: black;
                    display: block;
                }

                &:hover {
                    background-color: #ffcb00;
                }
            }

            &__item:hover figcaption {
                filter: drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.1));
                background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            }
        }
    }
</style>