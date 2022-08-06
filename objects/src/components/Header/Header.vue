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
                    <a class="header-top__contacts-link" href="tel:+375296810676">+375 29 681-06-76</a>
                    <a class="header-top__contacts-link" href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </p>
            </div>

            <Menu @openMobileMenu="openMobileMenu" />
        </section>  

        <nav class="header-navigation" :class="{'header-navigation--mobile': isMobile}">
            <Close v-show="isMobile" :stroke="isSubMenu ? 'black' : '#ffcb00'" @closeMobileMenu="closeMobileMenu" />
            <ul class="header-navigation__list">
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/">Главная</a>
                </li>
                <li class="header-navigation__list-item header-submenu">
                    <span class="header-navigation__list-item__link" :class="{'header-navigation__list-item__link--active': isSubMenu}" @click="visibleSubMenu">
                        Наши услуги

                        <SubmenuIcon :stroke="'#ffcb00'" />
                    </span>

                    <div class="header-navigation-submenu" :class="{'header-navigation-submenu--mobile': isSubMenu}">
                        <ul class="header-navigation-submenu-list">
                            <li class="header-navigation-submenu-list__item">
                                Генподряд
                            </li>
                            <li class="header-navigation-submenu-list__item">
                                Подрядчик по земляным работам
                            </li>
                            <li class="header-navigation-submenu-list__item">
                                Благоустройство
                            </li>
                            <li class="header-navigation-submenu-list__item">
                                Инженерные сети
                            </li>
                            <li class="header-navigation-submenu-list__item">
                                Подрядчик по укладке асфальта
                            </li>
                            <li class="header-navigation-submenu-list__item">
                                Ландшафтный подрядчик
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/equipment_rental">Аренда техники</a>
                </li>
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/objects">Объекты</a>
                </li>
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/technical_competence">Техкомпетенция</a>
                </li>
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/about_us">О нас</a>
                </li>
                <li class="header-navigation__list-item">
                    <a class="header-navigation__list-item__link" href="/contacts">Контакты</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        components: {
            CompanyName: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/CompanyName.vue"),
            Logo: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/Logo.vue"),
            Menu: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/Menu.vue"),
            Close: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/Close.vue"),
            SubmenuIcon: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/SubmenuIcon.vue"),
        },
        data() {
            return {
                isMobile: false,
                isSubMenu: false,
            }
        },
        methods: {
            openMobileMenu() {
                this.isMobile = true;
            },
            closeMobileMenu() {
                this.isMobile = false;
            },
            visibleSubMenu() {
                console.log(window);
                if(window.innerWidth < 1340) {
                    this.isSubMenu = !this.isSubMenu;

                    return ;
                }
                
                this.isSubMenu = false;
                this.closeMobileMenu();
            }
        }
    }
</script>

<style lang="scss">
    .header {
        position: sticky;
        top: 0;
        z-index: 100;

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

        &-navigation {
            background-color: #ffcb00;
            position: relative;
            transition: 0.5s linear;

            @media(max-width: 1340px) {
                opacity: 0;
                position: fixed;
                top: 0;
                right: -100%;
                height: 100%;
                width: 300px;
                padding: 90px 30px;
            }

            &--mobile {
                opacity: 1;
                right: 0;
                background-color: #fff;

                svg {
                    display: inline-block;
                }
            }

            &__list {
                max-width: 1280px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                @media(max-width: 1340px) {
                    flex-direction: column;
                }

                &-item {
                    padding: 20px 0;

                    @media(max-width: 1340px) {
                        flex-direction: column;
                        padding: 10px 0;
                    }

                    &__link {
                        font-weight: 400;
                        font-size: 22px;
                        line-height: 26px;
                        color: #1B1918;
                        cursor: pointer;

                        &--active {
                            color: #ffcb00;

                            svg {
                                transform: rotate(180deg);
                            }

                            path {
                                stroke: #ffcb00 !important;
                            }
                        }
                    }
                }

                .header-submenu:hover .header-navigation-submenu {
                    @media(min-width: 1340px) {
                        display: block;
                    }
                }
            }

            &-submenu {

                @media(min-width: 1340px) {
                    position: absolute;
                    top: 100%;
                    background-color: #fff;
                    width: 100%;
                    left: 0;
                    padding: 38px 0 52px;
                    display: none;
                    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
                }

                @media(max-width: 1340px) {
                    display: none;
                }

                &--mobile {
                    display: grid;
                }

                &-list {
                    font-size: 24px;
                    line-height: 34px;

                    @media(min-width: 1340px) {
                        max-width: 930px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr );
                        grid-template-rows: repeat(3, 1fr );
                        grid-gap: 35px 57px;
                        font-size: 16px;
                        line-height: 24px;
                    }

                    @media(max-width: 1340px) {
                        padding: 30px 9px;
                        display: grid;
                        grid-auto-flow: row;
                        grid-gap: 10px;
                    }
                }
            }
        }
    }
</style>