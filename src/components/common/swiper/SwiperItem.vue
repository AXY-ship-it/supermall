<!--
* @description  参数1
* @fileName  SwiperItem
* @author userName
* @date 2021-07-06 22:38:08
* @version V1.0.0
!-->
<template>
<div id='SwiperItem' class='SwiperItem'>
  <slot name="img"></slot>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'SwiperItem',
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
</style>