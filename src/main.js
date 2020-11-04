import Vue from 'vue'
import HeaderFooter from './HeaderFooter.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(HeaderFooter)
}).$mount('#app')
