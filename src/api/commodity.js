import req from '@/utils/req'
/*
 商品管理 套餐管理
*/

// 列表查询
export function apiCommodityList (par) {
  return req({
    url: 'admin/appManager/appPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 查询套餐列表
export function apiPackList (par) {
  return req({
    url: 'admin/packManager/packPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 详情查询
export function apiCommodityDetail (par) {
  return req({
    url: 'admin/packManager/viewGoodsDetail.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 删除 商品
export function apiCommodityDel (par) {
  return req({
    url: 'admin/appManager/deleteAppInfoById.do',
    method: 'POST',
    params: Object.assign({}, par)
  })
}

// 新增套餐
export function apiPackAdd (par) {
  return req({
    url: 'admin/packManager/addOrUpdatePack.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 删除套餐
export function apiPackDel (params) {
  return req({
    url: 'admin/packManager/deleteAppPackageByPackId.do',
    method: 'POST',
    params
  })
}

// 商品大小类
export function apiCommoditySort (par) {
  return req({
    url: '/admin/appManager/appClassifyPagedResult.do',
    method: 'GET',
    params: par
  })
}
// 服务环节
export function apiProcessList (par) {
  return req({
    url: 'admin/appManager/queryServiceStepsByAppId.do',
    method: 'GET',
    params: par
  })
}

// 服务环节保存
export function apiProcessSave (par) {
  return req({
    url: 'admin/appManager/saveAppServiceStep.do',
    method: 'POST',
    data: par
  })
}
// 服务环节完结
export function apiProcessOver (par) {
  return req({
    url: 'admin/appManager/saveCompleteAppServiceStep.do',
    method: 'GET',
    params: par
  })
}

// 7.15.商品服务角色设置时下拉角色列表
export function apiProcessRoleList (par) {
  return req({
    url: 'admin/appRoleManager/queryListByQuery.do',
    method: 'POST',
    data: par
  })
}

// 7.14.商品服务角色设置
export function apiProcessRoleSave (par) {
  return req({
    url: 'admin/appManager/saveAppRoleRelates.do',
    method: 'POST',
    data: par
  })
}

// 商品环节明细
export function apiProcessDetail (par) {
  return req({
    url: '/admin/appManager/getServiceStepById.do',
    method: 'GET',
    params: par
  })
}

