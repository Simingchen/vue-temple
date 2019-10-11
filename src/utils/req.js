/* eslint-disable */
import store from '../store'
import router from '../router'
import { getToken } from '@/utils/auth'
import { showFullLoading, hideFullLoading } from '@/utils/fullloading'

// 获取CancelToken
const CancelToken = axios.CancelToken
const source = CancelToken.source();
// 某个请求的响应满足特定条件的情况下，取消其他正在进行的请求
// source.cancel();


const pending = {}
const removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key]('取消重复请求')
  }
  delete pending[key]
}
const getRequestIdentify = (config, isReuest = false) => {
  let url = config.url
  if (isReuest) {
    url = config.baseURL + config.url.substring(1, config.url.length)
  }
  return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
}

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 60000,
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['cache-control'] = 'no-cache'
    config.headers['Pragma'] = 'no-cache'
    let requestData = getRequestIdentify(config, true)
    removePending(requestData, true)
    return config
  },
  error => {
    hideFullLoading()
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    let requestData = getRequestIdentify(response.config)
    removePending(requestData)
    hideFullLoading() // 响应成功关闭loading
    if (response.data.code === '1') { // 状态1失败，进行弹窗报错
      if (response.data.message) {
        ELEMENT.Message.error(response.data.message)
      }

      // 函数进入then后面的第二个err函数，如果没有就进入catch函数
      return Promise.reject(response)
    }

    return response
  },
  error => {
    hideFullLoading()
    if (error && error.response) {
      if (String(error).indexOf('code 400') !== -1) {
        ELEMENT.Message.error('参数有误')
        // 函数进入then后面的第二个err函数，如果没有就进入catch函数, 表单提交就可以根据这个重置参数以及重置按钮状态，防止按钮卡滞
        return Promise.reject(error)
      }
      if (error.response.status === 401 || String(error).indexOf('code 401') !== -1) {
        ELEMENT.MessageBox.confirm('因长时间未使用，系统已安全登出您的账户。','系统安全提示',{
            confirmButtonText: '重新登录',
            type: 'warning'
          }).then(() => {
            store.dispatch('FedLogOut').then(() => {
              router.push('/login')
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        })
      }
      if (String(error).indexOf('code 500') !== -1) {
        ELEMENT.Message.error('服务器出现问题，请刷新重试')
        return Promise.reject(error)
      }

      // 终止Promise调用链
      return new Promise(() => {})
    }
  }
)

export default service
