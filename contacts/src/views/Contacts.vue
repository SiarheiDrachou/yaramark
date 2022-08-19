<!-- eslint-disable no-irregular-whitespace -->
<template>
    <section class="contacts">
        <div class="contacts-descrition">
            <h1 class="contacts-descrition__heading">ООО «ЯраМарк»</h1>

            <ul class="contacts-descrition-list contacts-descrition-list--bg">
                <li class="contacts-descrition-list__item">
                    <Location :fill="'#FFCB00'" />

                    <p>223053, Минский район, д. Боровляны, улица Березовая роща, 21</p>
                </li>

                <li class="contacts-descrition-list__item">
                    <Phone :fill="'#FFCB00'" />

                    <a href="tel:+375445725497">+375 44 572-54-97</a>
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
        min-height: 100%;
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: auto 1fr;

        * {
            width: 100%;
        }

        &-descrition {
            width: 100%;
            padding: 70px;
            background-color: black;
            color: white;

            @media(max-width: 968px) {
                padding: 50px;
            }

            @media(max-width: 640px) {
                padding: 30px;
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
                    }
                }
            }
        }

        &-map {

            iframe {
                min-height: 100%;

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