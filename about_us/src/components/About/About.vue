<template>
    <section class="about">
        <Steps />
        
        <Description />
    </section>
</template>

<script>
    import Steps from "./Steps/Steps.vue";
    import Description from "./Description/Description.vue";

    export default {
        components: {
            Steps,
            Description,
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