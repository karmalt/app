import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'
const state = {
  cartList: [],
}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  },
}
const actions = {
  //获取购物车列表的数据
  async getShopCartList({ commit }) {
    const result = await reqCartList()
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  //删除购物车商品
  async deleteCartById(context, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //修改购物车的选中状态
  async updateCheckedById(context, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : ''
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
  //修改全部产品的选中状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let PromiseAll = []
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
}
