<template>
    <section class="reviews">
        <h2 class="reviews__heading">
            Отзывы
        </h2>

        <ul class="reviews-list">
            <li class="reviews-list__item" v-for="review in reviews" :key="review.name" @click="openPreview(review)">
                <img :src="review.src" :alt="review.alt">
            </li>
        </ul>

        <a class="reviews__link button--secondary" href="/technical_competence">Просмотреть все</a>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                reviews: [
                    {
                        id: 1,
                        src: require(`../../assets/sertificats/review.jpg`),
                        alt: `отзыв`,
                    },
                    {
                        id: 2,
                        src: require(`../../assets/sertificats/review1.jpg`),
                        alt: `отзыв`,
                    },
                    {
                        id: 3,
                        src: require(`../../assets/sertificats/review2.jpg`),
                        alt: `отзыв`,
                    },
                ],
            }
        },
        methods: {
            openPreview(review) {
                this.getIsOpenPreview();
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
    .reviews {
        max-width: 1280px;
        margin: 130px auto 0;

        @media(max-width: 1340px) {
            margin: 130px 50px 0;
        }

        @media(max-width: 969px) {
            margin: 65px 50px;
        }

        @media(max-width: 640px) {
            margin: 65px 30px;
        }

        &__heading {
            margin-bottom: 70px;

            @media(max-width: 640px) {
                margin-bottom: 40px;
            }
        }
        
        &-list {
            display: grid;
            grid-template-columns: minmax(auto, 384px) minmax(auto, 384px) minmax(auto, 384px);
            grid-gap: 24px;

            @media(max-width: 1280px) {
                grid-template-columns: minmax(auto, 384px) minmax(auto, 384px);
                justify-content: center;
            }

            @media(max-width: 864px) {
                grid-template-columns: 384px;
            }

            @media(max-width: 640px) {
                grid-template-columns: 1fr;
            }

            &__item {
                position: relative;
                cursor: pointer;

                img {
                    max-width: 384px;

                    @media(max-width: 640px) {
                        max-width: 100%;
                    }
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

        &__link {
            margin: 60px auto 0;
            padding: 14px 100px;
            display: block;
            width: 350px;

            @media(max-width: 500px) {
                padding: 14px 75px;
                width: 300px;
            }
        }
    }
</style>