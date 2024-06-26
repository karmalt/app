import { reqUserAddress, reqOrderInfo } from '@/api'
const state = {
  address: [],
  orderInfo: {},
}
const mutations = {
  USERADRESS(state, address) {
    state.address = address
  },
  ORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo
  },
}
const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    const result = await reqUserAddress()
    if (result.code == 200) {
      commit('USERADRESS', result.data)
    }
  },
  //获取订单交易页面信息
  async getOrderInfo({ commit }) {
    const result = await reqOrderInfo()
    if (result.code == 200) {
      commit('ORDERINFO', result.data)
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
