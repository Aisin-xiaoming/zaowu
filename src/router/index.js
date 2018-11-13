import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import My from '@/pages/my'
import Kind from '@/pages/kind'
import Clothes from '@/pages/kind/components/clothes'
import Find from '@/pages/find'
import Articleinside from '@/pages/articleinside'
import Agoodinside from '@/pages/agoodinside'
import Comset from '@/pages/comset'
import Login from '@/pages/login'
import Land from '@/pages/land'
import Myorder from '@/pages/myorder'
import Mycollect from '@/pages/mycollect'
import Myaddress from '@/pages/address'
import Discount from '@/pages/discount'
import Account from '@/pages/account'
import Service from '@/pages/service'
import About from '@/pages/about'
import Search from '@/pages/search'
import Waittake from '@/pages/waittake'
import Waitpayment from '@/pages/waitpayment'
import Saleafter from '@/pages/saleafter'
import Accomplish from '@/pages/accomplish'
import Shopping from '@/pages/shopping'
import Kindclass from '@/pages/kindclass'
import Shopconfirm from '@/pages/shopconfirm'
import Myorderdetails from '@/pages/myorderdetails'
import Myorderlocation from '@/pages/myorderlocation'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        isNav:true,
        isTitle:'ZAOWU 造物',

      }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta:{isNav:true}
    },
    {
      path: '/kind',
      name: 'Kind',
      component: Kind,
      meta:{
        isNav:true,
        isTitle:'ZAOWU 造物',

      },
      children:[
        {
          path:':id',
          component:Clothes,
          meta:{
            isNav:true,
            isTitle:'内衣',
          },
          children:[
            {
              name:'KindClothesDetial',
              path:':id2',
              // name: 'kindclass',
              component:Kindclass,
            }
          ]
        }
      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
      meta:{isNav:true},
      children:[
        {
          path: 'articleinside',
          component:Articleinside
        },
        {
          path: 'agoodinside',
          component:Agoodinside
        },
      ]
    },
    {
      path: '/comset',
      name: 'Comset',
      component: Comset
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/land',
      name: 'Land',
      component:Land
    },
    {
      path: '/myorder',
      name: 'Myorder',
      component:Myorder
    },
    {
      path: '/mycollect',
      name: 'Mycollect',
      component:Mycollect
    },
    {
      path: '/address',
      name: 'address',
      component:Myaddress
    },
    {
      path: '/discount',
      name: 'discount',
      component:Discount
    },
    {
      path: '/account',
      name: 'account',
      component:Account
    },
    {
      path: '/service',
      name: 'service',
      component:Service
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/search',
      name: 'search',
      component:Search
    },
    {
      path: '/waittake',
      name: 'waittake',
      component:Waittake
    },
    {
      path: '/waitpayment',
      name: 'waitpayment',
      component:Waitpayment
    },
    {
      path: '/saleafter',
      name: 'saleafter',
      component:Saleafter
    }, 
    {
      path: '/accomplish',
      name: 'accomplish',
      component:Accomplish
    }, 
    {
      path: '/shopping',
      name: 'shopping',
      component:Shopping
    },
    {
      path: '/shopconfirm',
      name: 'shopconfirm',
      component:Shopconfirm
    },
    {
      path: '/myorderdetails',
      name: 'myorderdetails',
      component:Myorderdetails
    },
    {
      path: '/myorderlocation',
      name: 'myorderlocation',
      component:Myorderlocation
    },
    
  ]
})
