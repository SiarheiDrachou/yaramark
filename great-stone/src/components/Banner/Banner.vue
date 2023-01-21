<template>
    <section class="banner banner--bg" :style="{backgroundImage: `url(${bg})`}">
        <div class="banner-container">
            <h2 class="banner-container__heading" v-text="heading"></h2>

            <p class="banner-container__text" v-text="text"></p>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['bg', 'heading', 'text'],
    }
</script>

<style lang="scss">
    .banner {
        padding: 130px 15px;

        @media(max-width: 1340px) {
            padding: 65px 15px;
        }

        @media(max-width: 500px) {
            height: 600px;
        }

        &--bg {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &-container {
            max-width: 1280px;
            margin: 0 auto;
            text-align: center;
            color: white;

            &__heading {
                margin-bottom: 50px;
                font-size: 48px;
                line-height: 56px;

                @media(max-width: 768px) {
                    font-size: 30px;
                    line-height: 36px;
                    margin-bottom: 20px;
                }
            }

            &__text {
                max-width: 930px;
                margin: 0 auto;
                font-size: 30px;
                line-height: 42px;

                @media(max-width: 768px) {
                    font-size: 16px;
                    line-height: 23px;
                }
            }
        }
    }
</style>