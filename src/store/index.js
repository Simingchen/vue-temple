/* eslint-disable */
// import Vue from 'vue'
// import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import permission from './modules/permission'
import loading from './modules/loading'

Vue.config.devtools = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    loading,
  },
  getters
})

export default store
