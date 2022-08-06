<!-- eslint-disable no-irregular-whitespace -->
<template>
    <section class="contacts">
        <div class="contacts-descrition contacts-descrition--bg">
            <h1 class="contacts-descrition__heading">ООО «ЯраМарк»</h1>

            <ul class="contacts-descrition-list contacts-descrition-list--bg">
                <li class="contacts-descrition-list__item">
                    <Location :fill="'#FFCB00'" />

                    <p>223053, Минский район, д. Боровляны, улица Березовая роща, 21</p>
                </li>

                <li class="contacts-descrition-list__item">
                    <Phone :fill="'#FFCB00'" />

                    <a href="tel:+375296810676">+375 29 681-06-76</a>
                </li>

                <li class="contacts-descrition-list__item">
                    <Email :fill="'#FFCB00'" />

                    <a href="mailto:yaramark@mail.ru">yaramark@mail.ru</a>
                </li>
            </ul>
        </div>

        <div class="contacts-map" style="position:relative;overflow:hidden;">
            <a href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">{{'Яндекс Карты'}}</a>
            <a href="https://yandex.by/maps/29630/minsk-district/house/Zk4YcABlTEYGQFtufXxxcHVlZA==/?ll=27.675531%2C54.001961&utm_medium=mapframe&utm_source=maps&z=16.42" style="color:#eee;font-size:12px;position:absolute;top:14px;">{{'Улица Берёзовая Роща, 21 — Яндекс Карты'}}</a>
            <iframe src="https://yandex.by/map-widget/v1/-/CCURAQVXDA" width="560" height="700" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            Location: () => import(/* webpackChunkName: "Contacts" */ "../assets/svg/Location.vue"),
            Phone: () => import(/* webpackChunkName: "Contacts" */ "../assets/svg/Phone.vue"),
            Email: () => import(/* webpackChunkName: "Contacts" */ "../assets/svg/Email.vue"),
        },
    }
</script>

<style lang="scss">
    .contacts {
        position: relative;
        
        * {
            width: 100%;
        }

        &-descrition {
            max-width: 1280px;
            margin: 0 auto;
            position: absolute;
            height: 100%;
            z-index: 2;
            width: 100%;
            padding: 70px;
            color: white;

            @media(max-width: 968px) {
                padding: 50px;
            }

            @media(max-width: 640px) {
                padding: 30px;
            }

            &--bg {
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-image: url('https://yaramark.by/img/contacts-mobile-bg.png');
                
                @media(min-width: 768px) {
                    background-image: url('https://yaramark.by/img/contacts-desctop-bg.png');
                    background-size: 70% 100%;
                }
            }

            &__heading {
                font-size: 40px;
                line-height: 56px;
            }
            
            &-list {
                display: grid;
                grid-gap: 50px;
                margin-top: 85px;

                &__item {
                    display: flex;
                    align-items: center;
                    max-width: 425px;
                    font-size: 22px;
                    line-height: 31px;

                    svg {
                        margin-right: 68px;
                        height: 60px;
                        width: 60px;
                        cursor: none;

                        @media(max-width: 1024px) {
                            margin-right: 30px;
                        }
                    }

                    a {
                        color: #FFCB00;
                    }
                }
            }
        }

        &-map {
            position: relative;
        }
    }

    canvas {
        height: 700px !important;
    }

    .footer-bg {
        margin-top: 0;
    }
</style>