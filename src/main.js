import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue({}) //添加事件总线，vue实例可以作事件总线
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
