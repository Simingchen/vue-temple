import req from '@/utils/req'

// 查询待办事项列表
export function todoItemList (par) {
  return req({
    url: 'admin/workbench/todoItemList.do',
    method: 'POST',
    data: Object.assign({
    }, par)
  })
}
