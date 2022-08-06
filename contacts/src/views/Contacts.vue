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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.059553079556!2d27.6753051!3d54.001718499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc85c15a3626b%3A0xcb86bd0eb9c4017f!2sUlitsa%20Berozovaya%20Roshcha%2021%2C%20Barauliany%20223053!5e0!3m2!1sen!2sby!4v1659353118768!5m2!1sen!2sby" width="auto" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            height: 100%;
            width: 100%;
            max-width: 50%;
            padding: 70px;

            @media(max-width: 1960px) {
                max-width: 1280px;
                margin: 0 auto;
            }

            @media(max-width: 968px) {
                padding: 50px;
            }

            @media(min-width: 1280px) {
                position: absolute;
                z-index: 2;
                color: white;
            }

            @media(max-width: 640px) {
                padding: 30px;
            }

            @media(max-width: 500px) {
                position: absolute;
                z-index: 2;
                color: white;
            }

            &--bg {
                background-repeat: no-repeat;
                background-size: 100% 100%;
                
                @media(min-width: 1280px) {
                    background-image: url('https://yaramark.by/img/contacts-desctop-bg.png');
                }

                @media(max-width: 500px) {
                    max-height: 900px;
                    background-image: url('https://yaramark.by/img/contacts-mobile-bg.png');
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
                    color: white;

                    @media(max-width: 1280px) and (min-width: 500px) {
                        color: black;
                    }

                    svg {
                        margin-right: 68px;
                        height: 60px;
                        width: 60px;

                        @media(max-width: 1024px) {
                            margin-right: 30px;
                        }
                    }

                    a {
                        color: white;

                        @media(max-width: 1280px) and (min-width: 500px) {
                            color: black;
                        }
                    }
                }
            }
        }

        &-map {
            position: relative;

            iframe {

                @media(max-width: 500px) {
                    min-height: 1200px;
                }
            }
        }
    }

    .footer-bg {
        margin-top: 0 !important;
    }
</style>