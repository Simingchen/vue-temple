import { logins, logout, userDetail, userPermission } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    stations: [] // 用户岗位列表，进行权限设定
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_STATIONS: (state, data) => {
      state.stations = data
    },
    SET_USERINFOR: (state, data) => {
      state.userInfor = data
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        logins(userInfo.uuids, userInfo.password, username).then(response => {
          if (response.data.code === '0') {
            const data = response.data
            window.localStorage.token = data.data.token
            setToken(data.data.token)
            commit('SET_TOKEN', data.data.token)
            resolve()
          } else {
            reject(response.data.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 获取用户信息
        userDetail(state.token).then(response => {
          const tempUser = response.data.data
          if (!window.localStorage) {
            console.log('浏览器不支持localstorage')
          } else {
            // 储存用户信息
            window.localStorage.entityInfo = JSON.stringify(tempUser.entityInfo)
            window.localStorage.umGroup = JSON.stringify(tempUser.umGroup)
            window.localStorage.umUser = JSON.stringify(tempUser.umUser)
            window.localStorage.roles = JSON.stringify(tempUser.roles)
          }

          commit('SET_USERINFOR', tempUser)
          commit('SET_STATIONS', tempUser.roles)

          // 获取用户权限菜单
          const user_id = tempUser.umUser.user_id
          const entity_type = tempUser.umGroup.entity_type
          const user_type = tempUser.umUser.user_type
          userPermission(user_id, entity_type, user_type).then(res => {
            if (res.data.data && res.data.data.length > 0) { // 验证返回的菜单是否是一个非空数组
              window.sessionStorage.odata = JSON.stringify(res.data.data)
              // commit('SET_ROLES', res.data.data)
            } else {
              reject('请联系管理员分配权限!')
            }
            const tes = ['admin']
            commit('SET_ROLES', tes)
            resolve(tes)
          })
        }).catch(error => {
          reject(error)
        })
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
