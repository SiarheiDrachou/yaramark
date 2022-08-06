<template>
    <section class="about">
        <Steps />
        
        <Description />
    </section>
</template>

<script>
    export default {
        components: {
            Steps: () => import(/* webpackChunkName: "Home" */ "./Steps/Steps.vue"),
            Description: () => import(/* webpackChunkName: "Home" */ "./Description/Description.vue"),
        },
    }
</script>

<style lang="scss">
    .about {
        padding: 120px 0;
        max-width: 1280px;
        margin: 0 auto;
        
        @media(max-width: 1340px) {
            padding: 130px 50px;
        }

        @media(max-width: 1340px) {
            padding: 65px 50px;
        }

        @media(max-width: 640px) {
            margin: 40px 30px;
            padding: 0;
        }
    }
</style>