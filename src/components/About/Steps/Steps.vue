<template>
    <ul class="steps-list">
        <li class="steps-list__item">
            <Number1 />

            <div>
                <h3 class="steps-list__item__heading">Профессиональное оборудование</h3>

                <p class="steps-list__item__text">
                    В организации имеются парк собственной дорожно-строительной техники ведущих производителей
                    <span>
                        (Komatsu, Caterpillar, Case, Hitachi,
                        <br />
                        Bomag, SDLG, HYUNDAI, МАЗ, КАМАЗ,
                        <br />
                        AMKODOR, BOBCAT комплекс малой механизаций).
                    </span>
                </p>
            </div>
        </li>
        <li class="steps-list__item">
            <Number2 />

            <div>
                <h3 class="steps-list__item__heading">Опытные инженера</h3>

                <p class="steps-list__item__text">
                    Аттестованные специалисты с
                    опытом работы от 5 лет.
                </p>
            </div>
        </li>
        <li class="steps-list__item">
            <Number3 />

            <div>
                <h3 class="steps-list__item__heading">О компании в цифрах</h3>

                <p class="steps-list__item__text">
                    3 года на рынке.
                    Более 50 выполненных объектов и довольных клиентов.
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
    import Number1 from "../../../assets/svg/Number1.vue";
    import Number2 from "../../../assets/svg/Number2.vue";
    import Number3 from "../../../assets/svg/Number3.vue";

    export default {
        components: {
            Number1,
            Number2,
            Number3,
        },
    }
</script>

<style lang="scss">
    .steps-list {
        max-width: 1280px;
        margin: 0 auto 130px;
        display: grid;
        grid-template-columns: repeat(3, 384px);
        grid-gap: 24px;

        @media(max-width: 1340px) {
            grid-template-columns: 1fr;
            grid-gap: 80px;
        }

        @media(max-width: 968px) {
            margin: 0 auto 65px;
        }

        @media(max-width: 640px) {
            margin: 0 auto 30px;
        }

        &__item {

            @media(max-width: 1340px) and (min-width: 968px) {
                display: flex;
                align-items: center;
                padding: 0 25px;
            }

            div {

                @media(max-width: 1340px) {
                    max-width: 450px;
                }
            }

            &__heading {
                margin: 42px 0 19px;
                font-size: 30px;
                line-height: 42px;
                height: 84px;

                @media(max-width: 1340px) {
                    height: auto;
                    margin-top: 0;
                }

                @media(max-width: 968px) {
                    margin-top: 42px;
                }
            }

            &__text {
                font-size: 24px;
                line-height: 42px;
                max-width: 400px;
                
                @media(max-width: 768px) {
                    max-width: 450px;
                }

                br {

                    @media(max-width: 768px) {
                        display: none;
                    }
                }

                span {
                    display: block;
                    font-size: 18px;
                    line-height: 21px;
                }
            }
        }

        &__item:nth-child(even) {
            margin-left: auto;

            @media(max-width: 968px) {
                margin-left: 0;
            }
        }
    }
</style>