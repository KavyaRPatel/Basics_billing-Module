import Vue from 'vue'
import App from './App.vue'

export const bus=new Vue();
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
})
