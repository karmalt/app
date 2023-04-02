//引入Vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
//引入store
import store from '@/store'
//使用插件
Vue.use(VueRouter)

// Vue.config.productionTip = false
//重写push|replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

let router = new VueRouter({
  //配置路由
  routes,
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    //返回的y=0代表在滚动条最上方
    return { y: 0 }
  },
})

//全局前置守卫
router.beforeEach(async (to, from, next) => {
  //用户登录了才会有token,未登录没有
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/register') {
      next('/home')
    } else {
      //已经登录了，访问其他页面
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          //token失效，清除token，重新登录
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    //未登录不能去交易相关
    if (to.path.indexOf('/trade') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1) {
      //将想去又没去的路径用query参数传递到路径
      next('/login?redirect=' + to.path)
    } else {
      next()
    }
  }
})

export default router
