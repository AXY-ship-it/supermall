<!--
* @description  参数1
* @fileName  GoodsList
* @author userName
* @date 2021-07-08 22:59:37
* @version V1.0.0
!-->
<template>
<div id='GoodsList' class='GoodsList'>
  <goods-list-item v-for="(item,index) in showGoods" :key="index" :item="item"></goods-list-item>
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  props: { // 父辈向子辈传参
   showGoods:{
     type:Array,
     default(){
       return []
     }
   }
  },
  name: 'GoodsList',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: {
    GoodsListItem // 组件的引用

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