/* eslint-disable */
// import Vue from 'vue'
import App from './App'
import router from './router'
import dayjs from 'dayjs'
import debounce from 'lodash.debounce'
import VueLazyLoad from 'vue-lazyload' // 图片懒加载
import '@/permission' // permission control
import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$day = dayjs // 引入dayjs
Vue.prototype.$debounce = debounce // 引入debounce防抖

Vue.use(VueLazyLoad)
Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
