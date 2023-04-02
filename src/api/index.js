//当前这个模块，api进行统一管理
import requests from './request'
import mockRequests from './mockRequest'

//三级联动的接口
// /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => requests({ url: '/api/product/getBaseCategoryList', method: 'get' })

//获取banner(home首页轮播图接口)
export const reqBannerList = () => mockRequests.get('/banner')
//获取floor数据(home首页楼层接口)
export const reqFloorList = () => mockRequests.get('/floor')
//获取搜索模块数据/api/list
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/

// export const reqSearchInfo = (params) => requests({ url: '/api/list', method: 'post', data: params })
export const reqSearchInfo = (params) => requests.post('/api/list', params)
//产品详情数据获取 /api/item/{ skuId }
export const reqGoodsInfo = (skuId) => requests.get(`/api/item/${skuId}`)
//将产品添加到购物车中，或者更新某一个产品个数/api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests.post(`/api/cart/addToCart/${skuId}/${skuNum}`)
///api/cart/cartList 请求购物车列表数据
export const reqCartList = () => requests.get('/api/cart/cartList')
///api/cart/deleteCart/{skuId}删除购物车商品
export const reqDeleteCartById = (skuId) => requests.delete(`/api/cart/deleteCart/${skuId}`)
///api/cart/checkCart/{skuID}/{isChecked} 修改商品选择状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests.get(`/api/cart/checkCart/${skuId}/${isChecked}`)
// /api/user/passport/sendCode/{phone}获取验证码接口
export const reqGetCode = (phone) => requests.get(`/api/user/passport/sendCode/${phone}`)
// /api/user/passport/register注册接口
export const reqUserRegister = (data) => requests.post(`/api/user/passport/register`, data)
// /api/user/passport/login登录接口
export const reqUseLogin = (data) => requests.post('/api/user/passport/login', data)
// /api/user/passport/auth/getUserInfo 获取用户信息接口（需要携带token）
export const reqUserInfo = () => requests.get('/api/user/passport/auth/getUserInfo')
//退出登录 /api/user/passport/logout
export const reqLogout = () => requests.get('/api/user/passport/logout')
//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqUserAddress = () => requests.get('/api/user/userAddress/auth/findUserAddressList')
//获取订单交易页面信息/api/order/auth/trade
export const reqOrderInfo = () => requests.get('/api/order/auth/trade')
//提交订单的接口 /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests.post(`/api/order/auth/submitOrder?tradeNo=${tradeNo}`, data)
//获取订单支付信息 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests.get(`/api/payment/weixin/createNative/${orderId}`)
//获取支付订单状态/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayState = (orderId) => requests.get(`/api/payment/weixin/queryPayStatus/${orderId}`)
//获取个人中心我的订单数据 /api/order/auth/{page}/{limit}
export const reqMyOrder = (page, limit) => requests.get(`/api/order/auth/${page}/${limit}`)
