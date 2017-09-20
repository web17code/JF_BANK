import Vue from 'vue'
import Router from 'vue-router'
import P_Home from '../pages/P_Home.vue'
import P_Login from '../pages/P_Login.vue'
import AdminIndex from '../pages/AdminIndex.vue'
import PutOnList from '../pages/PutOnList.vue'
import PutOnDetail from '../pages/PutOnDetail.vue'
import TeacherList from '../pages/TeacherList.vue'
import TeacherDetail from '../pages/TeacherDetail.vue'
import StudentList from '../pages/StudentList.vue'
import StudentDetail from '../pages/StudentDetail.vue'
import Application from '../pages/Application.vue'
import ApplicationShow from '../pages/ApplicationShow.vue'
import ApplicationDetail from '../pages/ApplicationDetail.vue'
import userCount from '../pages/userCount.vue'
//import userCount_T from '../pages/userCount_T.vue'
import userCount_S from '../pages/userCount_S.vue'
import Transfer from '../pages/Transfer.vue'
import error from '../pages/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ['Transfer', '跳转'],
      component: Transfer
    },
    {
      path: '/P_Home',
      name: ['P_Home', '主页'],
      component: P_Home
    },
    {
      path: '/P_Login',
      name: ['P_Login', '登录'],
      component: P_Login
    },
    {
      path: '/AdminIndex',
      name: ['AdminIndex', '首页'],
      component: AdminIndex
    },
    {
      path: '/userCount',
      name: ['userCount', '个人账户'],
      component: userCount
    },
    {
      path: '/userCount_S',
      name: ['userCount_S', '个人账户'],
      component: userCount_S
    },
    {
      path: '/PutOnList',
      name: ['PutOnList', '投放列表'],
      component: PutOnList
    },
    {
      path: '/PutOnDetail',
      name: ['PutOnDetail', '投放明细'],
      component: PutOnDetail
    },
    {
      path: '/TeacherList',
      name: ['TeacherList', '教师管理'],
      component: TeacherList
    },
    {
      path: '/TeacherDetail',
      name: ['TeacherDetail', '个人详情'],
      component: TeacherDetail
    },
    {
      path: '/StudentList',
      name: ['StudentList', '学生管理'],
      component: StudentList
    },
    {
      path: '/StudentDetail',
      name: ['StudentDetail', '学生详情'],
      component: StudentDetail
    },
    {
      path: '/Application',
      name: ['Application', '应用管理'],
      component: Application
    },
    {
      path: '/ApplicationShow',
      name: ['ApplicationShow', '应用中心'],
      component: ApplicationShow
    },
    {
      path: '/ApplicationDetail',
      name: ['ApplicationDetail', '应用详情'],
      component: ApplicationDetail
    },
    {
      path: '/*',
      name: ['error', '错误页面'],
      component: error
    }
  ]
})
