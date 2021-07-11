<!--
* @description  参数1
* @fileName  CheckOut
* @author userName
* @date 2021-07-10 23:49:24
* @version V1.0.0
!-->
<template>
<div id='check-out' class='check-out'>
  <div class="check-all"><input type="checkbox"><span>全选</span></div>
  <div><span>已选</span><span>合计</span></div>
  <div><button>结算</button></div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'CheckOut',
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
.check-out{
  background-color: #fff;
  border-top:1px solid #ccc;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  height: 49px;
  line-height: 49px;
  position: fixed;
  left:0;
  right: 0;
  bottom:49px;
  display: flex;
  z-index:12;
  div{
    flex:1;
    button{
      width:70px;
      height:30px;
      border-radius: 15px;
      background-color: orange;
      color:#fff;
      border:none;
      outline: none;
    }
  }
}
</style>