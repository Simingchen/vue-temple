import req from '@/utils/req'
// const mockreq = 'http://47.107.46.219:7300/mock/5c9c35ba77bdc300869e2a6e/longda/'

//	获取服务过程列表
export function queryServicePageResult (par) {
  return req({
    url: 'admin/serviceProcess/queryServicePageResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

//	服务过程列表统计数量查询
export function queryServiceTotalSize (par) {
  return req({
    url: 'admin/serviceProcess/queryServiceTotalSize.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

//	完成服务环节
export function saveCompleteServiceStep (par) {
  return req({
    url: 'admin/serviceProcess/saveCompleteServiceStep.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

//	12.12.办理详情页面加载（当前环节）
export function loadServiceStepDetail (service_instance_id, step_id, service_process_id) {
  return req({
    url: `admin/serviceProcess/loadServiceStepDetail.do?service_instance_id=${service_instance_id}&step_id=${step_id}&service_process_id=${service_process_id}`,
    method: 'GET'
    // data: Object.assign({
    // }, par)
  })
}

//	12.13.服务过程进度条页面加载
export function loadServiceProcessBarDetail (service_instance_id, service_process_id) {
  return req({
    url: `admin/serviceProcess/loadServiceProcessBarDetail.do?service_instance_id=${service_instance_id}&service_process_id=${service_process_id}`,
    method: 'GET'
    // data: Object.assign({
    // }, par)
  })
}

// 12.14.根据商品id订单明细id获取服务过程实例
export function getServiceProcessByDetailIdAndAppId (detail_id, app_id) {
  return req({
    url: `admin/serviceProcess/getServiceProcessByDetailIdAndAppId.do?detail_id=${detail_id}&app_id=${app_id}`,
    method: 'GET'
    // data: Object.assign({
    // }, par)
  })
}
