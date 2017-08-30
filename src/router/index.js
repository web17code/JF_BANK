import Vue from 'vue'
import Router from 'vue-router'
import P_Home from '../pages/P_Home.vue'
import P_Login from '../pages/P_Login.vue'
import TeacherList from '../pages/TeacherList.vue'
import StudentList from '../pages/StudentList.vue'
import Application from '../pages/Application.vue'
import ApplicationShow from '../pages/ApplicationShow.vue'
import ApplicationDetail from '../pages/ApplicationDetail.vue'
import Transfer from '../pages/Transfer.vue'
import error from '../pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ['Transfer','跳转'],
      component:Transfer
    },
    {
      path: '/P_Home',
      name: ['P_Home','主页'],
      component:P_Home
    },
    {
      path:'/P_Login',
      name: ['P_Login','登录'],
      component:P_Login
    },
    {
      path:'/TeacherList',
      name: ['TeacherList','教师管理'],
      component:TeacherList
    },
    {
      path:'/StudentList',
      name: ['StudentList','学生管理'],
      component:StudentList
    },
    {
      path:'/Application',
      name: ['Application','应用管理'],
      component:Application
    },
    {
      path:'/ApplicationShow',
      name: ['ApplicationShow','应用中心'],
      component:ApplicationShow
    },
    {
      path:'/ApplicationDetail',
      name: ['ApplicationDetail','应用详情'],
      component:ApplicationDetail
    },
    {
      path:'/*',
      name: ['error','错误页面'],
      component:error
    }
  ]
})
