<!--
* @description  参数1
* @fileName  CateListItem
* @author userName
* @date 2021-07-13 15:12:27
* @version V1.0.0
!-->
<template>
<div id='cate-list-item' class='cate-list-item' @tabCate="tabTitle(item.maitKey)">
{{item.title}}
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  name: 'CateListItem',
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
     tabTitle(maitKey){
      this.$emit('tabCateTitle',maitKey, miniWallKey)
    }
  },
  mounted () { // 页面进入时加载内容
    
  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.cate-list-item{
  width:100px;
  height:44px;
  line-height:44px;
  text-align:center;
}
</style>