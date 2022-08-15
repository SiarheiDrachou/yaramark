<template>
    <section class="request-modal" @click="getIsOpenRequest(false)">
        <div class="request-modal-container">
            <Close />
            
            <h3 class="request-modal-container__heading">Аренда техники</h3>

            <p class="request-modal-container__text">
                Связаться с главным механиком <strong>Алексеем</strong> вы можете по номеру телефона:  <a href="tel:+375296888619">+375(29)688-86-19</a> 
            </p>

            <span class="request-modal-container__text span">или через</span>

            <a href="tel:375296888619" class="request-modal-container__button phone">
                <PhoneLogo />

                По номеру телефона
            </a>

            <a href="https://wa.me/375296888619" class="request-modal-container__button watsapp">
                <WhatsappLogo />

                Перейти в WhatsApp 
            </a>
            <a :href="viberLink" class="request-modal-container__button viber">
                <ViberLogo />

                Перейти в Viber
            </a>
            <a href="https://telegram.im/375296888619" class="request-modal-container__button telegramm">
                <TelegramLogo />

                Перейти в Телеграм
            </a>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        components: {
            Close: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/Close.vue"),
            WhatsappLogo: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/WhatsappLogo.vue"),
            ViberLogo: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/ViberLogo.vue"),
            TelegramLogo: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/TelegramLogo.vue"),
            PhoneLogo: () => import(/* webpackChunkName: "Home" */ "../../assets/svg/PhoneLogo.vue"),
        },
        methods: {
            checkDevice() {
                let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;

                let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
                
                if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
                   return 'iOS';
                } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
                    return 'Android';
                } else {
                    return 'Desktop';
                }
            },
            ...mapActions({
                getIsOpenRequest: 'getIsOpenRequest',
            }),
        },
        computed: {
            viberLink() {
                return this.checkDevice() === 'iOS' || this.checkDevice() === 'Android' ? 'https://msng.link/o/?375296888619=vi' : 'viber://chat?number=%2B375296888619'
            },
        }
    }
</script>

<style lang="scss" scoped>
    .request-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 101;

        &-container {
            position: relative;
            max-width: 754px;
            width: 95%;
            margin: 0 auto;
            padding: 40px 88px;
            background-color: #fff;

            @media(max-width: 768px) {
                padding: 20px;
            }

            &__heading {
                font-size: 30px;
                line-height: 43px;
            }

            &__text {
                font-size: 22px;
                line-height: 31px;
                margin: 40px 0;

                a {
                    color: black;
                    font-weight: 600;
                }
            }

            .span {
                margin: 0 0 30px;
                display: block;
                text-align: center;
                font-size: 16px;
                line-height: 23px;
            }

            &__button {
                color: white;
                font-size: 16px;
                line-height: 23px;
                padding: 10px 50px;
                display: flex;
                align-items: center;
                margin: 15px auto;
                max-width: 312px;

                svg {
                    margin-right: 15px;
                }
            }

            .phone {
                background: linear-gradient(180deg, #9E9999 0%, #6A6969 100%);
            }
            .watsapp {
                background: linear-gradient(180deg, #49C858 0%, #21B032 100%);
            }
            .viber {
                background: linear-gradient(180deg, #684EB2 0%, #533F8B 100%);
            }
            .telegramm {
                background: linear-gradient(180deg, #2AABEE 0%, #229ED9 100%);
            }
        }
    }
</style>