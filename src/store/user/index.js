//登录与注册模块
import { reqGetCode, reqUserRegister, reqUseLogin, reqUserInfo, reqLogout } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
  code: '',
  token: getToken(),
  userInfo: {},
}
const mutations = {
  //保存验证码
  GETCODE(state, code) {
    state.code = code
  },
  //保存token
  USERLOGIN(state, token) {
    state.token = token
  },
  //保存用户信息
  USERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  //清除本地数据
  CLEAR(state) {
    //帮仓库中相关的用户信息清空
    state.token = ''
    state.userInfo = {}
    //本地存储数据清空
    removeToken()
  },
}
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone)
    if (result.code == 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //用户注册
  async userRegister(context, data) {
    await reqUserRegister(data)
  },
  //登录业务
  async userLogin({ commit }, data) {
    const result = await reqUseLogin(data)
    console.log(result)
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      //持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code == 200) {
      commit('USERINFO', result.data)
      return 'ok'
    }
  },
  //退出登录
  async userLogout({ commit }) {
    const result = await reqLogout()
    if (result.code == 200) {
      commit('CLEAR')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
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
