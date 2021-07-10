import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)
const Home= ()=>import('../views/home/Home.vue')
const IndexPage= ()=>import('../views/home/IndexPage.vue')
const List= ()=>import('../views/home/List.vue')
const Cast= ()=>import('../views/cast/Cast.vue')
const Profile= ()=>import('../views/profile/Profile.vue')
const Kmusic= ()=>import('../views/kmusic/Kmusic.vue')
const Detail=()=>import('../views/details/Detail.vue')
const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //  path: '',
      //  redirect: 'indexpage'
      // },
      {
        path:'/indexpage',
        component: IndexPage
      }
    ]
  },
  {
    path:'/list',
    component:List,
    meta:{
      title:'分类'
    }
  },
  {
    path: '/cast',
    component: Cast,
    meta:{
      title:'购物车'
    }
  },
  {
    path: '/kmusic',
    component: Kmusic,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'我的'
    }
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail,
    meta:{
      title:'详情页'
    }
  }
]
const router=new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next)=>{
  //to:即将跳转的路由或者说跳转后的路由，matched[0]解决路由嵌套的情况
  document.title=to.matched[0].meta.title
  next()//一定要加上，才会进行跳转
})
export default router
