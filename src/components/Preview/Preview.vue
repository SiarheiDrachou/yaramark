<template>
    <section class="preview">
        <div class="preview-container">
            <h1 class="preview__heading">
                Строительная компания
                <span>ЯраМарк</span>
            </h1>

            <p class="preview__text">
                <span>Качество, Надежность и Доверие</span>
                <br />
                — это основные критерии, на которых
                <br />
                построены основные принципы работы
                <br />
                строительной компании
                <span>ООО «ЯраМарка» </span>
            </p>

            <a class="button--primary" href="#footer">
                Заказать звонок
            </a>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .preview {
        background-image: url("https://yaramark.by/img/preview-bg.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        padding: 132px 0 176px;

        @media(max-width: 968px) {
            padding: 65px 0;
        }

        @media(max-width: 640px) {
            padding: 30px 0;
        }

        &-container {
            max-width: 1280px;
            margin: 0 auto;

            @media(max-width: 1340px) {
                margin: 0 50px;
            }
            
            @media(max-width: 640px) {
                margin: 0 30px;
            }

            a {
                color: black;
            }
        }

        &__heading {
            font-size: 50px;
            line-height: 70px;
            color: white;
            
            @media(max-width: 640px) {
                font-size: 30px;
                line-height: 42px;
            }

            span {
                color: #ffcb00;
                display: block;
            }
        }

        &__text {
            margin: 40px 0 176px;
            font-size: 24px;
            line-height: 34px;
            color: white;

            @media(max-width: 640px) {
                font-size: 16px;
                line-height: 24px;
                margin: 40px 0 150px;
            }

            span {
                color: #ffcb00;
            }
        }
    }
</style>