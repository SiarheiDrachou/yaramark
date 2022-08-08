<template>
    <div id="app" data-server-rendered="true">
        <Header />

        <Navigation />

        <PreviewModal v-if="isOpenPreview" />

        <main class="main">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        components: {
            Header: () => import(/* webpackChunkName: "Home" */ "./components/Header/Header.vue"),
            Footer: () => import(/* webpackChunkName: "Home" */ "./components/Footer/Footer.vue"),
            PreviewModal: () => import(/* webpackChunkName: "Home" */ "./components/PreviewModal/PreviewModal.vue"),
            Navigation: () => import(/* webpackChunkName: "Home" */ "./components/Navigation/Navigation.vue"),
        },
        computed: {
            ...mapState({
                isOpenPreview: state => state.isOpenPreview,
            })
        },
    }
</script>

<style lang="scss">
    @import url('./assets/animations.scss');

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto';
    }

    // @font-face {
    //     font-family: 'Raleway Medium';
    //     src: 
    //         url('./assets/font/Raleway-Medium.ttf') format('truetype');
    //     font-weight: 500;
    //     font-style: normal;
    //     font-display: swap;
    // }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-width: 360px;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    ul,
    ol,
    hr,
    label,
    div,
    fieldset,
    figure {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
    }

    h2 {
        font-size: 40px;
        line-height: 56px;
    }

    a,
    button,
    select,
    input,
    svg {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        border: none;
    }

    input,
    textarea {
        color: #878787;
        font-size: 22px;
        line-height: 26px;
        padding: 17px 29px;
        width: 100%;
        border: none !important;
        outline: none !important;
        max-width: 100%;
        border-radius: 0;
    }

    select {
        border: none !important;
        outline: none !important;
        background-color: transparent;
        max-width: 100%;
    }

    ul {
        list-style-type: none;
    }

    a:hover {
        text-decoration: none;
    }

    picture {

        img,
        source {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
        }
    }

    #app {
        width: 100%;
        min-width: 320px;
    }

    .button {

        &--primary {
            background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            font-size: 18px;
            line-height: 21px;
            padding: 21px 50px;
        }

        &--secondary {
            border: 1px solid#FFCB00;
            background-color: transparent;
            color: black;

            &:hover {
                background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            }
        }
    }
</style>