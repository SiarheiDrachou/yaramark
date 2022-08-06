import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

const VueInputMask = require('vue-inputmask').default
Vue.config.productionTip = false

Vue.use(VueInputMask);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    window.document.dispatchEvent(new Event('renderer-ready'));
  }
})

