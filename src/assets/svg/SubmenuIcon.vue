<template>
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6.5 6.5L12 1" :stroke="stroke" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
</template>

<script>
    export default {
        props: {
            stroke: {
                default: 'black',
            }
        }
    }
</script>

<style scoped>
    path {
        display: inline-block;
        position: relative;
        z-index: 2;
        stroke: black;
    }

    svg {
        transition: 0.5s linear;
    }
</style>