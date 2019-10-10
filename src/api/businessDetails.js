/* 商机管理 */
import req from '@/utils/req'

// 查询商机详情
export function viewDetail (id) {
  return req({
    url: 'admin/boManager/viewDetail.do?bo_id=' + id,
    method: 'POST'
  })
}
// 查询商机基本信息详情
export function viewBoInfoDetail (id) {
  return req({
    url: 'admin/boManager/viewBoInfoDetail.do?bo_id=' + id,
    method: 'POST',
    data: Object.assign({
    })
  })
}
// 查询商机详情
export function apiBusinessDetail (par) {
  return req({
    url: 'admin/boManager/viewDetail.do',
    method: 'POST',
    params: par
  })
}

// 商机新增、编辑
export function addOrUpdateBoInfo (par) {
  return req({
    url: 'admin/boManager/addOrUpdateBoInfo.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机唯一性校验
export function checkUniqueBo (pra) {
  return req({
    url: 'admin/boManager/checkUniqueBo.do',
    method: 'POST',
    data: Object.assign({
    }, pra)
  })
}

// 查询私海容量接口
export function queryPrivateCapacityByUserId (id, jgid) {
  return req({
    url: 'admin/boManager/queryPrivateCapacityByUserId.do?user_id=' + id + '&agency_id=' + jgid,
    method: 'POST',
    data: Object.assign({
    })
  })
}

// 获取商机联系人列表
export function queryBoLinkmans (id) {
  return req({
    url: 'admin/boManager/queryBoLinkmans.do?bo_id=' + id,
    method: 'POST',
    data: Object.assign({
    })
  })
}

// 获取商机联系人详情
export function viewLinkmanDetail (id) {
  return req({
    url: 'admin/boManager/viewLinkmanDetail.do?link_id=' + id,
    method: 'GET',
    data: Object.assign({
    })
  })
}

// 新增、编辑商机联系人
export function addOrUpdateLinkman (pra) {
  return req({
    url: 'admin/boManager/addOrUpdateLinkman.do',
    method: 'POST',
    data: Object.assign({
    }, pra)
  })
}

// 获取商机动态数据列表
export function queryBoProcessRecord (id) {
  return req({
    url: 'admin/boManager/queryBoProcessRecord.do?bo_id=' + id,
    method: 'POST',
    data: Object.assign({
    })
  })
}

// 获取
export function queryAppClassifyAndAppList (pra) {
  return req({
    url: 'admin/appManager/queryAppClassifyAndAppList.do',
    method: 'POST',
    data: Object.assign({
    }, pra)
  })
}

// 获取
export function viewFollowDetail (id) {
  return req({
    url: 'admin/boManager/viewFollowDetail.do?bo_id=' + id,
    method: 'POST'
  })
}
