import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
//封装临时游客身份模块
import { getUUId } from '@/utils/uuid_token.js'
const state = {
  goodsInfo: {},
  //游客的临时身份
  uuid_token: getUUId(),
}
const mutations = {
  GOODSINFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo
  },
}
const actions = {
  //获取产品信息
  async getGoodsInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('GOODSINFO', result.data)
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //不用commit,因为这是提交数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
}
//简化数据而生
const getters = {
  //加上{}判断是因为goodsList在请求没回来的时候是空对象，找不到里边的属性
  categoryView(state) {
    return state.goodsInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList() {
    return state.goodsInfo.spuSaleAttrList || []
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
}
