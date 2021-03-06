import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import obj from './components/common/toast/index'
Vue.use(obj)
Vue.use(ElementUI)
//使用图片懒加载插件
Vue.use(VueLazyLoad)
Vue.config.productionTip = false
// Vue.config.silent = true 禁止所有 Vue 日志和警告。
Vue.prototype.$bus=new Vue({}) //添加事件总线，vue实例可以作事件总线
Vue.prototype.$message=ElementUI.Message
new Vue({
  store,
  router,
  obj,
  render: h => h(App),
}).$mount('#app')
