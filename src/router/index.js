import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const Home= ()=>import('../views/home/Home.vue')
const IndexPage= ()=>import('../views/home/IndexPage.vue')
const List= ()=>import('../views/home/List.vue')
const Cast= ()=>import('../views/cast/Cast.vue')
const Profile= ()=>import('../views/profile/Profile.vue')
const CateGory= ()=>import('../views/kmusic/CateGory.vue')
const Detail=()=>import('../views/details/Detail.vue')
const Register=()=>import('../views/profile/Register.vue')
const SetUp=()=>import('../views/profile/SetUp.vue')
const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页',
      showTab:true
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
      title:'分类',
      showTab:true
    }
  },
  {
    path: '/cast',
    component: Cast,
    meta:{
      title:'购物车',
      showTab:true
    }
  },
  {
    path: '/category',
    component: CateGory,
    meta:{
      title:'分类',
      showTab:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'我的',
      showTab:true
    }
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail,
    meta:{
      title:'商品详情页',
      showTab:false
    }
  },
  {
    path:'/register',
    name:'register',
    component:Register,
    meta:{
      title:'登录',
      showTab:false
    }
  },
  {
    path:'/setup',
    name:'setup',
    component:SetUp,
    meta:{
      title:'设置',
      showTab:false
    }
  }
]
const router=new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next)=>{
  //to:即将跳转的路由或者说跳转后的路由，matched[0]解决路由嵌套的情况
  // 如果从登录页跳转，则放行
  if(from.path==='/register') return next()
  if(to.path==='/register') return next()
  const tokenStr=window.sessionStorage.getItem("token")
  // 没有token,强制跳转到登陆页
  if(!tokenStr){
    return next('/register')
  }
  document.title=to.matched[0].meta.title
  next()//一定要加上，才会进行跳转
})
export default router
