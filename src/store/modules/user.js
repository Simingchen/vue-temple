import { logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    roles: [],
    stations: [] // 用户岗位列表，进行权限设定
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERINFOR: (state, data) => {
      state.userInfor = data
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        const data = { token: 'T_9d6b62b5-5a2c-4668-9a81-c2a07027f023' }
        window.localStorage.token = data.token
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
        // logins(userInfo.uuids, userInfo.password, username).then(response => {
        //   if (response.data.code === '0') {
        //     const data = response.data
        //     window.localStorage.token = data.data.token
        //     setToken(data.data.token)
        //     commit('SET_TOKEN', data.data.token)
        //     resolve()
        //   } else {
        //     reject(response.data.message)
        //   }
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 获取用户信息
        const tes = ['admin']
        commit('SET_ROLES', tes)
        resolve(tes)
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          window.sessionStorage.odata = []
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
