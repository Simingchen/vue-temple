// 服务流程
const service = {
  state: {
    serviceRow: {}
  },

  mutations: {
    SET_SERVICEROW: (state, serviceRow) => { // 服务列表数据
      state.serviceRow = serviceRow
    }
  },

  actions: {
    serviceRow: ({ commit }, data) => { // 服务列表数据
      commit('SET_SERVICEROW', data)
    }
  }
}

export default service

