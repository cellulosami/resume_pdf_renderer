import Vue from 'vue'
import App from './App.vue'
import router from './router'

//install axios from cheatsheet

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
