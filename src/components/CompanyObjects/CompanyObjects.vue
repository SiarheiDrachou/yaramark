<template>
    <section class="company-objects">
        <h2 class="company-objects__heading">
            Объекты
        </h2>

        <ul class="company-objects-list">
            <li class="company-objects-list__item" v-for="companyObject in companyObjects" :key="companyObject.heading">
                <picture>
                    <source
                        v-if="companyObject.WEBPsrc"
                        :srcset="companyObject.WEBPsrc"
                        :alt="companyObject.alt"
                        type="image/webp"
                    />
                    <img :src="companyObject.src" :alt="companyObject.alt">
                </picture>
                <a class="company-objects-list__item__link" :href="companyObject.link">{{companyObject.heading}}</a>
            </li>
        </ul>

        <a class="company-objects__link button--secondary" href="/objects">Просмотреть все</a>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                companyObjects: [
                    {
                        id: 1,
                        heading: `
                            Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска
                        `,
                        src: 'https://yaramark.by/img/shelter-1.jpg',
                        WEBPsrc: 'https://yaramark.by/img/shelter-1.webp',
                        alt: `Государственное учреждение образование  “Социально-педагогический центр Центрального района г. Минска`,
                        link: '/objects/socio-pedagogical-center'
                    },
                    {
                        id: 2,
                        heading: `
                            «Минский объединенный спортивный клуб федерации профсоюзов»
                        `,
                        src: 'https://yaramark.by/img/courts-8.jpg',
                        WEBPsrc: 'https://yaramark.by/img/courts-8.webp',
                        alt: `«Минский объединенный спортивный клуб федерации профсоюзов»`,
                        link: '/objects/minsk-united-sports-club'
                    },
                    {
                        id: 3,
                        heading: `
                            «Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»
                        `,
                        src: 'https://yaramark.by/img/uprooting-10.jpg',
                        WEBPsrc: 'https://yaramark.by/img/uprooting-10.webp',
                        alt: `«Общество с ограниченной ответственностью «Компания по управлению недвижимостью индустриального парка»»`,
                        link: '/objects/industrial-park-property-management-company'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
    .company-objects {
        max-width: 1280px;
        margin: 130px auto 0;

        @media(max-width: 1340px) {
            margin: 130px 50px 0;
        }

        @media(max-width: 968px) {
            margin: 65px 50px 0;
        }

        @media(max-width: 640px) {
            margin: 65px 30px;
        }

        &__heading {
            margin-bottom: 70px;
            text-align: center;
        }
        
        &-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 24px;

            @media(max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
            }

            @media(max-width: 500px) {
                grid-template-columns: 1fr;
            }

            &__item {
                box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);

                picture {
                    max-width: 100%;
                }

                &__link {
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 34px;
                    padding: 15px;
                    display: block;
                    color: black;
                }

                &:hover {
                    background-color: #ffcb00;
                }
            }
        }

        &__link {
            margin: 60px auto 0;
            padding: 14px 100px;
            display: block;
            width: 350px;
            
            @media(max-width: 500px) {
                padding: 14px 75px;
                width: 300px;
            }
        }
    }
</style>