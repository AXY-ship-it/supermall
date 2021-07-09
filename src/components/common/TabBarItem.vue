<!--
* @description  参数1
* @fileName  TabBarItem
* @author userName
* @date 2021-07-06 11:30:10
* @version V1.0.0
!-->
<template>
<div id='tab-bar-item' class='tab-bar-item' @click="change">
  <slot name="item-icon"></slot>
  <slot name="item-text"></slot>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  path:String
  },
  name: 'TabBarItem',
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
    change(){
      this.$router.replace(this.path)
    }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style lang="less">
.tab-bar-item{
  height: 49px;
  flex:1;
  text-align: center;
  img{
  width:24px;
  height: 24px;
}
}

</style>