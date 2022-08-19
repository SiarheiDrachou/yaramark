<template>
    <form class="form">
        <fieldset :class="{'error': !isPhoneNumber && !isBlurPhoneNumber}">
            <legend>Номер телефона</legend>

            <vue-tel-input v-model="phone" @input="maskCheck" ref="inputPhones"></vue-tel-input>
        </fieldset>

        <p class="error-message" v-show="!isPhoneNumber && !isBlurPhoneNumber">Некорректный мобильный номер!</p>

        <fieldset :class="{'error': !isName && !isBlurName}">
            <legend>Имя</legend>
            <input placeholder="Введите имя" type="text" ref="inputNames" v-model="name" @input="nameCheck" />
        </fieldset>

        <p class="error-message" v-show="!isName && !isBlurName">Введите имя!</p>

        <fieldset>
            <legend>Коментарий</legend>
            <textarea v-model="comment" cols="30" rows="5" ref="inputComments" placeholder="Напишите тут"></textarea>
        </fieldset>

        <fieldset class="form-timerange">
            <legend>Желаемое время для звонка</legend>

            <div class="form-timerange-container div-select">
                <div class="div-select">
                    <span>c</span>
                    <select ref="inputTimeStarts" v-model="timeStart">
                        <option value="8:00" selected>8:00</option>
                        <option value="9:00">9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                    </select>
                </div>

                <div class="div-select">
                    <span>до</span>
                    <select ref="inputTimeEnds" v-model="timeEnd">
                        <option value="9:00" selected>9:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                    </select>
                </div>
            </div>
        </fieldset>

        <p class="success-message" v-if="isSuccess === 'success'">
            Заявка успешно отправлена!
        </p>

        <p class="success-message" v-if="isSuccess === 'error'">
            Ошибка! Попробуйте ещё раз.
        </p>

        <button type="button" @click="sendForm($event)" :disabled="isDisabled">Отправить</button>
    </form>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                uploadInput: null,
                msg: '',
                isPhoneNumber: false,
                isBlurPhoneNumber: true,
                isName: '',
                isBlurName: true,
                phone: null,
                name: null,
                comment: '',
                timeStart: "8:00",
                timeEnd: "9:00",
                isDisabled: false,
            };
        },
        computed: {
            ...mapState({
                isSuccess: state => state.isSuccess,
                inputPhone: state => state.inputPhone,
                inputName: state => state.inputName,
                inputComment: state => state.inputComment,
                inputTimeStart: state => state.inputTimeStart,
                inputTimeEnd: state => state.inputTimeEnd,
            })
        },
        watch: {
            isSuccess: function(isSuccess) {
                if(isSuccess === 'success') {
                    this.phone = null;
                    this.name = null;
                    this.comment = '';
                    this.timeStart = "8:00";
                    this.timeEnd = "9:00";
                    this.isDisabled = false;
                }
            }
        },
        methods: {
            maskCheck: function () {
                const { _watchers: watchers } = this.$refs.inputPhones;

                if(watchers[4]?.value?.countryCode && !watchers[4]?.value?.valid) {
                    this.isPhoneNumber = false;
                    this.isBlurPhoneNumber = false;
                }

                if(watchers[4]?.value?.valid) {
                    this.isPhoneNumber = true;
                    this.isBlurPhoneNumber = true;
                    this.phone = watchers[4]?.value?.number || null;
                } else {
                    this.isPhoneNumber = false;
                }
            },
            nameCheck() {
                if(this.$refs.inputNames.value) {
                    this.isBlurName = true;
                }

                this.isName = this.$refs.inputNames.value;
                this.isBlurName = false;
            },
            sendForm() {
                if(
                    this.isPhoneNumber &&
                    this.$refs.inputNames.value &&
                    this.$refs.inputTimeStarts.value &&
                    this.$refs.inputTimeEnds.value
                ) {
                    this.isDisabled = true;

                    this.getInputPhone(this.$refs.inputPhones.value);
                    this.getInputName(this.$refs.inputNames.value);
                    this.getInputComment(this.$refs.inputComments.value);
                    this.getInputTimeStart(this.$refs.inputTimeStarts.value);
                    this.getInputTimeEnd(this.$refs.inputTimeEnds.value);

                    this.sendFormRequest();
                    return ;
                }

                this.isBlurPhoneNumber = false;
                this.isBlurName = false;
            },
            ...mapActions({
                getInputPhone: 'getInputPhone',
                getInputName: 'getInputName',
                getInputComment: 'getInputComment',
                getInputTimeStart: 'getInputTimeStart',
                getInputTimeEnd: 'getInputTimeEnd',
                sendFormRequest: 'sendFormRequest',
            }),
        },
    }
</script>

<style lang="scss">
    .form {
        max-width: 486px;
        display: grid;
        grid-gap: 20px;

        @media(max-width: 640px) {
            max-width: none;
        }

        &-download,
        &-upload {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: auto 1fr;
            align-items: center;
            color: white;
            font-size: 24px;
            line-height: 28px;
            cursor: pointer;

            input {
                display: none;
                opacity: 0;
            }

            a {
                color: white;
            }
        }

        &-timerange {

            &-container {
                margin-top: 5px;
                padding: 17px 30px;
                grid-template-columns: repeat(2, 100px);
                grid-gap: 110px;
                background-color: #fff;

            }
        }

        .error {
            border: 3px solid #FB0000;
        }

        .error-message {
            color: #FB0000;
            text-align: right;
        }

        .success-message {
            color: green;
        }

        fieldset {
            border: 3px solid #ffcb00;
            
            @media(max-width: 500px) {
                max-width: 300px;
            }

            .div-select {
                display: grid;
                grid-template-columns: auto 1fr !important;
                grid-gap: 30px !important;
            }
        }

        legend {
            color: #ffcb00;
            font-size: 22px;
            line-height: 26px;
            margin-bottom: 5px;

            @media(max-width: 500px) {
                font-size: 18px;
                line-height: 20px;
            }
        }

        button {
            background: linear-gradient(100.01deg, #FFCB00 41.72%, #D9A900 104.17%);
            font-size: 18px;
            line-height: 21px;
            padding: 21px 50px;
            width: 100%;
            margin-top: 30px;
            
            @media(max-width: 500px) {
                max-width: 300px;
            }
        }

        textarea {
            position: relative;
            bottom: -5px;
        }

        select {
            min-width: 100px;
            max-width: 100px;

            @media(max-width: 500px) {
                min-width: 50px;
                max-width: 50px;
            }
        }
    }

    .vti__dropdown {
        background-color: white;
    }

    .vti__dropdown-list {
        min-width: 165px;
        top: 60px !important;
    }
</style>