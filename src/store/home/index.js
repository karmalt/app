import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'
//home模块的小仓库reqFloorList
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList
  },
}
const actions = {
  //获取三级联动列表数据
  async getcategoryList({ commit }) {
    const result = await reqCategoryList()
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  //获取首页轮播图数据
  async getBannerList({ commit }) {
    const result = await reqBannerList()
    if (result.code == 200) {
      commit('BANNERLIST', result.data)
    }
  },
  //获取首页楼层数据
  async getFloorList({ commit }) {
    const result = await reqFloorList()
    if (result.code == 200) {
      commit('FLOORLIST', result.data)
    }
  },
}

const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
