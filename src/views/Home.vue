<template>
    <div>
        <Preview />

        <About />

        <Services />

        <CompanyObjects />

        <Reviews />
    </div>
</template>

<script>
    import Preview from "../components/Preview/Preview.vue";
    import About from "../components/About/About.vue";
    import Services from "../components/Services/Services.vue";
    import CompanyObjects from "../components/CompanyObjects/CompanyObjects.vue";
    import Reviews from "../components/Reviews/Reviews.vue";

    export default {
        components: {
            Preview,
            About,
            Services,
            CompanyObjects,
            Reviews,
        },
    }
</script>
