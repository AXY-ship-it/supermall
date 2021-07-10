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
  <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabControl="tabControl" ref="tabControl" v-show="tabStyle"></tab-control>
  <content-scroll class="content"  ref="scroll" :probe-type="3" @contentScroll="contentScroll" @loadMore="loadMore">
    <home-recommend-view :recommend="recommend"></home-recommend-view>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabControl="tabControl" ref="tabControl" v-show="!tabStyle"></tab-control>
    <goods-list :showGoods="showGoods" class="goods-list"></goods-list>
  </content-scroll>
  <back-top @click.native="backClick" v-show="isShowBack"></back-top>
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
import ContentScroll from '../../components/common/ContentScroll.vue'

import {getHome,getHomegoods} from '../../networks/data.js'
import BackTop from '../../components/common/BackTop.vue'


export default {
  props: { // 父辈向子辈传参
  },
   components: { // 组件的引用
      NavBar,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      ContentScroll,
      BackTop,
      
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
     currentType:'pop',
     isShowBack:false,
     tabOffsettop:0,
     tabStyle:false
    }
  },
  created () { // 实例被创建之后执行代码
    this.getHome()
    this.getHomegoods('pop')
    this.getHomegoods('new')
    this.getHomegoods('sell')
    // this.$bus.$on('itemImgLoad',()=>{
    //    this.$refs.scroll.refresh()
    // })
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
       this.$refs.tabControl.currentIndex=index
    },
    backClick(){
       this.$refs.scroll.scrollTop(0,0,500)
    },
    loadMore(){
        this.getHomegoods(this.currentType)
        this.$refs.scroll.finishPullUp()
    },
    contentScroll(position){
       if(position.y<-1000){
         this.isShowBack=true
       }
       else{
         this.isShowBack=false
       }
       this.tabStyle=Math.abs(position.y)>=362?true:false
    },
  //进行数据请求
     getHome(){
       getHome().then(res=>{
      this.recommend=res.data.data.recommend.list
      this.banners=res.data.data.banners
    })
     },
     getHomegoods(type){
       let currentPage=this.goods[type].page+1
       this.goods[type].page=currentPage
       console.log(currentPage)
         getHomegoods(type,currentPage).then(res=>{
           let list=res.data.data.list
           this.goods[type].list.push(...list)
          //  console.log(res.data.data.list)
         })
     }
  },
  mounted () { // 页面进入时加载内容
       this.tabOffsettop=this.$refs.tabControl.$el.offsetTop
       console.log(this.$refs.tabControl.$el.offsetTop)
  }
}
</script>
<style scoped lang='less'>
.home{
  height: 100vh;
  .home-nav{
    background-color: rosybrown;
    // position: fixed;
    // left:0;
    // top:0;
    // right: 0;
    // z-index:10;
  }
  .content{
    // margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;
     .tab-control{
      background-color: #ffffff;
  }
   .goods-list{
    display: flex;
    flex-wrap: wrap;
  }
  }

}
</style>