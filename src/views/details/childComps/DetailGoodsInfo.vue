<!--
* @description  参数1
* @fileName  DetailGoodsInfo
* @author userName
* @date 2021-07-10 17:30:12
* @version V1.0.0
!-->
<template>
<div id='detail-goods-info' class='detail-goods-info'>
  <div id="good-desc">
    {{detail.desc}}
  </div>
  <div class="goods-list" v-if="detail.detailImage">
    <img v-for="(item,index) in detail.detailImage[0].list" :key="index" :src="item" @load="detailImageLoad">
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
    detail:Object
  },
  name: 'DetailGoodsInfo',
  data () {
    return {
       counter:0,
       imgsLength:0
    }
  },
  created () { // 实例被创建之后执行代码

  },
 
  components: { // 组件的引用

  },
  methods: { // 方法
  //判断图片是否全部加载完，如果加载完，回调函数
    detailImageLoad(){
      if(++this.counter==this.imgsLength){
        this.$emit('imageLoad')
      }
    }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化
     detail(){
       this.imgsLength=this.detail.detailImage[0].list.length
     }
  }
}
</script>
<style scoped lang='less'>
.detail-goods-info{
  #good-desc{
    font-size: 14px;
  }
  .goods-list{
    img{
      width:100%;
      height: 100%;
    }
  }
}
</style>