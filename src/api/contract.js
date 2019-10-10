import req from '@/utils/req'
/*
 合同管理
*/

// 合同列表
export function contractPagedResult (par) {
  return req({
    url: 'admin/contractManager/contractPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 删除合同
export function apiDelContract (par) {
  return req({
    url: 'admin/contractManager/deleteContract.do',
    method: 'POST',
    params: Object.assign({}, par)
  })
}

// 5.7.删除合同附件
export function deleteAttach (par) {
  return req({
    url: 'admin/contractManager/deleteAttach.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 5.7.下载/预览合同附件
export function downloadAttach (par) {
  return req({
    url: 'admin/contractManager/downloadAttach.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 新增/修改合同
export function addOrUpdateContract (par) {
  return req({
    url: 'admin/contractManager/addOrUpdateContract.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 查看合同详情
export function apiContractDetail (par) {
  return req({
    url: 'admin/contractManager/viewContractDetail.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 合同审核列表
export function contractCheckList (par) {
  return req({
    url: 'admin/contractManager/contractCheckList.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 合同审核记录
export function contractCheckPagedResult (par) {
  return req({
    url: 'admin/contractManager/contractCheckPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 合同审核
export function approvalContract (par) {
  return req({
    url: 'admin/contractManager/approvalContract.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 新增合同
export function apiContractAdd (par) {
  return req({
    url: 'admin/contractManager/addOrUpdateContract.do',
    method: 'POST',
    timeout: 10000, // 合同保存比较缓慢个别处理超时
    data: Object.assign({}, par)
  })
}

export function apiContractNoRelateBo (par) {
  return req({
    url: 'admin/contractManager/getNoRelateBo2ContractList.do',
    method: 'GET',
    params: par
  })
}
