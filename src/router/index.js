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
const routes= [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
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
    component:List
  },
  {
    path: '/cast',
    component: Cast,
  },
  {
    path: '/kmusic',
    component: Kmusic,
  },
  {
    path: '/profile',
    component: Profile,
  }
]
const router=new VueRouter({
  routes,
  mode: 'history'
})
export default router
