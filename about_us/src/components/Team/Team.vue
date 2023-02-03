<template>
    <section class="team">
        <h2 class="team__heading">
            Наша команда
        </h2>

        <ul class="team-list">
            <li class="team-list__item team-list__item" v-for="team in teams" :key="team.name">
                <Person :person="team.person" />
                <p class="team-list__item__heading" v-text="team.name"></p>

                <p v-if="!team.tel" class="team-list__item__link"></p>
                <a v-else class="team-list__item__link" :href="'tel:' + team.tel" v-text="team.tel"></a>
                
                <Messagers :messagers="team.messagers" />

                <p class="team-list__item__text" v-text="team.position"></p>
            </li>
        </ul>
    </section>
</template>

<script>
    import Messagers from "../Messagers/Messagers.vue";
    import Person from "../../assets/svg/Person.vue";

    export default {
        components: {
            Person,
            Messagers,
        },
        data() {
            return {
                teams: [
                    {
                        id: 1,
                        position: `Управляющий`,
                        name: `Некрасов Александр Владимирович`,
                        tel: `+375(29)681-06-76`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@alex_nekrasov_1988'
                            },
                            {
                                type: 'viber',
                                number: '375296810676'
                            },
                            {
                                type: 'whatsapp',
                                number: '375296810676'
                            }
                        ],
                    },
                    {
                        id: 2,
                        position: `Главный инженер`,
                        name: `Иванов Алексей Валерьевич`,
                        tel: `+375(44)746-16-37`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@Benjamin_Franklin_usa'
                            },
                            {
                                type: 'viber',
                                number: '375447461637'
                            },
                            {
                                type: 'whatsapp',
                                number: '375447461637'
                            }
                        ],
                    },
                    {
                        id: 3,
                        position: `Заместитель главного инженера`,
                        name: `Данилевич Олег Олегович`,
                        tel: `+375(44)572-54-97`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@olegdanila'
                            },
                            {
                                type: 'viber',
                                number: '375445725497'
                            },
                            {
                                type: 'whatsapp',
                                number: '375445725497'
                            }
                        ],
                    },
                    {
                        id: 4,
                        position: `Начальник отдела снабжения`,
                        name: `Лешкевич Алексей Андреевич`,
                        tel: `+375(29)688-86-19`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@leshkevich_alexei'
                            },
                            {
                                type: 'viber',
                                number: '375296888619'
                            },
                            {
                                type: 'whatsapp',
                                number: '375296888619'
                            }
                        ],
                    },
                    {
                        id: 5,
                        position: `Начальник отдела ПТО`,
                        name: `Малова Елена Валерьевна`,
                        tel: `+375(44)719-76-11`,
                        person: "female",
                        messagers: [
                            {
                                type: 'tg',
                                number: ''
                            },
                            {
                                type: 'viber',
                                number: '375298447981'
                            },
                        ],
                    },
                    {
                        id: 6,
                        position: `Главный бухгалтер и начальник отдела кадров`,
                        name: `Челядинская Екатерина Александровна`,
                        tel: `+375(29)101-56-04`,
                        person: "female",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@cherkas1305'
                            },
                            {
                                type: 'viber',
                                number: '375291015604'
                            },
                        ],
                    },
                    {
                        id: 6,
                        position: `Инженер по охране труда`,
                        name: `Малков Александр Михайлович`,
                        tel: `+375(29)174-98-24`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: ''
                            },
                            {
                                type: 'viber',
                                number: '375291749824'
                            },
                        ],
                    },
                    {
                        id: 7,
                        position: `Экономист, инженер ПТО, специалист по договорам аренды`,
                        name: `Даревская Елизавета Владимировна`,
                        tel: '+375(33)334-40-82',
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@nek_eli'
                            },
                            {
                                type: 'viber',
                                number: '375333344082'
                            },
                        ],
                    },
                    {
                        id: 8,
                        position: `Производитель работ`,
                        name: `Грицкевич Андрей Петрович`,
                        tel: `+375(29)251-83-45`,
                        person: "male",
                        messagers: [
                            {
                                type: 'tg',
                                number: '@Hrytskevich_A'
                            },
                            {
                                type: 'viber',
                                number: ''
                            },
                        ],
                    },
                ],
            };
        },
    }
</script>

<style lang="scss">
    .team {
        max-width: 1280px;
        margin: 130px auto 0;

        @media(max-width: 1340px) {
            margin: 130px 50px 0;
        }

        &__heading {
            margin-bottom: 70px;
            text-align: center;
        }

        &-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 24px;

            @media(max-width: 1024px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media(max-width: 640px) {
                grid-template-columns: 1fr;
            }

            &__item {
                padding: 15px 0 70px;
                display: grid;
                grid-auto-flow: row;
                grid-gap: 15px;
                grid-template-rows: auto 1fr repeat(2, auto) 1fr;

                &__text {
                    font-size: 18px;
                    line-height: 24px;
                    justify-self: center;
                    text-align: center;
                }

                &__heading {
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                    justify-self: center;
                    text-align: center;
                }

                &__link {
                    font-size: 20px;
                    line-height: 24px;
                    color: black;
                    justify-self: center;
                    min-height: 24px;
                }

                &-messagers {
                    justify-self: center;
                    min-height: 50px;
                    
                    svg {
                        width: 50px;
                        height: 50px;
                    }
                }

                svg {
                    justify-self: center;
                }
            }
        }
    }
</style>