import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted() {
    window.document.dispatchEvent(new Event('renderer-ready'));
  }
})

