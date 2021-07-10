<!--
* @description  参数1
* @fileName  detail
* @author userName
* @date 2021-07-10 09:49:18
* @version V1.0.0
!-->
<template>
<div id='detail' class='detail'>
  <detail-nav-bar class="detail-nav" ref="detailNav" @detailClick="detailClick"></detail-nav-bar>
  <!-- <detail-swiper></detail-swiper> -->
  <content-scroll class="content" @contentScroll="contentScroll" ref="scroll">
    <detail-base-info :goods="goods" class="detail-base-info" ref="base"></detail-base-info>
    <detail-shop-info :shop="shop" ref="shop"></detail-shop-info>
    <detail-goods-info :detail="detail" ref="goods"></detail-goods-info>
  </content-scroll>
  <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  <detail-bottom-bar></detail-bottom-bar>
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
// import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import ContentScroll from '../../components/common/ContentScroll.vue'
import BackTop from '../../components/common/BackTop.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import {getDetails,Goods,Shop,DetailInfo} from '../../networks/details'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    ContentScroll,
    BackTop,
    DetailBottomBar
    // DetailSwiper // 组件的引用
  },
  data () {
    return {
      iid:null,
      banners:[],
      baseInfo:{},
      goods:{},
      shop:{},
      detail:{},
      baseTop:0,
      shopTop:0,
      goodsTop:0,
      isShowBack:false,
    }
  },
  created(){
     this.iid=this.$route.query.iid
     console.log(this.iid)
     this.getDetails(this.iid)
  },
  methods: { // 方法
     getDetails(iid){
        getDetails(iid).then(res=>{
          let data=res.data.result
          this.banners=data.itemInfo.topImages
          this.baseInfo=data.itemInfo
          this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          this.shop=new Shop(data.shopInfo)
          this.detail=new DetailInfo(data.detailInfo)
          console.log(data)
        })
     },
     contentScroll(position){
       let pos=Math.abs(position.y)
          if(pos>=this.baseTop){
               this.$refs.detailNav.currentIndex=0
               this.isShowBack=false
          }
          if(pos>=this.shopTop){
            this.$refs.detailNav.currentIndex=1
            this.isShowBack=false
          }
          if(pos>=this.goodsTop){
            this.$refs.detailNav.currentIndex=2
            this.isShowBack=true
          }
     },
     detailClick(index){
        switch(index){
          case 0:
            this.$refs.scroll.scrollTop(0,-this.baseTop,0)
            break
          case 1:
            this.$refs.scroll.scrollTop(0,-this.shopTop,0)
            break
          case 2:
            this.$refs.scroll.scrollTop(0,-this.goodsTop,0)
            break
        }
     },
     backClick(){
       this.$refs.scroll.scrollTop(0,0,500)
    },
  },
  mounted () { // 页面进入时加载内容
    this.baseTop=this.$refs.base.$el.offsetTop
    this.shopTop=this.$refs.shop.$el.offsetTop
    this.goodsTop=this.$refs.goods.$el.offsetTop
  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.detail{
  height: 100vh;
  position: relative;
  z-index:12;
  .detail-nav{
    background-color: #fff;
    position:fixed;
    left:0;
    right: 0;
    top:0;
    z-index:10;
  }
  .content{
       height: calc(100% - 93px);
      .detail-base-info{
         margin-top: 44px;
  }
  }
  
}
</style>