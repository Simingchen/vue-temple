// import req from '@/utils/mockreq'
import req from '@/utils/req'
/*
 财务管理
*/

// 查询代账中介收款池列表
export function receiptPoolPagedResult (par) {
  return req({
    url: 'admin/financeManager/receiptPoolPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 认领收款
export function claimReceiptPool (par) {
  return req({
    url: 'admin/financeManager/claimReceiptPool.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 收款退回
export function returnReceiptPool (par) {
  return req({
    url: 'admin/financeManager/returnReceiptPool.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
