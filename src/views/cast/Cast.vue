<!--
* @description  参数1
* @fileName  Cast
* @author userName
* @date 2021-07-08 09:34:47
* @version V1.0.0
!-->
<template>
<div id='cast' class='cast'>
  <content-scroll class="content">
    <ul>
       <li v-for="(item,index) in $store.state.cartShops" :key="index">
      <div class="check"><input type="checkbox"></div>
      <div><img :src="item.image"></div>
      <div>
        <p>{{item.title}}</p>
        <div class="item-action">
          <span class="item-price">{{item.price}}</span>
          <div>
            <button @click="des(item.iid)" :disabled="item.count==1?true:false">-</button>
            <span>{{item.count}}</span>
            <button @click="add(item.iid)">+</button>
          </div>
        </div>
      </div>
       </li>
  </ul>
  </content-scroll>
  <check-out></check-out>
</div>
</template>

<script>
import ContentScroll from '../../components/common/ContentScroll.vue'
import CheckOut from './childComps/CheckOut.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'Cast',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码
    
  },
  computed: { // 计算属性
     
  },
  components: {
    CheckOut,
    ContentScroll // 组件的引用

  },
  methods: { // 方法
     add(iid){
       this.$store.commit('add',iid)
     },
     des(iid){
       this.$store.commit('des',iid)
     }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.cast{
  height: 100vh;
  .content{
    height:calc(100% - 98px);
    overflow: hidden;
    // background-color: red;
  ul{
    li{
      display: flex;
      justify-content: center;
      align-items: center;
      border:1px solid #ccc;
      div{
        &.check{
          width:100px;
          text-align: center;
        }
        img{
          width:50px;
          height:100px;
        }
        .item-action{
          display: flex;
          padding:10px;
          justify-content: space-between;
          .item-price{
            color:red;
          }
          div{
            border:1px solid #ccc;
            width:60px;
            display: flex;
            justify-content: space-between;
            span{

            }
            button{
              height:20px;
              width: 20px;
              border:none;
              outline: none;
              &:first-child{
                border-right: 1px solid #ccc;
              }
              &:last-child{
                border-left: 1px solid #ccc;
              }
            }
          }
        }
      }

    }
  }
  }
}
</style>