//search模块的小仓库
import { reqSearchInfo } from '@/api'
const state = {
  searchList: {},
}
const mutations = {
  SEARCHINFO(state, searchList) {
    state.searchList = searchList
  },
}
const actions = {
  async getSearchInfo({ commit }, params = {}) {
    let result = await reqSearchInfo(params)
    if (result.code == 200) {
      commit('SEARCHINFO', result.data)
    }
  },
}
//计算属性，为了简化仓库中的数据而生
const getters = {
  //当前形参state是当前仓库里的state，不是大state
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
}
