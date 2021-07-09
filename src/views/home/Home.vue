<!--
* @description  参数1
* @fileName  Home
* @author userName
* @date 2021-07-06 12:14:38
* @version V1.0.0
!-->
<template>
<div id='home' class='home'>
  <nav-bar class="home-nav">
    <!-- <input type="text" placeholder="" class="search" slot="center"> -->
    <span slot="center">购物车</span>
  </nav-bar>
  <!-- <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="轮播图">
      </a>
    </swiper-item>
  </swiper> -->
  <home-recommend-view :recommend="recommend"></home-recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabControl="tabControl"></tab-control>
  <goods-list :showGoods="showGoods" class="goods-list"></goods-list>
</div>
</template>

<script>
import NavBar from '../../components/common/NavBar.vue'
// import Swiper from '../../components/common/swiper/Swiper.vue'
// import SwiperItem from '../../components/common/swiper/SwiperItem.vue'
import HomeRecommendView from './HomeRecommendView.vue'
import FeatureView from './FeatureView.vue'
import TabControl from '../../components/content/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import {getHome,getHomegoods} from '../../networks/data.js'


export default {
  props: { // 父辈向子辈传参
  },
   components: { // 组件的引用
      NavBar,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      
      // Swiper,
      // SwiperItem
  },
  name: 'Home',
  data () {
    return {
      banners:[],
     recommend:[],
     catlist:[],
     goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
     },
     currentType:'pop'
    }
  },
  created () { // 实例被创建之后执行代码
    this.getHome()
    this.getHomegoods('pop')
    this.getHomegoods('new')
    this.getHomegoods('sell')
  },
  
  computed: { // 计算属性
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
 
  methods: { // 方法
    tabControl(index){
       switch(index){
         case 0:
           this.currentType='pop'
           break
         case 1:
           this.currentType='new'
           break
         case 2:
           this.currentType='sell'
       }
    },

     getHome(){
       getHome().then(res=>{
      this.recommend=res.data.data.recommend.list
      this.banners=res.data.data.banners
    })
     },
     getHomegoods(type){
       let currentPage=this.goods[type].page+1
         getHomegoods(type,currentPage).then(res=>{
           this.goods[type].list=res.data.data.list
          //  console.log(res.data.data.list)
         })
     }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.home{
  padding-top: 44px;
  .home-nav{
    background-color: rosybrown;
    position: fixed;
    left:0;
    top:0;
    right: 0;
    z-index:10;
  }
  .tab-control{
    background-color: #ffffff;
    position: sticky;
    top:44px;
  }
  .bannerWrap{
    width:100%;
    ul{
      width:900%;
      li{
        width:calc(100% / 9);
        float: left;
        img{
          width:100%;
        }
      }
    }
  }
  .goods-list{
    display: flex;
    flex-wrap: wrap;
  }

}
</style>