import Vue from 'vue'
import Router from 'vue-router'
import P_Home from '../pages/P_Home.vue'
import p_Login from '../pages/P_Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'P_Home',
      component:P_Home
    },
    {
      path:'/p_Login',
      name: 'p_Login',
      component:p_Login
    }
  ]
})
