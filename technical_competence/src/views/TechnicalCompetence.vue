<template>
    <section class="technical-competence">
        <div class="technical-competence-container">
            <h3 class="technical-competence-container__heading" :class="{'technical-competence-container__heading--active': isCertificates}" @click="isCertificates = !isCertificates">
                Сертификаты
                <SubmenuIcon />
            </h3>

            <ul class="technical-competence-container-list" v-show="isCertificates">
                <li class="technical-competence-container-list__item" v-for="image in certificates" :key="image.src" @click="openPreview(image)">
                    <picture>
                        <source
                            v-if="image.WEBPsrc"
                            :srcset="image.WEBPsrc"
                            :alt="image.alt"
                            type="image/webp"
                        />
                        <img :src="image.src" :alt="image.alt" />
                    </picture>
                </li>
            </ul>
        </div>

        <div class="technical-competence-container">
            <h3 class="technical-competence-container__heading" :class="{'technical-competence-container__heading--active': isAttestates}" @click="isAttestates = !isAttestates">
                Аттестаты
                <SubmenuIcon />
            </h3>

            <ul class="technical-competence-container-list" v-show="isAttestates">
                <li class="technical-competence-container-list__item" v-for="image in attestates" :key="image.src" @click="openPreview(image)">
                    <picture>
                        <source
                            v-if="image.WEBPsrc"
                            :srcset="image.WEBPsrc"
                            :alt="image.alt"
                            type="image/webp"
                        />
                        <img :src="image.src" :alt="image.alt" />
                    </picture>
                </li>
            </ul>
        </div>

        <div class="technical-competence-container">
            <h3 class="technical-competence-container__heading" :class="{'technical-competence-container__heading--active': isEvidences}" @click="isEvidences = !isEvidences">
                Свидетельства
                <SubmenuIcon />
            </h3>

            <ul class="technical-competence-container-list" v-show="isEvidences">
                <li class="technical-competence-container-list__item" v-for="image in evidences" :key="image.src" @click="openPreview(image)">
                    <picture>
                        <source
                            v-if="image.WEBPsrc"
                            :srcset="image.WEBPsrc"
                            :alt="image.alt"
                            type="image/webp"
                        />
                        <img :src="image.src" :alt="image.alt" />
                    </picture>
                </li>
            </ul>
        </div>

        <div class="technical-competence-container">
            <h3 class="technical-competence-container__heading" :class="{'technical-competence-container__heading--active': isReviews}" @click="isReviews = !isReviews">
                Отзывы
                <SubmenuIcon />
            </h3>

            <ul class="technical-competence-container-list" v-show="isReviews">
                <li class="technical-competence-container-list__item" v-for="image in reviews" :key="image.src" @click="openPreview(image)">
                    <picture>
                        <source
                            v-if="image.WEBPsrc"
                            :srcset="image.WEBPsrc"
                            :alt="image.alt"
                            type="image/webp"
                        />
                        <img :src="image.src" :alt="image.alt" />
                    </picture>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                certificates: [
                    {
                        src: require('https://yaramark.by/img/certificates.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates1.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates1.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates2.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates2.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates3.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates3.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates4.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates4.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates5.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates5.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates6.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates6.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates7.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates7.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates8.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates8.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates9.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates9.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates10.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates10.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates11.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates11.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates12.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates12.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates13.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates13.webp'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('https://yaramark.by/img/certificates14.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/certificates14.webp'),
                        alt: `Сертификат соответствия `
                    },
                ],
                attestates: [
                    {
                        src: require('https://yaramark.by/img/attestate-of-conformity.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/attestate-of-conformity.webp'),
                        alt: `Сертификат соответствия`
                    },
                    {
                        src: require('https://yaramark.by/img/attestate-of-conformity1.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/attestate-of-conformity1.webp'),
                        alt: `Сертификат соответствия`
                    },
                    {
                        src: require('https://yaramark.by/img/attestate-of-conformity2.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/attestate-of-conformity2.webp'),
                        alt: `Сертификат соответствия`
                    },  
                ],
                evidences: [
                    {
                        src: require('https://yaramark.by/img/evidence.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/evidence.webp'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('https://yaramark.by/img/evidence1.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/evidence1.webp'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('https://yaramark.by/img/evidence2.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/evidence2.webp'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('https://yaramark.by/img/evidence3.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/evidence3.webp'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('https://yaramark.by/img/evidence4.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/evidence4.webp'),
                        alt: `Свидетельство о технической компетентности`
                    },
                ],
                reviews: [
                    {
                        src: require('https://yaramark.by/img/review.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review1.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review1.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review2.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review2.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review3.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review3.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review4.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review4.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review5.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review5.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review6.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review6.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review7.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review7.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review8.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review8.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review9.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review9.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                    {
                        src: require('https://yaramark.by/img/review10.jpg'),
                        WEBPsrc: require('https://yaramark.by/img/review10.webp'),
                        alt: `Отзыв о проделанной работе`
                    },
                ],
                isCertificates: true,
                isAttestates: false,
                isEvidences: false,
                isReviews: false,
            }
        },
        components: {
            SubmenuIcon: () => import(/* webpackChunkName: "TechnicalCompetence" */ "../assets/svg/SubmenuIcon.vue"),
        },
        methods: {
            openPreview(review) {
                this.getIsOpenPreview(true);
                this.getPreviewParams(review);
            },
            ...mapActions({
                getIsOpenPreview: 'getIsOpenPreview',
                getPreviewParams: 'getPreviewParams',
            }),
        }
    }
</script>

<style lang="scss">
    .technical-competence {
        padding: 40px 0 130px;
        max-width: 1280px;
        margin: 0 auto;

        @media(max-width: 1340px) {
            margin: 0 50px;
        }

        &-container {

            &__heading {
                font-size: 30px;
                line-height: 42px;
                margin-bottom: 30px;
                cursor: pointer;
                display: flex;
                align-items: center;

                &--active {

                    svg {
                        transform: rotate(180deg);
                    }
                }

                svg {
                    margin-left: 25px;
                }
            }

            &-list {
                display: grid;
                grid-template-columns: repeat(4, 282px);
                grid-gap: 24px;
                margin-bottom: 50px;

                @media(max-width: 1340px) {
                    grid-template-columns: repeat(3, 282px);
                    justify-content: center;
                }

                @media(max-width: 1024px) {
                    grid-template-columns: repeat(2, 282px);
                }

                @media(max-width: 640px) {
                    grid-template-columns: 282px;
                }

                &__item {
                    position: relative;
                    cursor: pointer;

                    img {
                        max-width: 100%;
                    }
                }

                &__item::before {
                    position: absolute;
                    content: ' ';
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, rgba(255, 203, 0, 0.7), rgba(255, 203, 0, 0.7));
                    display: none;
                }

                &__item::after {
                    position: absolute;
                    content: 'Просмотреть';
                    width: 100%;
                    height: 100%;
                    top: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    line-height: 45px;
                    display: none;
                }
                
                &__item:hover::before,
                &__item:hover::after {
                    display: flex;
                }
            }
        }
    }
</style>