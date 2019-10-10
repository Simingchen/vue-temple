/* 客户管理 */
// import req from '@/utils/mockreq'
import req from '@/utils/req'

// 查询列表灰
export function apiCustomerList (par) {
  return req({
    url: 'admin/customerManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 查询客户详情 头部灰
export function apiCustomerMsg (par) {
  return req({
    url: 'admin/customerManager/custDetailTop.do',
    method: 'GET',
    params: par
  })
}

// .删除客户
export function apiCustomerDel (par) {
  return req({
    url: '/admin/customerManager/custDelete.do',
    method: 'GET',
    params: par
  })
}

// 4.10.注销客户
export function apiCustomerCancel (par) {
  return req({
    url: 'admin/customerManager/custCancel.do',
    method: 'POST',
    data: par
  })
}

// 查询客户详情 基本信息灰
export function apiCustDetail (par) {
  return req({
    url: 'admin/customerManager/custDetail.do',
    method: 'GET',
    params: par
  })
}

// 检验客户唯一性灰
export function apiCustomerCheck (par) {
  return req({
    url: 'admin/customerManager/checkCustNameUnique.do',
    method: 'GET',
    params: par
  })
}

// 4.16.获取客户联系人列表灰
export function apiContactList (par) {
  return req({
    url: 'admin/customerManager/linkmanPagedResult.do?cust_id=' + par.cust_id,
    method: 'GET'
  })
}
// 4.16.新增客户联系人列表
export function apiAddContact (par) {
  return req({
    url: 'admin/customerManager/addOrUpdateCustLinkman.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 4.18.删除客户联系人灰
export function apiDelContact (par) {
  return req({
    url: 'admin/customerManager/custLinkmanDelete.do',
    method: 'GET',
    params: par
  })
}

// 4.19.获取客户联系人详情灰
export function apiGetCustomer (par) {
  return req({
    url: 'admin/customerManager/custLinkmanDetail.do',
    method: 'GET',
    params: par
  })
}

// 查询客户详情 服务人员列表
export function apiserviceList (par) {
  return req({
    url: 'admin/customerManager/serviceList.do',
    method: 'GET',
    data: Object.assign({}, par)
  })
}

// // 查询客户账户流水
// export function apiAccountFlow (par) {
//   return req({
//     url: 'admin/customerManager/linkmanPagedResult.do',
//     method: 'GET',
//     data: Object.assign({}, par)
//   })
// }
// 4.22.服务人员变更
export function apiserviceChange (par) {
  return req({
    url: 'admin/customerManager/changeServiceRole.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 新增修改客户
export function apiUpdateCust (par) {
  return req({
    url: 'admin/customerManager/addOrUpdateCust.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 商机登记查询客户名称，默认只加载15条数据灰
export function queryCustList (id, name) {
  return req({
    url: 'admin/customerManager/queryCustList.do?agency_id=' + id + '&cust_name=' + name,
    method: 'GET'
  })
}

// 4.33维护记录灰
export function apiMaintainList (par) {
  return req({
    url: 'admin/customerManager/followUpList.do',
    method: 'GET',
    params: par
  })
}
// 4.33.新增维护记录
export function apiAddMaintainRec (par) {
  return req({
    url: 'admin/customerManager/addOrUpdateFollowUp.do',
    method: 'GET',
    data: Object.assign({}, par)
  })
}

// .删除维护记录灰
export function followUpDelete (par) {
  return req({
    url: 'admin/customerManager/followUpDelete.do',
    method: 'GET',
    params: par
  })
}
// 4.33.分派记录
export function apiAssignRec (par) {
  return req({
    url: 'admin/customerManager/assignPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 4.44  模糊查询客户名称列表
export function apiGetQueryList (par) {
  return req({
    url: 'admin/customerManager/fuzzyQueryCustomerName.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}

// 6.8.查询用户列表
export function apiCustDetailList (par) {
  return req({
    url: 'admin/userManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 4.43获取客户下商机列表灰
export function listBoInfoByCust (par) {
  return req({
    url: 'admin/customerManager/listBoInfoByCust.do',
    method: 'GET',
    params: par
  })
}
// 新增客户标签admin/customerManager/addCustLabel.do灰
export function addCustLabel (par) {
  return req({
    url: 'admin/customerManager/addCustLabel.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 删除客户标签admin/customerManager/delCustLabel.do灰
export function delCustLabel (par) {
  return req({
    url: 'admin/customerManager/delCustLabel.do',
    method: 'GET',
    params: par
  })
}

// 客户联系人开通用户账号
export function getTemporaryQrCode (par) {
  return req({
    url: 'wechat/getTemporaryQrCode.do',
    method: 'GET',
    params: par
  })
}

// 获取客户账单金额统计数据admin/billManager/statisticsAgentBillsAmount.do?cust_id=1
export function statisticsAgentBillsAmount (id) {
  return req({
    url: 'admin/billManager/statisticsAgentBillsAmount.do?cust_id=' + id,
    method: 'POST'
  })
}

// 获取服务人员列表
export function serviceList (id) {
  return req({
    url: 'admin/customerManager/serviceList.do?cust_id=' + id,
    method: 'GET'
  })
}

// 下载客户资料附件
export function downloadMaterialAttach (id) {
  return req({
    url: 'admin/customerManager/downloadMaterialAttach.do?material_id=' + id,
    method: 'GET'
  })
}

// 根据客户id资料分类资料名称获取附件id
export function getCustomerMaterialId (par) {
  return req({
    url: 'admin/customerManager/getCustomerMaterialId.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 4.12.客户经理变更
export function apiManagerTransfer (par) {
  return req({
    url: 'admin/customerManager/clientManagerChange.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 4.44  模糊查询客户名称列表
export function fuzzyQueryCustomerName (id, name) {
  return req({
    url: 'admin/customerManager/fuzzyQueryCustomerName.do?agency_id=' + id + '&cust_name=' + name,
    method: 'GET'
    // params: Object.assign({}, par)
  })
}

// 查询客户经理负责的客户列表
export function apiMasterCustomerList (par) {
  return req({
    url: 'admin/customerManager/custPagedResult.do',
    method: 'POST',
    data: par
  })
}

// 校验客户联系人唯一
export function checklCustLinkPhoneUnique (par) {
  return req({
    url: 'admin/customerManager/checklCustLinkPhoneUnique.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
