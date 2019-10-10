import req from '@/utils/req'

//	获取任务列表
export function pagedResult (par) {
  return req({
    url: 'admin/taskManager/pagedResult.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 新增任务
export function addTask (par) {
  return req({
    url: 'admin/taskManager/addTask.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}

// 删除任务
export function deleteTask (id) {
  return req({
    url: 'admin/taskManager/deleteTask.do',
    method: 'POST',
    data: Object.assign({
      task_id: id, // 任务id
      modify_user_id: JSON.parse(localStorage.umUser).user_id, // 用户id
      user_name: JSON.parse(localStorage.umUser).user_name
    })
  })
}

// 确认接收任务
export function receiveTask (id, receiveTask) {
  return req({
    url: 'admin/taskManager/receiveTask.do',
    method: 'POST',
    data: Object.assign({
      task_id: id, // 任务id
      is_receive: receiveTask, // 是否接收,Y
      modify_user_id: JSON.parse(localStorage.umUser).user_id // 用户id
    })
  })
}

//	获取任务详情
export function taskdetail (id) {
  return req({
    url: 'admin/taskManager/taskDetail.do?task_id=' + id,
    method: 'GET'
  })
}

// 新增任务跟进
export function addTaskFollow (par) {
  return req({
    url: 'admin/taskManager/addTaskFollow.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
