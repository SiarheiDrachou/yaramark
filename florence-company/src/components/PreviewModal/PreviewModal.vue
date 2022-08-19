<template>
    <div class="preview-modal" @click="getIsOpenPreview(false)">
        <Close />
        
        <img :src="previewSrc" :alt="previewAlt" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        components: {
            Close: () => import(/* webpackChunkName: "Florence" */ "../../assets/svg/Close.vue"),
        },
        computed: {
            ...mapState({
                previewSrc: state => state.previewSrc,
                previewAlt: state => state.previewAlt,
            }),
        },
        methods: {
            ...mapActions({
                getIsOpenPreview: 'getIsOpenPreview',
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .preview-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 101;

        img {
            width: 80vw;
            max-height: 95vh;
            max-width: 900px;
        }
    }
</style>