import Vue from 'vue'
import App from './App.vue'
import './styles/reset.css';
// b的修改
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
