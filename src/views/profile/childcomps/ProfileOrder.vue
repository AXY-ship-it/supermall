<!--
* @description  参数1
* @fileName  ProfileOrder
* @author userName
* @date 2021-07-14 15:13:19
* @version V1.0.0
!-->
<template>
<div id='profile-order' class='profile-order'>
  <el-menu class="el-menu-vertical-demo">
      <el-submenu index="1" v-for="(item,index) in orderTitles" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.text}}</span>
        </template>
      </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'ProfileOrder',
  data () {
    return {
       orderTitles:[
         {icon:'el-icon-orange',text:'待付款'},
         {icon:'el-icon-cherry',text:'待发货'},
         {icon:'el-icon-burger',text:'待收货'},
         {icon:'el-icon-water-cup',text:'待评价'},
         {icon:'el-icon-grape',text:'退款/售后'}
       ]
       
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
.profile-order{
  .order-list{
    li{
      width:100%;
      height:44px;
      line-height: 44px;
      padding:0 10px;
    }
  }
}
</style>