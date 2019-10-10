const business = {
  state: {
    loading: false
  },

  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading
    }
  },

  actions: {
    loading: ({ commit }, msg) => {
      commit('SET_LOADING', msg)
    }
  }
}

export default business

