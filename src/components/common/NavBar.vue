<!--
* @description  参数1
* @fileName  NavBar
* @author userName
* @date 2021-07-06 19:01:27
* @version V1.0.0
!-->
<template>
<div id='nav-bar' class='nav-bar'>
  <div class="nav-bar-left"><slot name="left"></slot></div>
  <div class="nav-bar-center"><slot name="center"></slot></div>
  <div class="nav-bar-right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'NavBar',
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

  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.nav-bar{
   height:44px;
   line-height: 44px;
   display: flex;
   text-align: center;
   border-bottom: 1px solid #ccc;
  .nav-bar-left{
   width: 60px;
  }
  .nav-bar-right{
    width: 60px;
  }
  .nav-bar-center{
    flex:1;
    text-align: center;
    // .search{
    //  width:100%;
    //  height:30px;
    //  border-radius: 5px;
// }
  }
}
</style>