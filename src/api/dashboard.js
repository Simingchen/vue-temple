import req from '@/utils/req'
/*
 内部门户首页
*/
// 栗子可删
export function homePageResult (par) {
  return req({
    url: 'outerService/agreementManager/homePageResult.do',
    method: 'POST'
  })
}
