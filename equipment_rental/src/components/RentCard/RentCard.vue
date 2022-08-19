<template>
    <li class="rent-card-list__item">
        <figure>
            <picture>
                <source :srcset="card.WEBPSrc" type="image/webp">
                <img :src="card.src" :alt="card.alt">
            </picture>

            <figcaption v-text="card.name"></figcaption>
        </figure>

        <div class="card-container">
            <p v-if="card.type" v-text="card.type" class="card-type"></p>

            <p v-if="card.ladle" class="card-description">
                <span>Ковш</span>
                <span v-html="card.ladle"></span>
            </p>

            <p v-if="card.weight" class="card-description">
                <span>Масса</span>
                <span v-text="card.weight"></span>
            </p>

            <p v-if="card.swampCaterpillar" class="card-description">
                <span>Болотная гусеница</span>
                <span v-text="card.swampCaterpillar"></span>
            </p>

            <p v-if="card.trackWidth" class="card-description">
                <span>Ширина трака</span>
                <span v-text="card.trackWidth"></span>
            </p>

            <p v-if="card.bladeWidth" class="card-description">
                <span>Ширина отвала</span>
                <span v-text="card.bladeWidth"></span>
            </p>
            <p v-if="card.diggingDepth" class="card-description">
                <span>Глубина копания</span>
                <span v-text="card.diggingDepth"></span>
            </p>
            <p v-if="card.count" class="card-description">
                <span>Количество</span>
                <span v-text="card.count"></span>
            </p>
        </div>

        <button class="button--secondary" @click="getIsOpenRequest(true)">Заказать</button>
    </li>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['card'],
        methods: {
            ...mapActions({
                getIsOpenRequest: 'getIsOpenRequest',
            }),
        }
    }
</script>

<style lang="scss">
    .rent-card-list__item {
        padding: 15px 20px;
        box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25);

        figure {
            
            img {
                max-width: 100%;
                width: 341px;
                height: 211px;
            }

            figcaption {
                font-weight: 500;
                font-size: 17px;
                line-height: 28px;

                @media(max-width: 968px) {
                    height: 56px;
                }
            }
        }

        .card-container {
            height: 181px;
        }

        .card-type {
            font-size: 16px;
            line-height: 22px;
            color: #6F6F6F;
            margin: 2px 0 8px;
            height: 22px;
        }

        .card-description {
            font-size: 18px;
            line-height: 25px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
        }

        button {
            width: 100%;
            margin-top: 15px;
            padding: 14px;
        }
    }
</style>