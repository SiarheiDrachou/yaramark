<template>
    <section class="team">
        <h2 class="team__heading">
            Наша команда
        </h2>

        <ul class="team-list">
            <li class="team-list__item team-list__item" v-for="team in teams" :key="team.name">
                <Person :person="team.person" />
                <p class="team-list__item__heading" v-text="team.name"></p>

                <a v-if="team.tel" class="team-list__item__link" :href="'tel:' + team.tel" v-text="team.tel"></a>
                
                <p class="team-list__item__text" v-text="team.position"></p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        components: {
            Person: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/Person.vue"),
        },
        data() {
            return {
                teams: [
                    {
                        id: 1,
                        position: `Начальник отдела ПТО`,
                        name: `Некрасов Александр Владимирович`,
                        tel: `+375(29)138-40-70`,
                        person: "male",
                    },
                    {
                        id: 2,
                        position: `Главный инженер`,
                        name: `Данилевич Олег Олегович`,
                        tel: `+375(44)572-54-97`,
                        person: "male",
                    },
                    {
                        id: 3,
                        position: `Заместитель главного инженера`,
                        name: `Иванов Алексей Валерьевич`,
                        tel: `+375(44)746-16-37`,
                        person: "male",
                    },
                    {
                        id: 4,
                        position: `Начальник отдела снабжения`,
                        name: `Лешкевич Алексей Андреевич`,
                        tel: `+375(29)688-86-19`,
                        person: "male",
                    },
                    {
                        id: 5,
                        position: `Начальник отдела ПТО`,
                        name: `Малова Елена Валерьевна`,
                        tel: `+375(29)844-79-81`,
                        person: "female",
                    },
                    {
                        id: 6,
                        position: `Главный бухгалтер и начальник отдела кадров`,
                        name: `Челядинская Екатерина Александровна`,
                        tel: `+375(29)101-56-04`,
                        person: "female",
                    },
                    {
                        id: 6,
                        position: `Инженер по охране труда`,
                        name: `Малков Александр Михайлович`,
                        tel: `+375(29)174-98-24`,
                        person: "male",
                    },
                    {
                        id: 7,
                        position: `Производитель работ`,
                        name: `Буйневич Сергей Иванович`,
                        tel: null,
                        person: "male",
                    },
                    {
                        id: 8,
                        position: `Производитель работ`,
                        name: `Грицкевич Андрей Петрович`,
                        tel: null,
                        person: "male",
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
                text-align: center;

                &__text {
                    font-size: 18px;
                    line-height: 24px;
                    max-width: 200px;
                    margin: 15px auto 0;
                }

                &__heading {
                    margin: 20px 0;
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                }

                &__link {
                    font-size: 20px;
                    line-height: 24px;
                    color: black;
                }
            }
        }
    }
</style>