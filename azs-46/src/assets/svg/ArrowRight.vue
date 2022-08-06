<template>
    <svg @click="selectImage" width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 39L21 20.5L2 2" stroke="#FFCB00" stroke-width="3"/>
    </svg>
</template>

<script>
    export default {
        props: ['selectIndex'],
        methods: {
            selectImage() {
                this.$emit('selectImage', ++this.selectIndex)
            }
        }
    }
</script>

<style lang="scss" scoped>
    svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }
</style>