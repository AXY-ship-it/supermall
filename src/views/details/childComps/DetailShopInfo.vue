<!--
* @description  参数1
* @fileName  DetailShopInfo
* @author userName
* @date 2021-07-10 13:10:33
* @version V1.0.0
!-->
<template>
<div id='detail-shop-info' class='detail-shop-info'>
  <div id="shopname"><div><img :src="shop.logo"></div><p>{{shop.name}}</p></div>
  <div id="shoptips">
    <ul>
      <li class="goodscount">{{cSells}}</li>
      <li>总销量</li>
    </ul>
    <ul>
      <li class="goodscount">{{shop.cGoods}}</li>
      <li>全部宝贝</li>
    </ul>
    <div class="line"></div>
    <table>
      <tr v-for="(item,index) in shop.score" :key="index">
        <td class="item-name">{{item.name}}</td>
        <td :class="{top:item.isBetter}" class="score">{{item.score}}</td>
        <td :class="{better:item.isBetter}" class="font-score"><span>{{item.isBetter?'高':'低'}}</span></td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
   shop:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  name: 'DetailShopInfo',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性
    cSells(){
      return this.shop.cSells>=10000?(this.shop.cSells/10000).toFixed(0)+'万':this.shop.cSells
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
.detail-shop-info{
  margin-top: 20px;
  padding:0 5px;
  #shopname{
    line-height: 40px;
    display: flex;
    div{
      img{
      width:40px;
      height:40px;
      border-radius: 50%;
      margin-right: 5px;
      border:1px solid #000;
    }
    }
  }
  #shoptips{
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .line{
      height:60px;
      width: 1px;
      background-color: gray;
    }
    ul{
      padding:5px;
      li{
        display: flex;
        padding:5px;
        &.goodscount{
          font-size: 18px;
          font-weight: bold;
        }
        // background-color: red;
        
      }
    }
    table{
      tr{
        
        td{
          padding:8px;
          &.score{
            color:red;
          }
          &.top{
            color:green;
          }
          &.font-score{
            span{
              background-color: red;
            }
          }
          &.better{
            span{
              background-color: green;
            }
          }
        }
      }
    }
  }
}
</style>