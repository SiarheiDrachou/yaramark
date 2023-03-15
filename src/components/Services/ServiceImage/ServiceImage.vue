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
    import ServiceImage1 from "../../../assets/svg/ServiceImage1.vue";
    import ServiceImage2 from "../../../assets/svg/ServiceImage2.vue";
    import ServiceImage3 from "../../../assets/svg/ServiceImage3.vue";
    import ServiceImage4 from "../../../assets/svg/ServiceImage4.vue";
    import ServiceImage5 from "../../../assets/svg/ServiceImage5.vue";
    import ServiceImage6 from "../../../assets/svg/ServiceImage6.vue";
    import ServiceImage7 from "../../../assets/svg/ServiceImage7.vue";
    import ServiceImage8 from "../../../assets/svg/ServiceImage8.vue";

    export default {
        props: ['itemId'],
        components: {
            ServiceImage1,
            ServiceImage2,
            ServiceImage3,
            ServiceImage4,
            ServiceImage5,
            ServiceImage6,
            ServiceImage7,
            ServiceImage8,
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