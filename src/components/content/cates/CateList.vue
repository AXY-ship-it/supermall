<!--
* @description  参数1
* @fileName  CateList
* @author userName
* @date 2021-07-13 15:13:26
* @version V1.0.0
!-->
<template>
<div id='cate-list' class='cate-list'>
    <content-scroll class="content">
      <div class="cate-title" v-for="(item,index) in cateTitles" :key="index" @click="tabTitle(item.maitKey,item.miniWallkey,index)" :data-id="index" :class="{active:index===id}">{{item.title}}</div>
    </content-scroll>
</div>
</template>

<script>
import ContentScroll from '@/components/common/ContentScroll.vue'
export default {
  props: { // 父辈向子辈传参
    cateTitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  name: 'CateList',
  data () {
    return {
      id:0
    }
  },
  created () { // 实例被创建之后执行代码

  },
  components: { // 组件的引用
   ContentScroll
  },
  methods: { // 方法
    tabTitle(maitKey,key,index){
       this.id=index
      // console.log(maitKey,key)
      this.$emit('tabCateTitle',maitKey,key)
      }
  },
  mounted () { // 页面进入时加载内容

  },
  computed:{
  }
}
</script>
<style scoped lang='less'>
.cate-list{
  position:fixed;
  left:0;
  top:0;
  height:100vh;
  background-color:rgba(0,0,0,.1);
  .content{
    height:calc(100% - 49px);
    overflow:hidden;
    div{
      width:100px;
      height:44px;
      line-height:44px;
      text-align:center;
      &.active{
        background-color:#ccc;
      }
    }
  }
}
</style>