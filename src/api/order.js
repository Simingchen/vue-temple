// 订单管理
import req from '@/utils/req'

// 5.7.订单查询
export function apiOrderList (par) {
  return req({
    url: 'admin/orderManager/orderPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.8.订单详情查询
export function apiOrderDetail (par) {
  return req({
    url: 'admin/orderManager/viewOrderDetail.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.9.订单续期
export function apiOrderRenewal (par) {
  return req({
    url: 'admin/orderManager/renewalOrder.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.9.订单关闭
export function apiOrderClose (par) {
  return req({
    url: 'admin/orderManager/closeOrder.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.9.订单金额
export function getTotalAmount (id) {
  return req({
    url: 'admin/orderManager/getTotalAmount.do?order_id=' + id,
    method: 'POST'
    // data: Object.assign({}, par)
  })
}

// 5.18.获取订单计费细则
export function getChargingDetailByPackId (id) {
  return req({
    url: 'admin/orderManager/getChargingDetailByPackId.do?pack_id=' + id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.21.订单指派页面数据加载接口
export function assignLoadDataById (id, pack_id) {
  return req({
    url: 'admin/orderAssignManager/assignLoadDataById.do?order_id=' + id + '&pack_id=' + pack_id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.22.获取商品在线服务商列表
export function getOnlineSp (id) {
  return req({
    url: 'admin/orderAssignManager/getOnlineSp.do?app_id=' + id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.23.下拉选择时，获取服务商主要联系人，联系电话接口
export function getSpInfo (id) {
  return req({
    url: 'admin/orderAssignManager/getSpInfo.do?sp_id=' + id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.24.下拉选择时，获取服务角色接口
export function queryAppRoleListByAppId (id) {
  return req({
    url: 'admin/appRoleManager/queryAppRoleListByAppId.do?app_id=' + id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.25.保存订单指派接口
export function saveOrderAssign (par) {
  return req({
    url: 'admin/orderAssignManager/saveOrderAssign.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.32.获取订单商品细则
export function getAppDetailedRuleByOrderId (id) {
  return req({
    url: 'admin/orderManager/getAppDetailedRuleByOrderId.do?order_id=' + id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

//	5.33.获取服务角色服务的订单明细
export function apiRoleOwnOrderList (par) {
  return req({
    url: 'admin/orderManager/queryRoleServiceOrderDetail.do',
    method: 'POST',
    data: par
  })
}

//	5.34.订单角色变更接口
export function apiOrderRoleChange (par) {
  return req({
    url: 'admin/orderAssignManager/orderRoleChange.do',
    method: 'POST',
    data: par
  })
}
//	5.13.订单关闭审核
export function apiOrderCloseCheck (par) {
  return req({
    url: 'admin/orderManager/orderCloseApplyCheck.do',
    method: 'POST',
    data: par
  })
}

//	5.14.订单关闭审核进度条
export function apiOrderCloseCheckList (par) {
  return req({
    url: 'admin/orderManager/orderCloseCheckPagedResult.do',
    method: 'POST',
    params: par
  })
}

//	5.36.保存订单返现支付申请接口
export function apiOrderPayApply (par) {
  return req({
    url: 'admin/orderManager/saveOrderReturnApply.do',
    method: 'POST',
    data: par
  })
}

//	5.37.支付返现申请列表接口（审核列表、支付列表公用）
export function apiOrderPayLsit (par) {
  return req({
    url: 'admin/orderManager/getOrderReturnPagedResult.do',
    method: 'POST',
    data: par
  })
}
//	5.38.返现支付详情进度条和审核列表接口
export function apiOrderPayMsgCheck (par) {
  return req({
    url: 'admin/orderManager/getOrderReturnCheckBar.do',
    method: 'GET',
    params: par
  })
}
//	5.39.返现支付详情接口（不包括审核记录）
export function apiOrderPayMsg (par) {
  return req({
    url: 'admin/orderManager/getOrderReturnDetail.do',
    method: 'GET',
    params: par
  })
}
//	5.40.支付接口保存
export function apiOrderPaySave (par) {
  return req({
    url: 'admin/orderManager/saveOrderReturnPayInfo.do',
    method: 'POST',
    data: par
  })
}
//	5.41.保存返现审核
export function apiOrderPayCheck (par) {
  return req({
    url: 'admin/orderManager/saveOrderReturnCheck.do',
    method: 'POST',
    data: par
  })
}
//	5.42.根据返现记录id获取审核列表
export function apiOrderPayCheckList (par) {
  return req({
    url: 'admin/orderManager/getReturnCheckListByApplyId.do',
    method: 'GET',
    params: par
  })
}

//	订单指派 该部门是否有部门主管 可有指派保存
export function apiOrderJudgeSave (par) {
  return req({
    url: 'admin/orderAssignManager/judgeCanSaveOrderAssign.do',
    method: 'POST',
    data: par
  })
}
