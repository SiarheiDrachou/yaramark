<template>
    <section class="rent">
        <ul class="rent-category-list">
            <li v-for="category in categoryArray" :key="category" class="rent-category-list__item">
                <button class="rent-category-list__item__button" :class="{'rent-category-list__item__button--active': selectedType === category }" v-text="category" @click="filterCategory(category)"></button>
            </li>
        </ul>

        <ul class="rent-card-list">
            <RentCard v-for="card in currentCardArray" :key="card.name" :card="card" />
        </ul>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        components: {
            RentCard: () => import(/* webpackChunkName: "Rent" */ "../components/RentCard/RentCard.vue"),
        },
        data() {
            return {
                categoryArray: [
                    'Экскаваторы',
                    'Погрузки',
                    'Каток',
                    'Бульдозеры',
                    'Самосвалы',
                    'МАЗ/КАМАЗ',
                    'Вся техника',
                ],
                cardArray: [
                    // {
                    //     name: 'Экскаватор JCB',
                    //     technicType: 'Гусеничный',
                    //     src: 'https://yaramark.by/img/default-image.png',
                    //     alt: 'Экскаватор JCB на гусеничном ходу 220 ',
                    //     ladle: '1,1 м<sup>3</sup> - 1,3 м<sup>3</sup>',
                    //     weight: '22 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     count: 2,
                    //     type: 'Экскаваторы',
                    // },
                    {
                        name: 'HYUNDAI ROBEX 210 LC - 9s',
                        technicType: 'Гусеничный',
                        src: 'https://yaramark.by/img/Huyndai-R220-LC-9S.jpg',
                        alt: 'Гусеничный экскаватор HYUNDAI ROBEX 210 LC - 9',
                        ladle: '1,2 м<sup>3</sup>',
                        weight: '22 т',
                        swampCaterpillar: '70 см',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        count: 3,
                        type: 'Экскаваторы',
                    },
                    {
                        name: 'Huyndai Robex R260 LC-9S',
                        technicType: 'Гусеничный',
                        src: 'https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.jpg',
                        alt: 'Гусеничный экскаватор Huyndai Robex R260 LC-9S',
                        ladle: '1,4 м<sup>3</sup>',
                        weight: '25 т',
                        swampCaterpillar: '80 см',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Экскаваторы',
                        count: 2,
                    },
                    {
                        name: 'Huyndai Robex R260 LC-9s',
                        technicType: 'Гусеничный',
                        src: 'https://yaramark.by/img/Huyndai-Robex-R260-LC-9S.jpg',
                        alt: 'Гусеничный экскаватор Huyndai Robex R260 LC-9s',
                        ladle: '1,2 м<sup>3</sup>',
                        weight: '22 т',
                        swampCaterpillar: '80 см',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Экскаваторы',
                        count: 2,
                    },
                    // {
                    //     name: 'Бульдозер Caterpillar D5LGP',
                    //     technicType: 'На болотном ходу, планировочный',
                    //     src: 'https://yaramark.by/img/Бульдозер-Caterpiller-D6K-Trimble-EM400.jpg',
                    //     alt: 'Бульдозер Caterpillar D5LGP на болотном ходу, ширина трака 86 см, ширина отвала 4 м, планировочный ',
                    //     ladle: '',
                    //     weight: '',
                    //     swampCaterpillar: '',
                    //     trackWidth: '86 см',
                    //     bladeWidth: '4,00 м',
                    //     diggingDepth: '',
                    //     type: 'Бульдозеры',
                    //     count: 1,
                    // },
                    // {
                    //     name: 'Экскаватор-погрузчик Caterpillar 434F2',
                    //     technicType: 'Экскаватор-погрузчик',
                    //     src: 'https://yaramark.by/img/default-image.png',
                    //     alt: 'Экскаватор-погрузчик Caterpillar 434F2',
                    //     ladle: '1,15 м<sup>3</sup>',
                    //     weight: '',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     type: 'Экскаваторы',
                    //     count: 1,
                    // },
                    // {
                    //     name: 'Экскаватор-погрузчик ДЭМ 310-05',
                    //     technicType: 'Экскаватор-погрузчик',
                    //     src: 'https://yaramark.by/img/default-image.png',
                    //     alt: 'Экскаватор-погрузчик ДЭМ 310-05',
                    //     ladle: '',
                    //     weight: '3 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     type: 'Экскаваторы',
                    //     count: 1,
                    // },
                    // {
                    //     name: 'Экскаватор-колесный Volvo EB160W',
                    //     technicType: 'Экскаватор-погрузчик',
                    //     src: 'https://yaramark.by/img/default-image.png',
                    //     alt: 'Экскаватор-колесный Volvo EB160W',
                    //     ladle: '0,75 м<sup>3</sup>',
                    //     weight: '3 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '5,5 м',
                    //     type: 'Экскаваторы',
                    //     count: 1,
                    // },
                    // {
                    //     name: 'Бульдозер Caterpillar D5LGP',
                    //     technicType: 'На болотном ходу, планировочный',
                    //     src: 'https://yaramark.by/img/default-image.png',
                    //     alt: 'Бульдозер Caterpillar D5LGP на болотном ходу, ширина трака 86 см, ширина отвала 4 м, планировочный ',
                    //     ladle: '',
                    //     weight: '18 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '3,3 м',
                    //     diggingDepth: '',
                    //     type: 'Бульдозеры',
                    //     count: 1,
                    // },
                    {
                        name: 'Бульдозер Caterpiller D6M LGP',
                        technicType: 'Бульдозер',
                        src: 'https://yaramark.by/img/Бульдозер-Caterpiller-D6M-LGP.jpg',
                        alt: 'Бульдозер Caterpiller D6M LGP',
                        ladle: '',
                        weight: '',
                        swampCaterpillar: '',
                        trackWidth: '86 см',
                        bladeWidth: '4 м',
                        diggingDepth: '',
                        type: 'Бульдозеры',
                        count: 2,
                    },
                    {
                        name: 'Грунтовый каток BOMAG BW213',
                        technicType: 'Грунтовый каток',
                        src: 'https://yaramark.by/img/Грунтовый-каток-BOMAG-BW213.jpg',
                        alt: 'Грунтовый каток BOMAG BW213',
                        ladle: '',
                        weight: '14 т',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Каток',
                        count: 2,
                    },
                    // {
                    //     name: 'Грунтовый каток HAMM',
                    //     technicType: 'Грунтовый каток',
                    //     src: 'https://yaramark.by/img/Грунтовый-каток-BOMAG-BW213.jpg',
                    //     alt: 'Грунтовый каток HAMM',
                    //     ladle: '',
                    //     weight: '16 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     type: 'Каток',
                    //     count: 1,
                    // },
                    // {
                    //     name: 'Грунтовый каток Ammann',
                    //     technicType: 'Грунтовый каток',
                    //     src: 'https://yaramark.by/img/Грунтовый-каток-BOMAG-BW213.jpg',
                    //     alt: 'Грунтовый каток Ammann',
                    //     ladle: '',
                    //     weight: '18 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     type: 'Каток',
                    //     count: 1,
                    // },
                    {
                        name: 'МАЗ 6502H9-422-052',
                        technicType: 'МАЗ',
                        src: 'https://yaramark.by/img/МАЗ-6502H9-422-052.jpg',
                        alt: 'МАЗ 6502H9-422-052 6х6 полный привод, 20 тонн, с повышенными бортами',
                        ladle: '',
                        weight: '20 т',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'МАЗ/КАМАЗ',
                        count: 3,
                    },
                    // {
                    //     name: 'КАМАЗ 6522',
                    //     technicType: 'КАМАЗ',
                    //     src: 'https://yaramark.by/img/МАЗ-6502H9-422-052.jpg',
                    //     alt: 'КАМАЗ 6522 6х6 полный привод, 20 тонн, с повышенными бортами',
                    //     ladle: '',
                    //     weight: '20 т',
                    //     swampCaterpillar: '',
                    //     trackWidth: '',
                    //     bladeWidth: '',
                    //     diggingDepth: '',
                    //     type: 'МАЗ/КАМАЗ',
                    //     count: 3,
                    // },
                    {
                        name: 'Погрузчик SD LG 956F',
                        technicType: 'Погрузчик фронтальный',
                        src: 'https://yaramark.by/img/Погрузчик-SDLG-956F.jpg',
                        alt: 'Погрузчик SD LG 956F',
                        ladle: '3 м<sup>3</sup>',
                        weight: '5 т',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Погрузки',
                        count: 2,
                    },
                    {
                        name: 'Самосвал МАЗ 5516',
                        technicType: 'Самосвал',
                        src: 'https://yaramark.by/img/Самосвал-МАЗ-5516.png',
                        alt: 'Самосвал МАЗ 5516 20 тонн, с повышенными бортами',
                        ladle: '',
                        weight: '20 т',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Самосвалы',
                        count: 8,
                    },
                    {
                        name: 'Самосвал МАЗ 6501',
                        technicType: 'Самосвал',
                        src: 'https://yaramark.by/img/Самосвал-МАЗ-6501.jpg',
                        alt: 'Самосвал МАЗ 6501 20 тонн, с повышенными бортами',
                        ladle: '',
                        weight: '20 т',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Самосвалы',
                        count: 9,
                    },
                    {
                        name: 'Экскаватор-погрузчик Case 695R SR-4PS',
                        technicType: 'Экскаватор-погрузчик',
                        src: 'https://yaramark.by/img/Экскаватор-погрузчик-Case-695R-SR-4PS.jpg',
                        alt: 'Экскаватор-погрузчик Case 695R SR-4PS Равно колёсный, крабовый ход, челюстной ковш 1,3 м3',
                        ladle: '1,3 м<sup>3</sup>',
                        weight: '',
                        swampCaterpillar: '',
                        trackWidth: '',
                        bladeWidth: '',
                        diggingDepth: '',
                        type: 'Погрузки',
                        count: 1,
                    },
                ],
                currentCardArray: [],
            }
        },
        methods: {
            filterCategory(type) {
                this.getSelectedType(type);

                this.currentCardArray = type === 'Вся техника'?
                    this.cardArray :
                    this.cardArray.filter((card) => card.type === type);
            },
            ...mapActions({
                getSelectedType: 'getSelectedType',
            }),
        },
        mounted() {
            this.currentCardArray = this.cardArray;
        },
        computed: {
            ...mapState({
                selectedType: state => state.selectedType,
            })
        },
    }
</script>

<style lang="scss">
    .rent {
        max-width: 1280px;
        margin: 50px auto 130px;

        @media(max-width: 1340px) {
            margin: 50px 50px 130px;
        }

        &-card-list {
            display: grid;
            grid-template-columns: repeat(3, 384px);
            grid-gap: 24px;
            margin-top: 50px;

            @media(max-width: 1340px) {
                grid-template-columns: repeat(2, 384px);
                justify-content: center;
            }

            @media(max-width: 968px) {
                grid-template-columns: repeat(2, 320px);
            }

            @media(max-width: 768px) {
                grid-template-columns: 384px;
            }

            @media(max-width: 500px) {
                grid-template-columns: 320px;
            }
        }

        &-category-list {
            display: flex;
            grid-gap: 24px;
            flex-wrap: wrap;

            &__item {
                box-shadow: inset 0px 0px 19px rgba(0, 0, 0, 0.07);
                text-align: center;
                width: 180px;

                &__button {
                    padding: 20px 42px;
                    background-color: #F0EFEF;
                    width: 100%;

                    &--active {
                        background-color: #ffcb00;
                    }
                }
            }
        }
    }
</style>