<!--
* @description  参数1
* @fileName  TabControl
* @author userName
* @date 2021-07-08 12:04:02
* @version V1.0.0
!-->
<template>
<div id='tab-control' class='tab-control'>
  <div v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" @click="activeChange(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  titles:{
    type:Array,
    default(){
      return []
    }
  }
  },
  name: 'TabControl',
  data () {
    return {
       currentIndex:0
    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: { // 组件的引用

  },
  methods: { // 方法
    activeChange(index){
      this.currentIndex=index
      this.$emit('tabControl',index)
    },
    
   
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.tab-control{
   display: flex;
   div{
     flex:1;
     height: 40px;
     line-height: 40px;
     text-align: center;
     font-size: 14px;
     padding:2px 0;
     &.active{
       color:pink;
       span{
       border-bottom: 2px solid pink;
     }
     }
   }
   
}
</style>