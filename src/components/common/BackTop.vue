<!--
* @description  参数1
* @fileName  BackTop
* @author userName
* @date 2021-07-09 17:28:01
* @version V1.0.0
!-->
<template>
<div id='back-top' class='back-top'>
  <img src="../../assets/img/top.png">
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'BackTop',
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
.back-top{
  position: fixed;
  bottom: 55px;
  right:10px;
  z-index:11;
  img{
    width:40px;
    height: 40px;
  }
}
</style>