// import req from '@/utils/mockreq'
import req from '@/utils/req'
const mockreq = 'http://47.107.46.219:7300/mock/5c9c35ba77bdc300869e2a6e/longda/'

/*
 资料模块
*/
// 获取客户资料列表
export function custMaterialList (par) {
  return req({
    url: 'admin/customerManager/custMaterialList.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 新增客户附件
export function addOrUpdateCustomerMaterial (par) {
  return req({
    url: 'admin/customerManager/addOrUpdateCustomerMaterial.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 删除客户资料
export function customerMaterialDelete (par) {
  return req({
    url: 'admin/customerManager/customerMaterialDelete.do',
    method: 'GET',
    params: par
  })
}

// 12.1.获取系统内置资料交接单模板
export function sysDataTransferTemplate () {
  return req({
    url: 'admin/publicService/sysDataTransferTemplate.do',
    method: 'GET'
  })
}

// 12.2.保存资料交接单
export function dataTransferApply (par) {
  return req({
    url: 'admin/serviceProcess/dataTransferApply.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 12.3.确认接收/退回资料交接单
export function updateDataTransferStatus (par) {
  return req({
    url: 'admin/serviceProcess/updateDataTransferStatus.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 12.4.获取资料交接单列表
export function dataTransferPagedResult (par) {
  return req({
    url: 'admin/serviceProcess/dataTransferPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 12.5.资料交接单详情展示
export function dataTransferDetailView (id) {
  return req({
    url: 'admin/serviceProcess/dataTransferDetailView.do?transferId=' + id,
    method: 'POST'
    // data: Object.assign({}, par)
  })
}

// 12.6.查询系统评价模板
export function getSysEvaluationTemplate (par) {
  return req({
    url: mockreq + 'admin/serviceProcess/getSysEvaluationTemplate.do',
    method: 'GET',
    data: Object.assign({}, par)
  })
}

// 12.7.新增评价
export function addEvaluation (par) {
  return req({
    url: mockreq + 'admin/serviceProcess/addEvaluation.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 12.8.评价信息展示
export function queryEvaluation (par) {
  return req({
    url: mockreq + 'admin/serviceProcess/queryEvaluation.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 10.1.获取代账机构下代理商、服务商列表
export function listEntity (par) {
  return req({
    url: 'admin/agentManager/listEntity.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 6.28.获取代账中介下代理商、服务商下用户
export function listUser (par) {
  return req({
    url: 'admin/userManager/listUser.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
