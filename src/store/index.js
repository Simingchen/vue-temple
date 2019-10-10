/* eslint-disable */
// import Vue from 'vue'
// import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import getters from './getters'
import permission from './modules/permission'
import business from './modules/business'
import loading from './modules/loading'
import service from './modules/service'
import tableHeight from './modules/tableHeight'

// Vue.use(Vuex);
Vue.config.devtools = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    permission,
    business,
    loading,
    service,
    tableHeight
  },
  getters
})

export default store
