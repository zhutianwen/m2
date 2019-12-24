// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = '/api'
Vue.prototype.$axios = axios

//引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



//引入vue 懒加载模块
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require('./images/loading.gif')
})


//引入阿里巴巴矢量图标
import './fonts/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
