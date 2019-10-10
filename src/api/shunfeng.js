import req from '@/utils/req'

//	顺丰下单
export function saveExpressOrder (par) {
  return req({
    url: 'admin/expressOrderManager/saveExpressOrder.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
//	取消下单
export function cancelExpressOrder (par) {
  return req({
    url: 'admin/expressOrderManager/cancelExpressOrder.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	查询顺丰订单列表
export function expressOrderList (par) {
  return req({
    url: 'admin/expressOrderManager/expressOrderList.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
//	查询顺丰订单详情
export function expressOrderDetail (par) {
  return req({
    url: 'admin/expressOrderManager/expressOrderDetail.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	查询顺丰路由信息
export function expressRoutList (par) {
  return req({
    url: 'admin/expressOrderManager/expressRoutList.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	获取门店地址
export function groupAddressList (par) {
  return req({
    url: 'admin/expressOrderManager/groupAddressList.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	新增/修改收件地址
export function addOrUpdateExpressReceiverAddress (par) {
  return req({
    url: 'admin/expressOrderManager/addOrUpdateExpressReceiverAddress.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
//	查询收件地址列表
export function expressReceiverAddressList (par) {
  return req({
    url: 'admin/expressOrderManager/expressReceiverAddressList.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
//	查询收件地址详情
export function expressReceiverAddressDetail (par) {
  return req({
    url: 'admin/expressOrderManager/expressReceiverAddressDetail.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	新增寄件地址
export function addExpressAddress (par) {
  return req({
    url: 'admin/expressOrderManager/addExpressAddress.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
//	查询寄件地址详情
export function sendAddressDetail (par) {
  return req({
    url: 'admin/expressOrderManager/sendAddressDetail.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	获取个人寄件地址
export function sendAddressList (par) {
  return req({
    url: 'admin/expressOrderManager/sendAddressList.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
//	删除收件地址
export function expressAddressDelete (par) {
  return req({
    url: 'admin/expressOrderManager/expressAddressDelete.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
