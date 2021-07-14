<!--
* @description  参数1
* @fileName  CommentInfo
* @author userName
* @date 2021-07-11 18:54:20
* @version V1.0.0
!-->
<template>
<div id='comment-info' class='comment-info'>
  <div class="commenttip"><h2>用户评价</h2><h2>更多</h2></div>
  <div class="user-info">
    <!-- <img :src="user.avatar||''"><span>{{user.uname||''}}</span> -->
  </div>
  <div class="comment-content">{{commentInfo.content}}</div>
  <div class="comment-style">
    <span>{{commentInfo.created}}</span>
    <span>{{commentInfo.style}}</span>
  </div>
  <div class="explain">{{commentInfo.explain}}</div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
   commentInfo:{
     type:Object,
     default(){
       return {}
     }
   }
  },
  name: 'CommentInfo',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性
      user(){
        return this.commentInfo.user
      }
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
.comment-info{
  padding: 10px;
  div{
    line-height: 30px;
    &.commenttip{
      display: flex;
     justify-content: space-between;
     h2{
      font-size: 14px;
      }
    }
    &.user-info{
      padding:10px;
      display: flex;
       img{
       width:40px;
       height: 40px;
       border-radius: 50%;
      }
      span{
         padding:0 10px;
       }
    }
    
    &.comment-style{
      span{
        padding-right:5px;
        color:rgba(0,0,0,.5);
        
      }
    }
    &.explain{
      color:red;
      display:-webkit-box;
      overflow:hidden;
      text-overflow:ellipsis;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
    
  }
}
</style>