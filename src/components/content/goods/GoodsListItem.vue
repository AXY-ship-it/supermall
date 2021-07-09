<!--
* @description  参数1
* @fileName  GoodsListItem
* @author userName
* @date 2021-07-08 17:09:08
* @version V1.0.0
!-->
<template>
<div id='goods-list-item' class='goods-list-item'>
   <a :href="item.link">
     <div><img :src="item.show.img"></div>
     <p>{{item.title}}</p>
     <span>{{item.orgPrice}}</span>
   </a>
    
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
   item:Object
  },
  name: 'GoodsListItem',
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
.goods-list-item{
  width:50%;
  padding:5px;
  box-sizing: border-box;
  // flex:1;
  a{
    font-size: 18px;
    div{
      // border-radius: 10px;
      img{
        width: 100%;
    }
    }
    p{
      overflow: hidden;
      text-overflow:ellipsis; 
      white-space: nowrap;
      color:#000;
    }
    span{
      color:red;
    }
  }
}
</style>