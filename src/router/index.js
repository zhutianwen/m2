import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import recommenday from '@/views/recommenday'
import moreNewdish from '@/views/moreNewdish'




Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: index},
    {path: '/recommenday',name: 'recommenday',component: recommenday},
    {path: '/moreNewdish',name: 'moreNewdish',component: moreNewdish},
  ]
})
