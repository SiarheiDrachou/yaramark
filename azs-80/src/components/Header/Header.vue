<template>
    <header class="header">
        <section class="header-bg">
            <div class="header-top">
                <p class="header-top__company-name" :class="{'mobile': isMobile}">
                    <span>Строительная компания </span>

                    <CompanyName />
                </p>

                <a href="/">
                    <Logo />
                </a>

                <p class="header-top__contacts">
                    <a class="header-top__contacts-link" href="tel:+375445725497">+375 44 572-54-97</a>
                    <a class="header-top__contacts-link" href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </p>
            </div>

            <Menu />
        </section>  
    </header>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        components: {
            CompanyName: () => import(/* webpackChunkName: "AZS80" */ "../../assets/svg/CompanyName.vue"),
            Logo: () => import(/* webpackChunkName: "AZS80" */ "../../assets/svg/Logo.vue"),
            Menu: () => import(/* webpackChunkName: "AZS80" */ "../../assets/svg/Menu.vue"),
        },
        computed: {
            ...mapState({
                isMobile: state => state.isMobile,
            })
        },
    }
</script>

<style lang="scss">
    .header {
        position: relative;

        &-bg {
            background-image: url("https://yaramark.by/img/header-bg.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &-top {
            max-width: 1280px;
            margin: 0 auto;
            padding: 4px 0 27px;
            display: grid;
            grid-template-columns: 300px 1fr 220px;

            @media(max-width: 1340px) {
                padding: 4px 0 27px;
                margin: 0 75px;
            }

            @media(max-width: 968px) {
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
                margin: 0 50px;
            }

            @media(max-width: 640px) {
                margin: 0 30px;
            }

            .logo {

                @media(max-width: 968px) {
                    width: 62px;
                    height: 62px;
                }
            }

            &__company-name {
                display: grid;
                grid-template-rows: 34px 27px;
                grid-gap: 10px;
                padding-top: 23px;

                @media(max-width: 968px) {
                    display: none;
                }

                span {
                    font-size: 24px;
                    line-height: 26px;
                    color: #ffcb00;
                }

                svg {

                }
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &__contacts {
                text-align: right;
                display: grid;
                grid-template-rows: 34px 34px;
                grid-gap: 10px;
                padding-top: 23px;

                @media(max-width: 968px) {
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr;
                    text-align: center;
                }

                &-link {
                    font-size: 24px;
                    line-height: 26px;
                    color: #ffcb00;

                    @media(max-width: 640px) {
                        font-size: 15px;
                        line-height: 21px;
                    }
                }
            }
        }
    }
</style>