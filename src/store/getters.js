const getters = {
  isWeChat: state => state.app.isWeChat,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  loading: state => state.loading.loading // 遮罩
}
export default getters
