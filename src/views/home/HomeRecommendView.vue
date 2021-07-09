<!--
* @description  参数1
* @fileName  IndexPage
* @author userName
* @date 2021-07-06 12:55:20
* @version V1.0.0
!-->
<template>
<div class='home-recommend-view'>
  <div v-for="(item,index) in recommend" :key="index">
    <a :href="item.link"><img :src="item.image"><div>{{item.title}}</div></a>
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  recommend:Array
  },
  name: 'HomeRecommendView',
  
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性
    
  },
  components: { // 组件的引用

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
.home-recommend-view{
  display: flex;
  text-align: center;
  padding:10px 0 10px 0;
  border-bottom: 5px solid #ccc;
  div{
    flex:1;
    a{
      img{
        width:68px;
        height: 68px;
        margin:5px 0;
      }
    }
  }
}
</style>