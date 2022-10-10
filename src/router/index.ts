import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import FirstRecord from '@/views/function/record/firstRecord/FirstRecord.vue';
import LoginPage from '@/views/login/LoginPage.vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getToken } from '@/myConfig/auth.js'
import store from "@/store"; // 验权

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/firstRecord',
    name: 'FirstRecord',
    component: FirstRecord
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const whiteList = ['/login'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     // 当获取到token时将页面跳转到主页面
//     if (to.path === '/login') {
//       next({ path: '/' })
//     } else {
//       // 判断是否获取到id值 ，如果没有则请求获取用户信息
//       if (store.getters.id === null) {
//         store.dispatch('GetInfo').then(res => { // dispatch调用的时actions， commit调用的mutations
//           next()
//         }).catch((err) => {
//           store.dispatch('FedLogOut').then(() => {
//             //Message.error(err || 'Verification failed, please login again')
//             next({ path: '/' })
//           })
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
//     }
//   }
// })

export default router
