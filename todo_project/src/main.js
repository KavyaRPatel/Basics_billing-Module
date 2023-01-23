import Vue from 'vue'
import App from './App.vue'
   
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
//export const eventBus = new Vue();
Vue.use(BootstrapVue);


//import router from './router'
Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
