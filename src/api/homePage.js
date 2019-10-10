// import req from '@/utils/mockreq'
import req from '@/utils/req'

/*
 首页数据
*/

// 任务统计：完成、超期、待办
export function apiTaskStatistics (par) {
  return req({
    url: 'admin/personalForm/taskStatistics.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}

// 本月成交累计，本月商机跟进数
export function apiBusinessStatistics (par) {
  return req({
    url: 'admin/personalForm/businessStatistics.do',
    method: 'GET',
    params: Object.assign({}, par)
  })
}
