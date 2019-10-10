// import req from '@/utils/mockreq'
import req from '@/utils/req'

/*
 账单管理
*/

// 5.7.账单查询
export function apiBillList (par) {
  return req({
    url: 'admin/billManager/billPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.8.账单详情查询
export function apiBillDetail (par) {
  return req({
    url: 'admin/billManager/viewBillDetail.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.13.新增账单
export function apiBillAdd (par) {
  return req({
    url: '/admin/billManager/addBill.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 514删除临时账单
export function apiBillDel (billId, userId) {
  return req({
    url: 'admin/billManager/deleteBill.do?bill_id=' + billId + '&user_id=' + userId,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}

// 5.30.查询订单是否欠费
export function queryNotPayByOrderId (order_id) {
  return req({
    url: 'admin/billManager/queryNotPayByOrderId.do?order_id=' + order_id,
    method: 'GET'
    // data: Object.assign({}, par)
  })
}
