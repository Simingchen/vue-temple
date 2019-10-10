// import req from '@/utils/mockreq'
import req from '@/utils/req'
// const mockreq = 'http://47.107.46.219:7300/mock/5c9c35ba77bdc300869e2a6e/longda/'

/*
 组织架构管理
*/

// 查询机构组织树
export function loadGroupTree (id, gid, type) {
  if (gid !== '') {
    return req({
      url: 'admin/groupManager/loadGroupTree.do?entity_id=' + id + '&group_id=' + gid + '&entity_type=' + type,
      method: 'GET'
    })
  } else {
    return req({
      url: 'admin/groupManager/loadGroupTree.do?entity_id=' + id + '&entity_type=' + type,
      method: 'GET'
    })
  }
}

// 新增/修改部门信息
export function addOrUpdateGroup (par) {
  return req({
    url: 'admin/groupManager/addOrUpdateGroup.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 查询用户列表
export function userPagedResult (par) {
  return req({
    url: 'admin/userManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 新增/修改用户
export function addOrUpdateUser (par) {
  return req({
    url: 'admin/userManager/addOrUpdateUser.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 登录账号唯一校验
export function checkLoginNameUnique (agencyId, loginName) {
  return req({
    url: 'admin/userManager/checkLoginNameUnique.do?login_name=' + loginName,
    method: 'GET',
    data: Object.assign({
    })
  })
}
// 手机号码唯一性校验
export function checkmobilePhoneUnique (agencyId, mobilePhone) {
  return req({
    url: 'admin/userManager/checkmobilePhoneUnique.do?agency_id=' + agencyId + '&mobile_phone' + mobilePhone,
    method: 'GET',
    data: Object.assign({
    })
  })
}
// 人员工号唯一性校验
export function checkUserCodeUnique (userCode) {
  return req({
    url: 'admin/userManager/checkUserCodeUnique.do?user_code=' + userCode,
    method: 'GET',
    data: Object.assign({
    })
  })
}

// 查询用户详情信息
export function userDetail (id, entId, entType) {
  return req({
    url: 'admin/userManager/userDetail.do?user_id=' + id + '&entity_id=' + entId + '&entity_type=' + entType,
    method: 'GET',
    data: Object.assign({
    })
  })
}

// 用户 停用/启用
export function userStopAndEnable (id, isEnable) {
  return req({
    url: 'admin/userManager/userStopAndEnable.do?user_id=' + id + '&is_enable=' + isEnable,
    method: 'POST'
  })
}

// 重置密码
export function resetPwd (tel, id) {
  return req({
    url: 'admin/userManager/resetPwd.do?mobile_phone=' + tel + '&user_id=' + id,
    method: 'POST'
  })
}

// 修改用户密码
export function updatePwd (id, oldpass, newpass) {
  return req({
    url: 'admin/userManager/updatePwd.do?user_id=' + id + '&password_o=' + oldpass + '&password_n=' + newpass,
    method: 'POST'
  })
}

// 查询代账中介岗位含系统内置岗位与中介自定义岗位
export function listRoleAgency (id) {
  return req({
    url: 'admin/roleManager/listRoleAgency.do?agencyId=' + id,
    method: 'GET'
  })
}

// 查询岗位分配菜单
export function listRoleMenu (id, num) {
  return req({
    url: 'admin/roleManager/listRoleMenu.do?roleId=' + id + '&targetObj=' + num,
    method: 'GET'
  })
}

// 分配岗位菜单
export function addRoleMenu (par) {
  return req({
    url: 'admin/roleManager/addRoleMenu.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 删除分配岗位菜单
export function removeRoleMenu (par) {
  return req({
    url: 'admin/roleManager/removeRoleMenu.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 新增或修改自定义岗位信息
export function addOrUpdateRoleCustomize (par) {
  return req({
    url: 'admin/roleManager/addOrUpdateRoleCustomize.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 删除自定义岗位信息
export function deleteRoleCustomize (id) {
  return req({
    url: 'admin/roleManager/deleteRoleCustomize.do?roleId=' + id,
    method: 'POST',
    data: Object.assign({
    })
  })
}

// 用户分配岗位
export function userRoleRelate (par) {
  return req({
    url: 'admin/userRoleManager/userRoleRelate.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 用户岗位查询
export function listUserRole (id) {
  return req({
    url: 'admin/userRoleManager/listUserRole.do?userId=' + id,
    method: 'GET',
    data: Object.assign({
    })
  })
}
// 6.27.获取岗位用户
export function apiManagerList (par) {
  return req({
    url: 'admin/userRoleManager/listGroupRoleUsers.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 6.29.获取列表获取组织下用户信息
export function listGroupUser (par) {
  return req({
    url: 'admin/userManager/listGroupUser.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 6.30.指派列表获取组织下岗位用户
export function pagedResultGroupRoleUser (par) {
  return req({
    url: 'admin/userRoleManager/pagedResultGroupRoleUser.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.29.保存服务指派
export function saveServiceAssign (par) {
  return req({
    url: 'admin/orderAssignManager/saveServiceAssign.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}

// 5.30.保存指派客户经理
export function saveClientManagerAssign (par) {
  return req({
    url: 'admin/orderAssignManager/saveClientManagerAssign.do',
    method: 'POST',
    data: Object.assign({}, par)
  })
}
// 用户信息
export function userInfo (id) {
  return req({
    url: 'admin/userManager/userInfo.do?user_id=' + id,
    method: 'GET',
    data: Object.assign({
    })
  })
}

// 用户信息
export function apiCurPartList (par) {
  return req({
    url: 'admin/userManager/getUserInfoByManager.do',
    method: 'Post',
    data: par
  })
}
