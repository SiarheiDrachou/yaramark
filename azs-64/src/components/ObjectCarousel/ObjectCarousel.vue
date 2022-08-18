<template>
    <section class="carousel">
        <div class="carousel--big">
            <ArrowLeft @selectImage="selectImage" :selectIndex="selectIndex" />

            <picture>
                <source :srcset="selectWEBPSrc" type="image/webp">
                <img :src="selectSrc" :alt="selectAlt" />
            </picture>

            <ArrowRight @selectImage="selectImage" :selectIndex="selectIndex" />
        </div>
        <ul class="carousel-list">
            <li class="carousel-list__item carousel-list__item--small" :class="{'select-image': selectSrc === img.src}" v-for="(img, index) in images" :key="img.id" @click="selectImage(index)">
                <img :src="img.src" :alt="img.alt" />
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        props: ['images'],
        components: {
            ArrowLeft: () => import(/* webpackChunkName: "AZS64" */ "../../assets/svg/ArrowLeft.vue"),
            ArrowRight: () => import(/* webpackChunkName: "AZS64" */ "../../assets/svg/ArrowRight.vue"),
        },
        data() {
            return {
                selectSrc: this.images[0].src,
                selectWEBPSrc: this.images[0].WEBPsrc || '',
                selectAlt: this.images[0].alt,
                selectIndex: 0,
                isMounted: true,
            }
        },
        methods: {
            selectImage(index) {
                if(index < 0) {
                    this.selectSrc = this.images[0].src;
                    this.selectWEBPSrc = this.images[0].WEBPsrc || '';
                    this.selectAlt = this.images[0].alt;
                    return ;
                }

                if(index > this.images.length - 1) {
                    this.selectSrc = this.images[this.images.length - 1].src;
                    this.selectWEBPSrc = this.images[this.images.length - 1].WEBPsrc || '';
                    this.selectAlt = this.images[this.images.length - 1].alt;

                    return ;
                }

                this.selectSrc = this.images[index].src;
                this.selectWEBPSrc = this.images[index].WEBPsrc;
                this.selectAlt = this.images[index].alt;
                this.selectIndex = index;
            }
        },
    }
</script>

<style lang="scss">
    .object-description {
        max-width: 1280px;
        margin: 40px auto 130px;
        display: grid;
        grid-template-areas: 'info carousel'
                             'list carousel';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr;
        grid-gap: 80px 32px;

        @media(max-width: 1340px) {
            margin: 40px 50px 130px;
        }

        @media(max-width: 1280px) {
            grid-template-areas: 'info'
                                 'carousel'
                                 'list';
            grid-template-rows: auto auto 1fr;
            grid-template-columns: 1fr;
        }

        @media(max-width: 968px) {
            margin: 65px 50px;
        }

        ol {
            list-style-type: disc;
        }

        &--top {
            grid-area: info;
        }

        .carousel {
            grid-area: carousel;

            @media(min-width: 1240px) {
                margin-top: 60px;
            }
        }

        &__link-back {
            font-size: 20px;
            line-height: 24px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            @media(max-width: 1280px) {
                justify-content: center;
            }
            
            svg {
                margin-right: 15px;
            }
        }

        &__heading {
            font-size: 20px;
            line-height: 28px;
            margin: 27px 0 20px;

            @media(max-width: 1280px) {
                text-align: center;
            }
        }

        &-list {
            display: grid;
            grid-template-areas: 'location location'
                                 'year sqrt';
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;
            justify-content: space-between;
            grid-area: list;

            @media(max-width: 640px) {
                grid-template-columns: repeat(2, 120px);
            }
            
            &__item {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-auto-flow: row;
                grid-gap: 10px;
                text-align: center;

                @media(min-width: 1280px) {
                    justify-content: space-between;
                }

                @media(max-width: 1280px) {
                    justify-content: center;
                }

                span {
                    display: block;
                    min-width: 200px;
                }

                svg {
                    margin: 0 auto;
                }
            }

            .location {
                grid-area: location;

                @media(min-width: 1280px) {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    grid-gap: 15px;
                    text-align: left;
                }

                @media(max-width: 1280px) {
                    display: flex;
                    flex-direction: column;
                }
            }

            .year {
                grid-area: year;
            }

            .sqrt {
                grid-area: sqrt;
            }
        }
    }

    .carousel {
        width: 100%;

        &--big {
            position: relative;
            margin-bottom: 10px;

            img {
                width: 100%;
                height: 480px;

                @media(max-width: 1240px) {
                    height: 600px;
                }
                
                @media(max-width: 768px) {
                    height: 400px;
                }

                @media(max-width: 500px) {
                    height: 267px;
                }
            }
        }

        &-list {
            display: grid;
            justify-content: space-between;
            grid-template-columns: repeat(4, 1fr );
            grid-gap: 10px 20px;

            &__item {

                &--small {

                    img {
                        max-width: 100%;
                        width: 100%;
                        height: 100px;

                        @media(max-width: 1240px) {
                            height: 150px;
                        }
                        
                        @media(max-width: 768px) {
                            height: 100px;
                        }

                        @media(max-width: 500px) {
                            height: 50px;
                        }
                    }
                }
            }
        }
    }

    .select-image {
        transform: scale(1.1);
    }
</style>