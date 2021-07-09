<!--
* @description  参数1
* @fileName  TabBar
* @author userName
* @date 2021-07-06 11:29:24
* @version V1.0.0
!-->
<template>
<div id='tab-bar' class='tab-bar'>
  <slot></slot>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'TabBar',
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
<style>
.tab-bar{
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 2px rgba(100,100,100,.1);
  display: flex;
}
</style>