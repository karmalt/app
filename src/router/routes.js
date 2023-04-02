//路由的配置信息
export default [
  { path: '/', redirect: '/home', meta: { show: true } },
  { path: '/home', component: () => import('@/pages/Home'), meta: { show: true } },
  { path: '/search/:keyword?', component: () => import('@/pages/Search'), meta: { show: true }, name: 'search', props: true },
  { path: '/login', component: () => import('@/pages/Login'), meta: { show: false } },
  { path: '/register', component: () => import('@/pages/Register'), meta: { show: false } },
  { path: '/detail/:skuid', component: () => import('@/pages/Detail'), meta: { show: false } },
  { path: '/addcartsuccess', component: () => import('@/pages/AddCartSuccess'), meta: { show: false }, name: 'addcartsuccess' },
  { path: '/shopcart', component: () => import('@/pages/ShopCart'), meta: { show: false } },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    meta: { show: false },
    //路由导航守卫
    beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    },
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    meta: { show: false }, //路由导航守卫
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    },
  },
  { path: '/paysuccess', component: () => import('@/pages/PaySuccess'), meta: { show: false } },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    meta: { show: false },
    children: [
      { path: '/center', redirect: '/center/myorder' },
      { path: 'myorder', component: () => import('@/pages/Center/myOrder') },
      { path: 'grouporder', component: () => import('@/pages/Center/groupOrder') },
    ],
  },
]
