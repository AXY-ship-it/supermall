<!--
* @description  参数1
* @fileName  CastShopItem
* @author userName
* @date 2021-07-11 11:58:11
* @version V1.0.0
!-->
<template>
<div id='cast-shop-item' class='cast-shop-item'>
    <section>
      <check-button  @click.native="checkTog(item)" :isCheckAll="item.isCheck"/>
      <div><img :src="item.image"></div>
      <div>
        <p @click="toggleDetail(item.iid)">{{item.title}}</p>
        <div class="item-action">
          <span class="item-price">{{item.price}}</span>
          <div>
            <button @click="des(item.iid)" :disabled="item.count==1?true:false">-</button>
            <span>{{item.count}}</span>
            <button @click="add(item.iid)">+</button>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  props: { // 父辈向子辈传参
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  name: 'CastShopItem',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性

  },
  components: {
    CheckButton // 组件的引用

  },
  methods: { // 方法
    toggleDetail(iid){
       this.$router.push({
         path:'/detail',
         query:{
           iid
         }
       })
     },
     add(iid){
       this.$store.dispatch('add',iid)
     },
     des(iid){
       this.$store.dispatch('des',iid)
     },
     checkTog(){
      this.item.isCheck=!this.item.isCheck
     }
  },
  
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
.cast-shop-item{
     section{
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
          width:60px;
          height:90px;
          border-radius: 5px;
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

</style>