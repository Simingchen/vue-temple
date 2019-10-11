/* eslint-disable */
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import debounce from 'lodash.debounce'
import '@/permission' // permission control
import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$day = dayjs // 引入dayjs
Vue.prototype.$debounce = debounce // 引入debounce防抖

Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
