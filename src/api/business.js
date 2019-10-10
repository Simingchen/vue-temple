import req from '@/utils/req' // easyMock
/*
 商机模块
*/
// 商机列表
export function pagedResult (par) {
  return req({
    url: 'admin/boManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 公海商机列表
export function publicSeaPagedResult (par) {
  return req({
    url: 'admin/boManager/publicSeaPagedResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 私海商机列表
export function privateSeaPagedResult (par) {
  return req({
    url: 'admin/boManager/privateSeaPagedResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 商机设置 -销售阶段/商机来源查询
export function queryAgencyMetadata (par) {
  return req({
    url: 'admin/agencyMetadataManager/queryAgencyMetadata.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机设置 -销售阶段/商机来源新增删除
export function addAgencyMetadata (par) {
  return req({
    url: 'admin/agencyMetadataManager/addAgencyMetadata.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机设置 -规则设置查询
export function boRulesSettingDetail (id) {
  return req({
    url: 'admin/boManager/boRulesSettingDetail.do?agency_id=' + id,
    method: 'GET'
  })
}
// 商机设置 -规则设置编辑
export function updateRulesSetting (par) {
  return req({
    url: 'admin/boManager/updateRulesSetting.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 商机设置 -查询管辖区域
export function queryArea2Sea (id) {
  return req({
    url: 'admin/boManager/queryArea2Sea.do?group_id=' + id,
    method: 'GET'
  })
}
// 商机设置 -设置区域
export function saveArea2Sea (par) {
  return req({
    url: 'admin/boManager/saveArea2Sea.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 商机设置 -验证区域
export function validAreaRepeat (id, code) {
  return req({
    url: 'admin/boManager/validAreaRepeat.do?agency_id=' + id + '&area_code=' + code,
    method: 'GET'
  })
}
// 商机设置 -删除区域
export function deleteArea2Sea (par) {
  return req({
    url: 'admin/boManager/deleteArea2Sea.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 查询私海容量接口
export function queryPrivateCapacityByUserId (id, jgid) {
  return req({
    url: 'admin/boManager/queryPrivateCapacityByUserId.do?user_id=' + id + '&agency_id=' + jgid,
    method: 'GET'
  })
}

// 商机拾取
export function savePick (par) {
  return req({
    url: 'admin/boManager/savePick.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机关闭
export function saveClose (par) {
  return req({
    url: 'admin/boManager/saveClose.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机删除admin/boManager/deleteBo.do
export function deleteBo (id) {
  return req({
    url: 'admin/boManager/deleteBo.do?bo_id=' + id,
    method: 'POST'
  })
}

// 商机退回
export function saveReturn (par) {
  return req({
    url: 'admin/boManager/saveReturn.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机收回
export function saveRevoke (par) {
  return req({
    url: 'admin/boManager/saveRevoke.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 商机下发
export function saveDownSend (par) {
  return req({
    url: 'admin/boManager/saveDownSend.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 商机分配
export function saveAllot (par) {
  return req({
    url: 'admin/boManager/saveAllot.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
// 商机成交
export function apiNicheDeal (par) {
  return req({
    url: 'admin/boManager/relateBo2Contract.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 合同关联列表
export function apiContractRelateList (par) {
  return req({
    url: 'admin/boManager/queryRelateContract.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 3.64.查询关联合同
export function apiContractList (par) {
  return req({
    url: 'admin/boManager/getContractNameListByBoId.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}

// 3.64.查询企好名列表
export function apiCheckCompanyList (par) {
  return req({
    url: 'admin/boManager/qccInfoPagedResult.do',
    method: 'POST',
    data: par
  })
}
