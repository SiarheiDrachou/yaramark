import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isOpenPreview: false,
        isOpenRequest: false,
        previewSrc: null,
        previewAlt: null,
        carouselId: null,
        inputPhone: null,
        inputName: null,
        inputComment: 'Напишите тут',
        inputTimeStart: "9:00",
        inputTimeEnd: "10:00",
        isSuccess: 'null',
        isMobile: false,
        selectedType: 'Вся техника',
    },
    mutations: {
        setSelectedType(state, type) {
            state.selectedType = type;
        },
        setIsMobile(state, type) {
            state.isMobile = type;
        },
        setIsOpenPreview(state, type) {
            state.isOpenPreview = type;
        },
        setIsOpenRequest(state, type) {
            state.isOpenRequest = type;
        },
        setPreviewParams(state, params) {
            state.previewSrc = params.WEBPsrc || params.src;
            state.previewAlt = params.alt;
        },
        setInputPhone(state, value) {
            state.inputPhone = value;
        },
        setInputName(state, value) {
            state.inputName = value;
        },
        setInputComment(state, value) {
            state.inputComment = value;
        },
        setInputTimeStart(state, value) {
            state.inputTimeStart = value;
        },
        setInputTimeEnd(state, value) {
            state.inputTimeEnd = value;
        },
        setIsSuccess(state, value) {
            state.isSuccess = value;
        }
    },
    actions: {
        getSelectedType({commit}, type) {
            commit('setSelectedType', type);
        },
        getIsMobile({commit}, type) {
            commit('setIsMobile', type === false ? false : true);
        },
        getIsOpenPreview({commit}, type) {
            commit('setIsOpenPreview', type === false ? false : true);
        },
        getIsOpenRequest({commit}, type) {
            commit('setIsOpenRequest', type === false ? false : true);
        },
        getPreviewParams({commit}, params) {
            commit('setPreviewParams', params);
        },
        getInputPhone({commit}, value) {
            commit('setInputPhone', value);
        },
        getInputName({commit}, value) {
            commit('setInputName', value);
        },
        getInputComment({commit}, value) {
            commit('setInputComment', value);
        },
        getInputTimeStart({commit}, value) {
            commit('setInputTimeStart', value);
        },
        getInputTimeEnd({commit}, value) {
            commit('setInputTimeEnd', value);
        },
        sendFormRequest({commit, state}) {
            let msg = encodeURI(
                'Имя: ' + JSON.stringify(state.inputName).toUpperCase() +
                ";\nТелефон: " + state.inputPhone + 
                ";\nКомментарий: " + JSON.stringify(state.inputComment).toUpperCase() +
                ";\nЖелаемое время звонка: " + JSON.stringify(state.inputTimeStart + ' - ' + state.inputTimeEnd).toUpperCase() );

            axios.put('https://zootaxi.by/postMessage', {msg})
                .then(function () {
                    commit('setInputPhone', null);
                    commit('setInputName', null);
                    commit('setInputComment', 'Напишите тут');
                    commit('setInputTimeStart', "9:00");
                    commit('setInputTimeEnd', "10:00");
                    commit('setIsSuccess', 'success');
                })
                .catch(function () {
                    commit('setIsSuccess', 'error');
                });
        }
    },
    modules: {}
})


