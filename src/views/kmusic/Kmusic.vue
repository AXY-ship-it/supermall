<!--
* @description  参数1
* @fileName  Kmusic
* @author userName
* @date 2021-07-08 09:34:28
* @version V1.0.0
!-->
<template>
<div id='Kmusic' class='wrapper'>
   <ul>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
     <li>1</li>
   </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'Kmusic',
  data () {
    return {
     scroll:null
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
     this.scroll=new BScroll(document.querySelector(".wrapper"),{
        observeDOM:true,
      // probeType:this.probeType,
      // click:true,
      // pullUpLoad:true
     })
    //  this.scroll.refresh()
  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.wrapper{
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>