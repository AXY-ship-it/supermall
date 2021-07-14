<!--
* @description  参数1
* @fileName  CateDetail
* @author userName
* @date 2021-07-13 16:08:16
* @version V1.0.0
!-->
<template>
<div id='cate-detail' class='cate-detail'>
   <content-scroll class="content">
     <div class="cate-detail-list" v-if="currentCate.length">
        <div v-for="(item,index) in currentCate" :key="index">
          <a :href="item.link">
             <img :src="item.image">
             <p>{{item.title}}</p>
          </a>
         </div>
    </div>
    <div class="cate-detail-list" v-else>
        <div v-for="(item,index) in firstCate" :key="index">
          <a :href="item.link">
             <img :src="item.image">
             <p>{{item.title}}</p>
          </a>
         </div>
    </div>
  </content-scroll>
</div>
</template>

<script>
import ContentScroll from '@/components/common/ContentScroll.vue'
export default {
  props: { // 父辈向子辈传参
    currentCate:{
      type:Array,
      default(){
        return []
      }
    },
    firstCate:{
      type:Array,
      default(){
        return []
      }
    }
  },
  name: 'CateDetail',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: { // 组件的引用
    ContentScroll
  },
  methods: { // 方法

  },
  mounted () { // 页面进入时加载内容
     console.log(this.currentCate.length)
  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.cate-detail{
  margin-left:100px;
  height:100vh;
  .content{
    height:calc(100% - 49px);
    padding:5px;
    overflow:hidden;
    .cate-detail-list{
     display:flex;
     flex-wrap:wrap;
     justify-content:space-between;
      div{
        // padding:5px;
        width:90px;
       a{
         text-align:center;
         img{
          width:100%;
         }
    }
   }
  } 
}
}
  
</style>