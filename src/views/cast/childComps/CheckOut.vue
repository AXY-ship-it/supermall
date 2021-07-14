<!--
* @description  参数1
* @fileName  CheckOut
* @author userName
* @date 2021-07-10 23:49:24
* @version V1.0.0
!-->
<template>
<div id='check-out' class='check-out'>
  <div class="checkbtn"><check-button @click.native="checkAll" :isCheckAll="isCheckAll"/><span>全选</span></div>
  <div><span>已选{{accountLength}}件</span><span>合计：</span><span class="account">￥{{account}}</span></div>
  <div><button @click="checkOut">去结算({{accountLength}})</button></div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from './CheckButton.vue'
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
    ...mapGetters(['account','accountLength','cartShops']),
    isCheckAll(){
       if(this.cartShops.length===0)  return false
       return !this.cartShops.find((item)=>!item.isCheck)
    }
  },
  components: {
    CheckButton // 组件的引用

  },
  methods: { // 方法
    checkAll(){
      this.$store.dispatch('checkAll')
    },
    checkOut(){
      if(!this.accountLength){
        this.$toast.show('你还未选择商品',2000)
        // this.$toast.show(res,2000)
      }
    }
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
    // flex:1;
    &.checkbtn{
      display: flex;
    }
    width:auto;
    button{
      width:70px;
      height:30px;
      border-radius: 15px;
      background-color: orange;
      color:#fff;
      border:none;
      outline: none;
    }
    .account{
      color:red;
    }
  }
}
</style>