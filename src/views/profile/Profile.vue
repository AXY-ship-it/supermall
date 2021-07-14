<!--
* @description  参数1
* @fileName  Profile
* @author userName
* @date 2021-07-08 09:34:41
* @version V1.0.0
!-->
<template>
<div id='Profile' class='profile'>
  <profile-back class="back">
    <img src="@/assets/img/back.jpg">
  </profile-back>
  <nav-bar class="profile-nav">
    <div slot="center" class="nav-center">
       <p>收藏</p>
       <p>订阅</p>
       <p>足迹</p>
    </div>
  </nav-bar>
  <profile-order></profile-order>
</div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import ProfileBack from './childcomps/ProfileBack.vue'
import ProfileOrder from './childcomps/ProfileOrder.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'Profile',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: {
    NavBar,
    ProfileBack,
    ProfileOrder
 // 组件的引用

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
.profile{
  .back{
    img{
      width:100%;
      height:150px;
    }
  }
  .profile-nav{
    margin:0 auto;
    width:90%;
    border-radius: 10px;
    position: relative;
      transform: translateY(-50%);
      z-index: 100;
      box-shadow: 0px 1px 1px #ccc;
      background-color: #fff;
    .nav-center{
      display: flex;
      p{
        flex:1;
      }
    }
  }
}
</style>