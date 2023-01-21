<template>
    <article class="about-us">
        <h3 class="about-us__heading">
            Форма собственности – частная, действуем на основании Устава
        </h3>

        <div v-for="list in lists" :key="list.heading">
            <AboutTeams :lists="list.array" :heading="list.heading" :headingStyle="list.headingStyle || ''" :arrayStyle="list.arrayStyle || ''" />
        </div>
    </article>
</template>

<script>
    import AboutTeams from "./AboutTeams.vue";

    export default {
        components: {
            AboutTeams,
        },
        data() {
            return {
                lists: [
                    {
                        heading: `Коллектив ООО «ЯраМарк» состоит из профессионалов своего дела, для осуществления работ данной отрасли имеются:`,
                        array: [],
                        headingStyle: {
                            marginBottom: '33px',
                        },
                    },
                    {
                        heading: `Оказываемые услуги:`,
                        array: [
                            `
                                все виды земляных работ (выторфовка, снятие разноуровневого грунта, 
                                вертикальная планировка территории, устройство котлованов любой сложности с последующей 
                                обратной засыпкой);
                            `,
                            `
                                благоустройство территории (установка борта, посадки газона, посадка зеленных насаждений, 
                                устройство плиточного, бетонного и асфальтобетонного покрытия любой сложности);
                            `,
                            `
                                наружные сети (канализации, водопровода, ливневой канализации, очистные сооружения);
                            `,
                            `
                                строительство автомобильных дорог (весь комплекс работ).
                            `,
                            `
                                общестроительные работы; 
                            `,
                        ],
                        headingStyle: {
                            marginBottom: '33px',
                        },
                        arrayStyle: {
                            listStyleType: 'number',
                            marginBottom: '65px',
                            paddingBottom: '65px',
                            borderBottom: '2px solid black'
                        }
                    },
                    
                    {
                        heading: `Управляющий`,
                        array: [
                            'главный инженер'
                        ],
                        headingStyle: {
                            marginBottom: '10px',
                        },
                        arrayStyle: {
                            listStyleType: 'disc',
                            marginBottom: '33px',
                            fontWeight: 'bold'
                        }
                    },
                    {
                        heading: `Отдел бухгалтера:`,
                        array: [
                            `главный бухгалтер`,
                            `экономист`,
                            `специалист по кадрам`,
                        ],
                        headingStyle: {
                            marginBottom: '10px',
                        },
                        arrayStyle: {
                            listStyleType: 'disc',
                            marginBottom: '33px',
                        }
                    },
                    {
                        heading: `Инженерно-технический состав:`,
                        array: [
                            `главный инженер`,
                            `производитель работ`,
                            `мастер строительного участка`,
                            `инженер по охране труда`,
                        ],
                        headingStyle: {
                            marginBottom: '10px',
                        },
                        arrayStyle: {
                            listStyleType: 'disc',
                            marginBottom: '33px',
                        }
                    },
                    {
                        heading: `Произодственно-технический отдел (ПТО):`,
                        array: [
                            `начальник отдела`,
                            `инженер по сметной работе`,
                            `инженер ПТО`,
                        ],
                        headingStyle: {
                            marginBottom: '10px',
                        },
                        arrayStyle: {
                            listStyleType: 'disc',
                            marginBottom: '33px',
                        }
                    },
                    {
                        heading: `Служба геодезиста:`,
                        array: [
                            `инженер геодезист`,
                        ],
                        headingStyle: {
                            marginBottom: '10px',
                        },
                        arrayStyle: {
                            listStyleType: 'disc',
                            marginBottom: '33px',
                        }
                    },
                    {
                        heading: `Мы являемся первичной профсоюзной организацией.`,
                        array: [],
                        headingStyle: {
                            marginBottom: '33px',
                        },
                    },
                    {
                        heading: `Нашей организацией четко отлажена система покупки основных строительных материалов, имеем свой heading: `Нашей организацией четко отлажена система покупки основных строительных материалов, имеем свой склад и производственную базу.`,изводственную базу.`,
                        array: [],
                        headingStyle: {
                            marginBottom: '33px',
                        },
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .about-us {
        max-width: 1280px;
        margin: 60px auto 130px;
        padding: 0 30px;

        &__heading {
            margin-bottom: 50px;
        }
    }
</style>