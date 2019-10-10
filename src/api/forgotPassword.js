import req from '@/utils/req'

// 发送验证码
export function sendCaptchaCode (opts) {
  return req({
    url: 'admin/userManager/sendCaptchaCode.do?mobile_phone=' + opts,
    method: 'GET'
  })
}
// 设置新密码
export function setNewPassword (opts) {
  return req({
    url: 'admin/userManager/setNewPassword.do',
    method: 'POST',
    data: Object.assign({
    }, opts)
  })
}

// 找回密码
export function findPassword (opts) {
  return req({
    url: 'admin/userManager/findPassword.do',
    method: 'POST',
    data: Object.assign({
    }, opts)
  })
}
