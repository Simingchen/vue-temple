// import req from '@/utils/mockreq'
import req from '@/utils/req'
/*
 发票
*/

// 查询发票列表
export function invoicePagedResult (par) {
  return req({
    url: 'admin/financeManager/invoicePagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 申请并开具发票
export function applyAndSendInvoice (par) {
  return req({
    url: 'admin/financeManager/applyAndSendInvoice.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// admin/financeManager/queryInvoiceInfo.do
// 获取发票详情
export function queryInvoiceInfo (par) {
  return req({
    url: 'admin/financeManager/queryInvoiceInfo.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 开具发票（针对已申请的发票进行开具）admin/financeManager/sendInvoice.do
export function sendInvoice (par) {
  return req({
    url: 'admin/financeManager/sendInvoice.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 批量开具发票（针对已申请的发票进行开具）
export function batchSendInvoice (par) {
  return req({
    url: 'admin/financeManager/batchSendInvoice.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 发票红冲admin/financeManager/invoiceRedPunch.do
export function invoiceRedPunch (par) {
  return req({
    url: 'admin/financeManager/invoiceRedPunch.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
