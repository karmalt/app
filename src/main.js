import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import Sponge from '@/assets/1.gif'
Vue.use(VueLazyload, {
  //懒加载默认图
  loading: Sponge,
})
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
//引入路由
import router from '@/router'
//引入仓库
import store from './store'
import '@/mock/mockServe'
//引入样式
import 'swiper/css/swiper.css'
//统一接口api文件夹里面全部请求函数
import * as API from '@/api'

new Vue({
  render: (h) => h(App),
  //全局事件$bus总线配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由：底下的写法是KV一只省略V
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  store,
}).$mount('#app')
