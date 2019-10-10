import req from '@/utils/req'

// 新增/修改用户信息
// export function addOrUpdateUser (par) {
//   return req({
//     url: 'outerService/userManager/addOrUpdateUser.do',
//     method: 'POST',
//     data: Object.assign({
//     }, par)
//   })
// }
// 获取系统行政区划
// export function administrativeArea (pageQueryVO) {
//   // 读取缓存
//   const administrativeArea = window.localStorage.getItem('administrativeArea')
//   if (administrativeArea && administrativeArea !== '') {
//     return Promise.resolve(JSON.parse(administrativeArea))
//   }
//   return req({
//     url: 'outerService/public/administrativeArea.do',
//     method: 'GET'
//   })
// }

// 获取省、市
export function administrativeArea (par) {
  // 读取缓存
  const administrativeArea = window.localStorage.getItem('administrativeArea')
  if (administrativeArea && administrativeArea !== '') {
    return Promise.resolve(JSON.parse(administrativeArea))
  }
  return req({
    // url: 'http://47.107.46.219:7300/mock/5c9c35ba77bdc300869e2a6e/longda/admin/publicService/queryAreaNonStreet.do',
    url: 'admin/publicService/queryAreaNonStreet.do',
    method: 'POST'
  })
}

// 获取区/街
export function queryAreaStreet (par) {
  // 读取缓存
  const queryAreaStreet = window.localStorage.getItem('queryAreaStreet')
  if (queryAreaStreet && queryAreaStreet !== '') {
    return Promise.resolve(JSON.parse(queryAreaStreet))
  }
  return req({
    url: `admin/publicService/queryAreaStreet.do?areaLevel=${par.areaLevel}&districtCode=${par.districtCode}`,
    // url: `http://47.107.46.219:7300/mock/5c9c35ba77bdc300869e2a6e/longda/admin/publicService/queryAreaStreet.do`,
    method: 'POST'
  })
}
// // 修改用户密码
// export function updatePwd (id, oldpass, newpass) {
//   return req({
//     url: 'outerService/userManager/updatePwd.do?user_id=' + id + '&password_o=' + oldpass + '&password_n=' + newpass,
//     method: 'post'
//   })
// }

// 获取标签下拉接口
export function queryLabelByScence (id, scene) {
  return req({
    url: 'admin/labelManager/queryLabelByScence.do',
    method: 'POST',
    data: Object.assign({
      agency_id: id, // 代理商ID
      use_scene_code: scene // 标签场景
    })
  })
}

// 获取意向需求
export function queryOnlineApp (id) {
  return req({
    url: 'admin/appManager/queryOnlineApp.do',
    method: 'POST',
    data: Object.assign({
      agency_id: id // 代理商ID
    })
  })
}

// 获取销售阶段or商机来源
export function queryAgencyMetadata (id, code) {
  return req({
    url: 'admin/agencyMetadataManager/queryAgencyMetadata.do',
    method: 'POST',
    data: Object.assign({
      agency_id: id, // 代理商ID
      classify_code: code // 分类（SXJD、SJLY）
    })
  })
}
// 获取系统元数据admin/publicService/querySysMetadata.do
export function querySysMetadata () {
  return req({
    url: 'admin/publicService/querySysMetadata.do',
    method: 'GET'
  })
}
