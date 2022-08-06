<template>
    <svg @click="openMobileMenu" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 27H30M6 9H30H6ZM6 18H18H6Z" stroke="#FFCB00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
    export default {
        methods: {
            openMobileMenu() {
                this.$emit('openMobileMenu');
            }
        }
    }
</script>

<style lang="scss" scoped>
    svg {
        display: none;
        position: absolute;
        right: 15px;

        @media(max-width: 1340px) and (min-width: 968px) {
            top: 50%;
            transform: translateY(-50%);
            display: block;
        }

        @media(max-width: 968px) {
            top: 15px;
            display: block;
        }
    }
</style>