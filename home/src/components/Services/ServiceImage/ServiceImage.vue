<template>
    <div class="service-image">
        <ServiceImage1 v-if="itemId === 1" />
        <ServiceImage2 v-else-if="itemId === 2" />
        <ServiceImage3 v-else-if="itemId === 3" />
        <ServiceImage4 v-else-if="itemId === 4" />
        <ServiceImage5 v-else-if="itemId === 5" />
        <ServiceImage6 v-else-if="itemId === 6" />
        <ServiceImage7 v-else-if="itemId === 7" />
        <ServiceImage8 v-else />
    </div>
</template>

<script>
    export default {
        props: ['itemId'],
        components: {
            ServiceImage1: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage1.vue"),
            ServiceImage2: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage2.vue"),
            ServiceImage3: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage3.vue"),
            ServiceImage4: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage4.vue"),
            ServiceImage5: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage5.vue"),
            ServiceImage6: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage6.vue"),
            ServiceImage7: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage7.vue"),
            ServiceImage8: () => import(/* webpackChunkName: "Home" */ "../../../assets/svg/ServiceImage8.vue"),
        },
    }
</script>

<style lang="scss">
    .services-list-item:hover {

        .service-image {
            background-color: #000000;

            svg,
            path {
                fill: #FFCB00;
            }
        }
    }

    .service-image {
        background-color: #FFCB00;
        border-radius: 50%;
        width: 78px;
        height: 78px;
        margin: 0 auto;

        svg {
            margin: 13px 12px;
        }
    }
</style>