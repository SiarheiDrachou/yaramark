import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

const VueInputMask = require('vue-inputmask').default
Vue.config.productionTip = false

Vue.use(VueInputMask);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  mounted() {
    window.document.dispatchEvent(new Event('renderer-ready'));
  }
})

