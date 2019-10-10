/* eslint-disable */
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/center/login.vue'), hidden: true }, // 登录
  { path: '/register', component: () => import('@/views/center/register.vue'), hidden: true }, // 注册
  { path: '/forgotpassword', component: () => import('@/views/center/forgotPassword.vue'), hidden: true }, // 忘记密码
  { path: '/401', component: () => import('@/views/center/401.vue'), hidden: true }
]

export const stateRouterMap = [
  { path: '/404', component: () => import('@/views/center/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]


export default new VueRouter({
  routes: constantRouterMap
})
