import { constantRouterMap, stateRouterMap } from '@/router'
import { filterAsyncRouter } from '@/utils/public.js'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      const w = routers.concat(stateRouterMap)
      state.routers = constantRouterMap.concat(w)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const qq = filterAsyncRouter(data)
        commit('SET_ROUTERS', qq)
        resolve()
      })
    }
  }
}

export default permission
