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
      const tempData = routers.concat(stateRouterMap)
      state.routers = constantRouterMap.concat(tempData)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const tempData = filterAsyncRouter(data)
        commit('SET_ROUTERS', tempData)
        resolve()
      })
    }
  }
}

export default permission
