<template>
    <section class="technical-competence">
        <div class="technical-competence-container">
            <h3 class="technical-competence-container__heading" :class="{'technical-competence-container__heading--active': isCertificates}" @click="isCertificates = !isCertificates">
                Сертификаты
                <SubmenuIcon />
            </h3>

            <ul class="technical-competence-container-list" v-show="isCertificates">
                <li class="technical-competence-container-list__item" v-for="image in certificates" :key="image.src" @click="openPreview(image)">
                    <img :src="image.src" :alt="image.alt" />
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
                    <img :src="image.src" :alt="image.alt" />
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
                    <img :src="image.src" :alt="image.alt" />
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
                    <img :src="image.src" :alt="image.alt" />
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
                        src: require('../assets/sertificats/certificates.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates1.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates2.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates3.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates4.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates5.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates6.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates7.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates8.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates9.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates10.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates11.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates12.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates13.jpg'),
                        alt: `Сертификат соответствия `
                    },
                    {
                        src: require('../assets/sertificats/certificates14.jpg'),
                        alt: `Сертификат соответствия `
                    },
                ],
                attestates: [
                    {
                        src: require('../assets/sertificats/attestate-of-conformity.jpg'),
                        alt: `Сертификат соответствия`
                    },
                    {
                        src: require('../assets/sertificats/attestate-of-conformity1.jpg'),
                        alt: `Сертификат соответствия`
                    },
                    {
                        src: require('../assets/sertificats/attestate-of-conformity2.jpg'),
                        alt: `Сертификат соответствия`
                    },  
                ],
                evidences: [
                    {
                        src: require('../assets/sertificats/evidence.jpg'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('../assets/sertificats/evidence1.jpg'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('../assets/sertificats/evidence2.jpg'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('../assets/sertificats/evidence3.jpg'),
                        alt: `Свидетельство о технической компетентности`
                    },
                    {
                        src: require('../assets/sertificats/evidence4.jpg'),
                        alt: `Свидетельство о технической компетентности`
                    },
                ],
                reviews: [
                    {
                        src: require('../assets/sertificats/review.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review1.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review2.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review3.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review4.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review5.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review6.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review7.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review8.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review9.jpg'),
                        alt: ``
                    },
                    {
                        src: require('../assets/sertificats/review10.jpg'),
                        alt: ``
                    },
                ],
                isCertificates: true,
                isAttestates: false,
                isEvidences: false,
                isReviews: false,
            }
        },
        components: {
            SubmenuIcon: () => import(/* webpackChunkName: "Home" */ "../assets/svg/SubmenuIcon.vue"),
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