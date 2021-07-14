<!--
* @description  参数1
* @fileName  Cast
* @author userName
* @date 2021-07-08 09:34:47
* @version V1.0.0
!-->
<template>
<div id='cast' class='cast'>
  <nav-bar class="castNav">
    <h2 slot="center">购物车({{cartLength}})</h2>
  </nav-bar>
  <content-scroll class="content">
    <el-empty description="您的购物车空空如也!!!" v-if="!cartShops.length"></el-empty>
    <cast-shop-item v-for="(item,index) in cartShops" :key="index" :item="item" v-else></cast-shop-item>
  </content-scroll>
  <check-out></check-out>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContentScroll from '../../components/common/ContentScroll.vue'
import NavBar from '../../components/common/NavBar.vue'
import CastShopItem from './childComps/CastShopItem.vue'
import CheckOut from './childComps/CheckOut.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'Cast',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码
    
  },
  computed: { // 计算属性
  //用法一
     ...mapGetters(['cartLength','cartShops','account'])
     //用法二
    //  ...mapGetters({
    //    length:'cartLength'
    //  })
  },
  components: {
    CheckOut,
    ContentScroll,
    NavBar,
    CastShopItem // 组件的引用

  },
  methods: { // 方法
     
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.cast{
  height: 100vh;
  .castNav{
    background-color: plum;
    h2{
      color:#fff;
    }
  }
  .content{
    height:calc(100% - 142px);
    overflow: hidden;
    // background-color: red;
  
  }
}
</style>