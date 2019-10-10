// import req from '@/utils/req'

// // 客户注册
// export function pagedResult (par) {
//   return req({
//     url: 'admin/customerManager/addOrUpdateCust.do',
//     method: 'POST',
//     data: Object.assign({
//     }, par)
//   })
// }

// // 登录账号唯一性校验
// export function checkLoginNameUnique (par) {
//   return req({
//     url: 'admin/userManager/checkLoginNameUnique.do?loginName=' + par,
//     method: 'GET'
//   })
// }

// // 客户名称唯一性校验
// export function checkCustomerNameUnique (par) {
//   return req({
//     url: 'admin/customerManager/checkCustomerNameUnique.do?customer_name=' + par,
//     method: 'GET'
//   })
// }

// // 社会信用代码唯一性校验
// export function checkSocialCreditCodeUnique (par) {
//   return req({
//     url: 'admin/customerManager/checkSocialCreditCodeUnique.do?social_credit_code=' + par,
//     method: 'GET'
//   })
// }
