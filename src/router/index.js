import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import login from '@/components/login'
import phone from '@/components/phone'
import password from '@/components/password'
import recommenday from '@/views/recommenday'
import moreNewdish from '@/views/moreNewdish'
import moreNewsongs from '@/views/moreNewsongs'
import songSheet from '@/views/songSheet'

import tuijian from '@/views/songSheet/tuijian'
import huayu from '@/views/songSheet/huayu'
import liuxing from '@/views/songSheet/liuxing'
import oumei from '@/views/songSheet/oumei'
import minyao from '@/views/songSheet/minyao'
import hanyu from '@/views/songSheet/hanyu'
import riyu from '@/views/songSheet/riyu'

import paihangbang from '@/views/paihangbang'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login',name: 'login',component: login},
    {path: '/password',name: 'password',component: password},
    {path: '/phone',name: 'phone',component: phone},
    {path:'/',redirect:'/index',components:index},
    {path: '/index',name: 'index',component: index},
    {path: '/recommenday',name: 'recommenday',component: recommenday},
    {path: '/moreNewdish',name: 'moreNewdish',component: moreNewdish},
    {path: '/moreNewsongs',name: 'moreNewsongs',component: moreNewsongs},
    {path: '/paihangbang',name: 'paihangbang',component: paihangbang},
   
    {
      path: '/songSheet',
      name:'songSheet',
      component: songSheet,
      children:[
        {path:'/songSheet/tuijian',component:tuijian},
        {path:'/songSheet/huayu',component:huayu},
        {path:'/songSheet/liuxing',component:liuxing},
        {path:'/songSheet/oumei',component:oumei},
        {path:'/songSheet/minyao',component:minyao},
        {path:'/songSheet/hanyu',component:hanyu},
        {path:'/songSheet/riyu',component:riyu},
        {path:'/songSheet',redirect: '/songSheet/tuijian'},
      ]
    },


  ]
})
