const business = {
  state: {
    businessData: {}, // 商机详情基本信息数据
    businessContacts: [], // 商机详情联系人列表数据
    followUpRecord: [], // 商机详情跟进记录数据
    salesStage: [], // 销售阶段下拉数据
    sourceOfBusiness: [], // 商机来源下拉数据
    dynamicRecord: [] // 动态记录
  },

  mutations: {
    SET_BUSINESSDATA: (state, businessData) => { // 商机详情基本信息数据
      state.businessData = businessData
    },
    SET_BUSINESSCONTACTS: (state, businessContacts) => { // 商机详情联系人列表数据
      state.businessContacts = businessContacts
    },
    SET_FOLLOWUPRECORD: (state, followUpRecord) => { // 商机详情跟进记录数据
      state.followUpRecord = followUpRecord
    },
    SET_SALESSTAGE: (state, salesStage) => { // 销售阶段下拉数据
      state.salesStage = salesStage
    },
    SET_SOURCEOFBUSINESS: (state, sourceOfBusiness) => { // 商机来源下拉数据
      state.sourceOfBusiness = sourceOfBusiness
    },
    SET_DYNAMICRECORD: (state, dynamicRecord) => { // 动态记录
      state.dynamicRecord = dynamicRecord
    }
  },

  actions: {
    businessData: ({ commit }, msg) => { // 商机详情基本信息数据
      commit('SET_BUSINESSDATA', msg)
    },
    businessContacts ({ commit }, msg) { // 商机详情联系人列表数据
      commit('SET_BUSINESSCONTACTS', msg)
    },
    followUpRecord ({ commit }, msg) { // 商机详情跟进记录数据
      commit('SET_FOLLOWUPRECORD', msg)
    },
    salesStage ({ commit }, msg) { // 销售阶段下拉数据
      commit('SET_SALESSTAGE', msg)
    },
    sourceOfBusiness ({ commit }, msg) { // 商机来源下拉数据
      commit('SET_SOURCEOFBUSINESS', msg)
    },
    dynamicRecord ({ commit }, msg) { // 动态记录
      commit('SET_DYNAMICRECORD', msg)
    }
  }
}

export default business
