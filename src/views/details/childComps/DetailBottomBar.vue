<!--
* @description  参数1
* @fileName  DetailBottomBar
* @author userName
* @date 2021-07-10 20:11:37
* @version V1.0.0
!-->
<template>
<div id='detail-bottom-bar' class='detail-bottom-bar'>
  <div><div><img src="../../../assets/img/客服.svg"></div><span>客服</span></div>
  <div><div><img src="../../../assets/img/店铺.svg"></div><span>店铺</span></div>
  <div><div><img src="../../../assets/img/收 藏.svg"></div><span>收藏</span></div>
  <div class="detail-item">
    <div class="detail-cart" @click="addShop">加入购物车</div>
    <div class="detail-shop">购买</div>
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'DetailBottomBar',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: { // 组件的引用

  },
  methods: { // 方法
    addShop(){
      this.$emit('addShops')
    }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.detail-bottom-bar{
  background-color: #fff;
  height: 49px;
  // line-height: 40px;
  position: fixed;
  right: 0;
  left:0;
  bottom: 0;
  display: flex;
  div{
    text-align: center;
    flex:1;
    padding-top: 1px;
    img{
      width:20px;
      height: 20px;
    }
    &.detail-item{
      flex:3;
    }
    &.detail-cart{
      float: left;
      line-height: 49px;
      background-color: yellow;
      width:80px;
      height: 100%;
    }
    &.detail-shop{
      float: left;
      height: 100%;
      line-height: 49px;
      background-color: pink;
      color:#fff;
      width:80px;
    }
  }
}
</style>