<template>
    <section class="services">
        <h2 class="services__heading">
            Наши услуги
        </h2>

        <ul class="services-list">
            <li class="services-list-item" v-for="service in services" :key="service.heading">
                <ServiceImage :itemId="service.id"/>

                <figcaption v-text="service.heading"></figcaption>

                <p v-text="service.text"></p>
            </li>
        </ul>
    </section>
</template>

<script>
    import ServiceImage from "./ServiceImage/ServiceImage.vue";

    export default {
        components: {
            ServiceImage,
        },
        data() {
            return {
                services: [
                    {
                        id: 1,
                        heading: `
                            Благоустройство
                        `,
                        text: `
                            Выполнение работ любой сложности и объемов
                        `,
                    },
                    {
                        id: 2,
                        heading: `
                            Генподряд
                        `,
                        text: `
                            Ключевые профессиональные навыки высшего инженерного состава нашей организации
                        `,
                    },
                    {
                        id: 3,
                        heading: `
                            Инженерные сети
                        `,
                        text: `
                            Достаточная технологическая база и оснастка нашей техники, позволяют нам закрывать нулевой цикл 
                        `,
                    },
                    {
                        id: 4,
                        heading: `
                            Земляные работы
                        `,
                        text: `
                            Выполнение всего перечня работ нулевого цикла - избавит любого заказчика от головной боли
                        `,
                    },
                    {
                        id: 5,
                        heading: `
                            Укладка асфальта
                        `,
                        text: `
                            Наши грамотные и технически подкованные специалисты, достойно выполняют работы
                        `,
                    },
                    {
                        id: 6,
                        heading: `
                            Устройство газона
                        `,
                        text: `
                            Финальные очертания ландшафного парка возводят эстетику всприятия проекта
                        `,
                    },
                    {
                        id: 7,
                        heading: `
                            Ландшафтный подрядчик
                        `,
                        text: `
                            Настоящие инженерные решения в гармонии с настоящей природой
                        `,
                    },
                    {
                        id: 8,
                        heading: `
                            Разработка ландшафтного дизайна
                        `,
                        text: `
                            Ландшафный дизайн, это не просто картинка
                        `,
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
.services {
    max-width: 1280px;
    margin: 130px auto 0;

    @media(max-width: 1340px) {
        margin: 130px 50px 0;
    }

    @media(max-width: 968px) {
        margin: 65px 50px 0;
    }
    
    @media(max-width: 968px) {
        margin: 65px 30px;
    }

    &__heading {
        margin-bottom: 70px;
        text-align: center;
    }

    &-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 60px 24px;

        @media(max-width: 1340px) {
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
        }

        @media(max-width: 968px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media(max-width: 640px) {
            grid-template-columns: 1fr;
        }

        &-item {
            background-color: #000000;
            color: white;
            text-align: center;
            padding: 28px 15px 62px;
            cursor: pointer;

            figcaption {
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                margin: 20px 0 8px;
                height: 50px;
            }

            p {

            }
        }

        &-item:hover {
            background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            box-shadow: 0px 0px 30px rgba(255, 203, 0, 0.52);
            color: black;
        }
    }
}
</style>