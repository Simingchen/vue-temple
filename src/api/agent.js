import req from '@/utils/req'
/*
 代理商管理
*/

// 列表查询
export function apiAgentList (par) {
  return req({
    url: 'admin/agentManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 详情查询
export function apiAgentDetail (par) {
  return req({
    url: 'admin/agentManager/agentDetail.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
// 10.1.新增/修改代理商
export function apiAgentEdit (par) {
  return req({
    url: 'admin/agentManager/addOrUpdateAgent.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 10.2.代理商名称唯一性校验
export function apiAgentUniqueCheck (par) {
  return req({
    url: 'admin/agentManager/checkAgentNameUnique.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}

// 10.7.删除代理商附件信息
export function apiAgentAttachDel (par) {
  return req({
    url: 'admin/agentManager/agentAttachDelete.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}

// 附件列表
export function apiAgentAttachList (par) {
  return req({
    url: 'admin/agentManager/attachPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 代理商查询合同列表
export function apiAgentContractList (par) {
  return req({
    url: 'admin/contractManager/contractPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 账单总额
export function apiAgentBillSummary (par) {
  return req({
    url: 'admin/billManager/statisticsAgentBillsAmount.do',
    method: 'POST',
    params: Object.assign({}, par)
  })
}

// 获取代理商首页本月新增合同及累计合同数量数据
export function queryAgentContractStatistics (id) {
  return req({
    url: 'admin/contractManager/queryAgentContractStatistics.do?agent_id=' + id,
    method: 'GET'
  })
}

// 获取代理商首页本月新增订单及累计订单数量数据
export function queryAgentOrderStatistics (id, idc) {
  return req({
    url: 'admin/orderManager/queryAgentOrderStatistics.do?agent_id=' + id + '&create_user_id=' + idc,
    method: 'GET'
  })
}
