<template>
    <svg class="close" @click="closeMobileMenu" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5089 12.8422L27.1589 10.4922L20.0005 17.6505L12.8422 10.4922L10.4922 12.8422L17.6505 20.0005L10.4922 27.1589L12.8422 29.5089L20.0005 22.3505L27.1589 29.5089L29.5089 27.1589L22.3505 20.0005L29.5089 12.8422Z" :fill="fill"/>
    </svg>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        props: {
            fill: {
                default: '#FB0000'
            }
        },
        methods: {
            ...mapActions({
                getIsOpenPreview: 'getIsOpenPreview',
                getIsOpenRequest: 'getIsOpenRequest',
                getIsMobile: 'getIsMobile',
            }),
            closeMobileMenu() {
                this.getIsOpenPreview(false);
                this.getIsOpenRequest(false);
                this.getIsMobile(false);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
    }
</style>