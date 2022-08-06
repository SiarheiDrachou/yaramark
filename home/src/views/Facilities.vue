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

                <router-link class="objects-list__item__link" :to="{name: facility.linkName}">{{facility.heading}}</router-link>
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
                        src: 'https://yaramark.by/img/courts-8.jpg',
                        WEBPsrc: ``,
                        alt: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        heading: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        linkName: 'Courts',
                    },
                    {
                        id: 2,
                        src: 'https://yaramark.by/img/svisloch-9.jpg',
                        WEBPsrc: ``,
                        alt: `Открытое акционерное общество «Стройтрест №1»`,
                        heading: `Открытое акционерное общество «Стройтрест №1»`,
                        linkName: 'Svisloch',
                    },
                    {
                        id: 3,
                        src: 'https://yaramark.by/img/uprooting-10.jpg',
                        WEBPsrc: ``,
                        alt: `«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»`,
                        heading: `Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»`,
                        linkName: 'Uprooting',
                    },
                    {
                        id: 4,
                        src: 'https://yaramark.by/img/ruxtex-6.jpg',
                        WEBPsrc: ``,
                        alt: `Общество с ограниченной ответственностью «Санвеста»`,
                        heading: `Общество с ограниченной ответственностью «Санвеста»`,
                        linkName: 'Ruxtex',
                    },
                    {
                        id: 5,
                        src: 'https://yaramark.by/img/AZS64-13.jpg',
                        alt: `Совместное предприятие «АЗСИНДУСТРИЯ» общество с ограниченной ответственностью`,
                        heading: `Совместное предприятие «АЗСИНДУСТРИЯ» общество с ограниченной ответственностью`,
                        linkName: 'AZS-64',
                    },
                    {
                        id: 6,
                        src: 'https://yaramark.by/img/markup-3.jpg',
                        WEBPsrc: ``,
                        alt: `ООО «Флоренс компани»`,
                        heading: `ООО «Флоренс компани»`,
                        linkName: 'Markup',
                    },
                    {
                        id: 7,
                        src: 'https://yaramark.by/img/minina-1.jpg',
                        WEBPsrc: ``,
                        alt: `РУП «Стройтехнорм»`,
                        heading: `РУП «Стройтехнорм»`,
                        linkName: 'Minina',
                    },
                    {
                        id: 8,
                        src: 'https://yaramark.by/img/stone-10.jpg',
                        WEBPsrc: ``,
                        alt: `Унитарное предприятие "Компания по управлению недвижимостью индустриального парка"`,
                        heading: `Унитарное предприятие "Компания по управлению недвижимостью индустриального парка"`,
                        linkName: 'Stone',
                    },
                    {
                        id: 9,
                        src: 'https://yaramark.by/img/AZS64-13.jpg',
                        alt: `Реконструкция АЗС № 46`,
                        heading: `Реконструкция АЗС № 46`,
                        linkName: 'AZS-46',
                    },
                    {
                        id: 10,
                        src: 'https://yaramark.by/img/AZS64-13.jpg',
                        alt: `Реконструкция АЗС № 80`,
                        heading: `Реконструкция АЗС № 80`,
                        linkName: 'AZS-80',
                    },
                    {
                        id: 11,
                        src: 'https://yaramark.by/img/vileyka-1.jpg',
                        WEBPsrc: ``,
                        alt: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        heading: `Приход храма Покрова Пресвятой Богородицы г. Вилейка Молодечненская епархия Белорусской Православной церкви`,
                        linkName: 'Vileyka',
                    },
                    {
                        id: 12,
                        src: 'https://yaramark.by/img/shelter-1.jpg',
                        WEBPsrc: ``,
                        alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
                        heading: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска”`,
                        linkName: 'Shelter',
                    },
                    {
                        id: 13,
                        src: 'https://yaramark.by/img/courts-8.jpg',
                        WEBPsrc: ``,
                        alt: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        heading: `Учреждение "Минский объединенный спортивный клуб Федерации профсоюзов Беларуси"`,
                        linkName: 'Courts',
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
            }

            &__item:hover figcaption {
                filter: drop-shadow(0px 0px 23px rgba(0, 0, 0, 0.1));
                background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            }
        }
    }
</style>