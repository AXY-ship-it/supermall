<!--
* @description  参数1
* @fileName  MainTabBar
* @author userName
* @date 2021-07-06 18:19:19
* @version V1.0.0
!-->
<template>
<div id='main-tab-bar' class='main-tab-bar' v-if="$route.meta.showTab">
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="@/assets/img/网易云音乐.svg" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="@/assets/img/K歌.svg" slot="item-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cast">
        <img src="@/assets/img/电台直播.svg" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="@/assets/img/我的.svg" slot="item-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      
    </tab-bar>
</div>
</template>

<script>
import TabBar from '../common/TabBar.vue'
import TabBarItem from '../common/TabBarItem.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'MainTabBar',
  data () {
    return {
      
    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: { // 组件的引用
    TabBar,TabBarItem
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