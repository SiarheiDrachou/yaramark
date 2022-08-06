<template>
    <article class="description">
        <h2 class="description__heading">
            О нас
        </h2>

        <div class="description-container">
            <p class="description-container__text">
                Строительная компания ООО «ЯраМарк» основана
                <br />
                командой опытных специалистов - профессионалов своего
                <br />
                дела. 
            </p>

            <p class="description-container__text">
                Стратегия строительной компании ООО «ЯраМарк» — это
                <br />
                постоянное развитие, повышение конкурентоспособности
                <br />
                за счёт качество и надёжности, эффективность бизнеса в
                <br />
                строительном сегменте рынка. 
            </p>

            <p class="description-container__text">
                Благодаря высокому профессиональному уровню управления
                <br />
                строительством, применению современных строительных
                <br />
                решений, новейших производственных технологий,
                <br />
                использованию первоклассного штата сотрудников,
                <br />
                выполнение всех видов работ производится в запланированные
                <br />
                сроки при оптимальной стоимости строительства. 
            </p>
        </div>
    </article>
</template>

<script>
    export default {
        components: {
        },
    }
</script>

<style lang="scss">
    .description {
        max-width: 1280px;
        margin: 0 auto;

        @media(min-width: 1280px) {
            background-image: url("https://yaramark.by/img/about-bg.png");
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
        }

        &__heading {
            margin-bottom: 60px;

            @media(min-width: 640px) {
                margin-bottom: 40px;
            }
        }

        &-container {

            &__text {
                margin: 10px 0;
                font-size: 24px;
                line-height: 34px;
            }
        }
    }
</style>