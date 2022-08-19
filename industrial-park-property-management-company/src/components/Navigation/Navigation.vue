<template>
    <nav class="header-navigation" :class="{'header-navigation--mobile': isMobile}">
        <Close v-show="isMobile" :stroke="isSubMenu ? 'black' : '#ffcb00'" @closeMobileMenu="getIsMobileMenu(false)" />
        <ul class="header-navigation__list" :class="{'header-navigation__list--active': isMobile}">
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
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        components: {
            Close: () => import(/* webpackChunkName: "Uprooting" */ "../../assets/svg/Close.vue"),
            SubmenuIcon: () => import(/* webpackChunkName: "Uprooting" */ "../../assets/svg/SubmenuIcon.vue"),
        },
        data() {
            return {
                isSubMenu: false,
            }
        },
        methods: {
            visibleSubMenu() {
                if(window.innerWidth < 1340) {
                    this.isSubMenu = !this.isSubMenu;

                    return ;
                }
                
                this.isSubMenu = false;
                this.getIsMobileMenu(false);
            },
            ...mapActions({
                getIsMobileMenu: 'getIsMobileMenu',
            }),
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

        @media(max-width: 1340px) {
            position: sticky;
            top: 0;
            z-index: 100;
        }

        &-navigation {
            transition: 0.3s linear;

            @media(min-width: 1340px) {
                background-color: #ffcb00;
                transition: 0.5s linear;
                position: sticky;
                top: 0;
                z-index: 100;
            }

            @media(max-width: 1340px) {
                opacity: 0;
                position: fixed;
                top: 0;
                height: 100%;
                width: 100%;
                visibility: hidden;
            }

            &--mobile {
                opacity: 1;
                right: 0;
                background-color: rgba(0, 0, 0, 0.8);
                width: 100%;
                padding: 0;
                visibility: visible;
                z-index: 1000;

                svg {
                    display: inline-block;
                }
            }

            &__list {
                position: relative;
                max-width: 1280px;
                margin: 0 auto;
                transition: 0.3s linear;

                @media(min-width: 1340px) {
                    display: flex;
                    justify-content: space-between;
                }

                @media(max-width: 1340px) {
                    flex-direction: column;
                    max-width: 320px;
                    background-color: white;
                    height: 100%;
                    width: 100%;
                    right: -100%;
                    margin: 0 0 0 auto;
                    padding: 90px 30px;
                }

                &--active {
                    @media(max-width: 1340px) {
                        right: 0;
                    }
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

                        @media(max-width: 1024px) {
                            font-size: 18px;
                        }

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
                    }

                    @media(max-width: 1340px) {
                        padding: 30px 9px;
                        display: grid;
                        grid-auto-flow: row;
                        grid-gap: 10px;
                    }

                    @media(max-width: 1024px) {
                        font-size: 16px;
                    }
                }
            }
        }
    }
</style>