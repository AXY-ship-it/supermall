<!--
* @description  参数1
* @fileName  DetailNavBar
* @author userName
* @date 2021-07-10 10:32:25
* @version V1.0.0
!-->
<template>
<div id='DetailNavBar' class='DetailNavBar'>
  <nav-bar>
    <img src="../../../assets/img/arrowthinleft.svg" slot="left" @click="backHome">
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" :key="index" class="title-item" @click=changeActive(index) :class="{active:index==currentIndex}">
     {{item}}
    </div>
    </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from '../../../components/common/NavBar.vue'

export default {
  props: { // 父辈向子辈传参
  },
  name: 'DetailNavBar',
  data () {
    return {
       titles:['商品','参数','详情','推荐'],
       currentIndex:0,
    }
  },
  
  components: {
    NavBar // 组件的引用

  },
  methods: { // 方法
   backHome(){
     this.$router.back()
    //  this.$router.go(-1)作用等同于this.$router.back()
   },
   changeActive(index){
     this.currentIndex=index
     this.$emit('detailClick',index)
   }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.title{
  display: flex;
  .title-item{
    flex:1;
    text-align: center;
    &.active{
      color: red;
    }
  }
}
img{
  width:25px;
  height: 25px;
}
</style>