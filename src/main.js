// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from  'vue-resource'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/common.css'
import utils from "./utils/utils.js";

Vue.config.productionTip = false
//window.getHost = "http://192.168.1.217:80/school-bank-web/";
window.getHost = "http://192.168.1.131/school-bank-web/";
//window.getHost = "http://192.168.1.111/bank/";

window.MenuData = [{menuName: "initMenu", menuUrl: "", menuIcon: ""}];
Vue.prototype.utils = utils;
Vue.use(iView);//引入UI框架
Vue.use(resource)//引入路由
Vue.http.interceptors.push(function(request, next) {//拦截器
  // 跨域携带cookie
  request.credentials = true;
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
