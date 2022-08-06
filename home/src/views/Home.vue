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
    export default {
        components: {
            Preview: () => import(/* webpackChunkName: "Home" */ "../components/Preview/Preview.vue"),
            About: () => import(/* webpackChunkName: "Home" */ "../components/About/About.vue"),
            Services: () => import(/* webpackChunkName: "Home" */ "../components/Services/Services.vue"),
            CompanyObjects: () => import(/* webpackChunkName: "Home" */ "../components/CompanyObjects/CompanyObjects.vue"),
            Reviews: () => import(/* webpackChunkName: "Home" */ "../components/Reviews/Reviews.vue"),
        },
    }
</script>
