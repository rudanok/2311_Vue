import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

console.log('Store instance:', store) // Проверка экземпляра Vuex Store

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
