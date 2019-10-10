// import req from '@/utils/mockreq'
import req from '@/utils/req'

/*
 账户管理
*/

// 查询代账中介客户、代理商、服务商虚拟账户信息
export function accountInfo (par) {
  return req({
    url: 'admin/accountManager/accountInfo.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 查询账户流水
export function accountFlow (par) {
  return req({
    url: 'admin/accountManager/accountFlowPagedResult.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
