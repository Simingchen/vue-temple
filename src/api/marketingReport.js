import req from '@/utils/req'
// import req from '@/utils/mockreq'

// 统计运营中心、门店营业收总额、存量客户数量、存量用户数量
export function overView (par) {
  return req({
    url: 'reportForm/operationForm/overView.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 流失率、满意度、客户经理人均客户、人均营收、记账会计人均客户指标
export function statQuotaByMonth (par) {
  return req({
    url: 'reportForm/operationForm/statQuotaByMonth.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//  统计指定年份的各月份存量客户、营收金额
export function statRevenueByMonth (par) {
  return req({
    url: 'reportForm/operationForm/statRevenueByMonth.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//  统计指定月份各门店存量客户、营收金额
export function statRevenueByGroup (par) {
  return req({
    url: 'reportForm/operationForm/statRevenueByGroup.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定月份及组织（运营中心/门店）各产品营收情况
export function statRevenueByProduct (par) {
  return req({
    url: 'reportForm/operationForm/statRevenueByProduct.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定月份各门店客户变动分析（净增长）
export function statNetGrowth (par) {
  return req({
    url: 'reportForm/operationForm/statNetGrowth.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定门店所有客户经理营收情况
export function statRevenueByClientManager (par) {
  return req({
    url: 'reportForm/operationForm/statRevenueByClientManager.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定的部门销售收入、新增客户数量、业务员存量数量
export function overViewM (par) {
  return req({
    url: 'reportForm/marketingForm/overView.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定部门商机各销售阶段数量
export function statBoByStage (par) {
  return req({
    url: 'reportForm/marketingForm/statBoByStage.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   统计指定部门各个渠道订单销售金额
export function statSalesAmountByChannel (par) {
  return req({
    url: 'reportForm/marketingForm/statSalesAmountByChannel.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   2.11.	统计年度销售趋势
export function statAnnualSalesTrend (par) {
  return req({
    url: 'reportForm/marketingForm/statAnnualSalesTrend.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   2.12.	统计销售业绩
export function statSalesPerformance (par) {
  return req({
    url: 'reportForm/marketingForm/statSalesPerformance.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   2.13.	统计销售报表各项指标
export function statQuotaByMonthM (par) {
  return req({
    url: 'reportForm/marketingForm/statQuotaByMonth.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

//   2.14.	统计销售渠道成本指标
export function statChannelCost (par) {
  return req({
    url: 'reportForm/marketingForm/statChannelCost.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
