<!--
* @description  参数1
* @fileName  DetailBaseInfo
* @author userName
* @date 2021-07-10 12:15:19
* @version V1.0.0
!-->
<template>
<div id='detail-base-info' class='detail-base-info'>
  <p>{{goods.title}}</p>
  <div class="price">
    <span class="newprice">{{goods.newPrice}}</span><span class="oldprice">{{goods.oldPrice}}</span><span class="discount">{{goods.discount}}</span>
  </div>
  <div class="columns">
    <div v-for="(item,index) in goods.columns" :key="index" class="columns-item">{{item}}</div>
  </div>
  <div class="services">
    <div v-for="(item,index) in goods.services" :key="index" class="services-item">
      <img :src="item.icon" alt=""><span>{{item.name}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
   
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  name: 'DetailBaseInfo',
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
.detail-base-info{
  padding:10px  6px;
  border-bottom: 5px solid rgba(100,100,100,.1);
  .price{
    padding: 8px 0;
    .newprice{
      color:red;
      padding-right: 5px;
    }
    .oldprice{
      font-size: 13px;
      text-decoration: line-through;
    }
    .discount{
      margin-left: 5px;
      background-color: pink;
      padding:2px 5px;
      display: inline-block;
      border-radius: 3px;
      color:#fff;
    }
  }
   .columns{
      display: flex;
      justify-content: space-between;
      padding:5px 0;
      border-bottom: 1px solid #ccc;
      .columns-item{
        color:gray;
        font-size: 13px;
      }
    }
  .services{
    display: flex;
    justify-content: space-between;
    padding:10px 0;
    flex-wrap: wrap;
    .services-item{
      img{
        width:12px;
        height: 12px;
      }
      span{
        font-size:12px;
        transform: scale(0.5);
      }
    }
  }
}
</style>