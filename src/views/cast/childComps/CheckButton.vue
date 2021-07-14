<!--
* @description  参数1
* @fileName  CheckButton
* @author userName
* @date 2021-07-11 12:53:00
* @version V1.0.0
!-->
<template>
<div id='CheckButton' class='CheckButton'>
  <div>
    <img src="../../../assets/img/circle.svg" v-if="!isCheckAll">
    <img src="../../../assets/img/check.svg" v-else>
  </div>
  
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
     isCheckAll:{
       type:Boolean,
       default(){
         return false
       }
     }
  },
  name: 'CheckButton',
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
.CheckButton{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width:20px;
    height: 20px;
  }
}
</style>