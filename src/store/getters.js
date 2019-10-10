const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  stations: state => state.user.stations,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  setting: state => state.user.setting,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  businessData: state => state.business.businessData, // 商机详情基本信息数据
  businessContacts: state => state.business.businessContacts, // 商机详情联系人列表数据
  followUpRecord: state => state.business.followUpRecord, // 商机详情跟进记录数据
  salesStage: state => state.business.salesStage, // 销售阶段下拉数据
  sourceOfBusiness: state => state.business.sourceOfBusiness, // 商机来源下拉数据
  dynamicRecord: state => state.business.dynamicRecord, // 动态记录
  loading: state => state.loading.loading, // 遮罩
  serviceRow: state => state.service.serviceRow, // 服务列表
  tableHeight: state => state.tableHeight.height// 页面列表高度
}
export default getters
