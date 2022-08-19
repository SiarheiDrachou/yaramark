<template>
    <footer class="footer footer-bg">
        <section class="footer-top">
            <h2 class="footer-top__heading">Оставьте заявку</h2>

            <Form />
        </section>
        

        <section class="footer-bottom footer-bottom--bg">
            <p class="footer-bottom__instagram">
                <span>Instagram </span>

                <a href="#">@yaramark</a>
            </p>

            <div class="footer-bottom__logo">
                <a href="/">
                    <Logo />
                </a>

                <span v-text="currentYear"></span>
            </div>

            <p class="footer-bottom__contacts">
                <a class="footer-bottom__contacts-link" href="tel:+375445725497">+375 44 572-54-97</a>
                <a class="footer-bottom__contacts-link" href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
            </p>
        </section>
    </footer>
</template>

<script>
    export default {
        components: {
            Logo: () => import(/* webpackChunkName: "Uprooting" */ "../../assets/svg/Logo.vue"),
            Form: () => import(/* webpackChunkName: "Uprooting" */ "../Form/Form.vue"),
        },
        computed: {
            currentYear() {
                let year = new Date().getFullYear();
                
                return `ООО«ЯраМарк» 2020-${year}`;
            }
        },
    }
</script>

<style lang="scss">
    .footer {
        margin-top: 130px;
        padding: 69px 0 0;

        @media(max-width: 968px) {
            margin-top: 65px;
        }

        @media(max-width: 640px) {
            margin-top: 30px;
            padding: 30px 0 0;
        }

        &-bg {
            background-image: url("https://yaramark.by/img/footer-bg.png");
            background-size: cover;
            background-repeat: no-repeat;
        }
        
        &-top {
            max-width: 1280px;
            margin: 0 auto;

            @media(max-width: 1340px) {
                margin: 0 50px;
                max-width: 1024px;
            }

            @media(max-width: 640px) {
                margin: 0 30px;
            }

            &__heading {
                color: #ffcb00;
                font-size: 42px;
                line-height: 42px;
                margin-bottom: 50px;

                @media(max-width: 500px) {
                    font-size: 20px;
                    line-height: 24px;
                }
            }
        }

        &-bottom {
            position: relative;
            max-width: 1280px;
            margin: 40px auto 0;
            padding: 50px 0 15px;
            display: grid;
            grid-template-columns: 100px 1fr 170px;
            color: #ffcb00;
            line-height: 28px;
            font-size: 20px;

            @media(max-width: 1340px) {
                max-width: 1024px;
                padding: 50px 50px 15px;
            }

            @media(max-width: 640px) {
                line-height: 18px;
                font-size: 13px;
                padding: 30px 30px 15px;
                grid-template-columns: 80px 1fr 110px;
            }

            @media(max-width: 400px) {
                line-height: 18px;
                font-size: 13px;
                padding: 15px;
            }

            &--bg::before {
                background-image: url("https://yaramark.by/img/footer-logo-bg.png");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: absolute;
                content: ' ';
                width: 100%;
                height: 100%;
            }

            &__instagram {
                display: grid;
                grid-template-rows: repeat(2, 28px);
                grid-gap: 2px;
                margin-top: 50px;
                position: relative;
                z-index: 2;

                @media(max-width: 500px) {
                    margin-top: 0;
                }
            }

            &__contacts {
                display: grid;
                grid-template-rows: repeat(2, 28px);
                grid-gap: 2px;
                margin-top: 50px;
                position: relative;
                z-index: 2;

                @media(max-width: 500px) {
                    margin-top: 0;
                }
            }

            &__logo {
                position: relative;
                display: grid;
                grid-template-rows: 1fr auto;
                grid-gap: 10px;
                text-align: center;
                z-index: 2;

                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                svg {
                    @media(max-width: 500px) {
                        width: 75px;
                        height: 75px;
                    }
                }
            }

            a {
                color: #ffcb00;
            }
        }
    }
</style>