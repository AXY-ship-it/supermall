<!--
* @description  参数1
* @fileName  GoodsListItem
* @author userName
* @date 2021-07-08 17:09:08
* @version V1.0.0
!-->
<template>
<div id='goods-list-item' class='goods-list-item' @click="detailInfo">
  <a>
     <div><img :src="showImage"></div>
     <p>{{item.title}}</p>
     <span>{{item.orgPrice||item.price}}</span>
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
 computed:{
   showImage(){
     return  this.item.image||this.item.show.img
   }
 },
  methods: { // 方法
    // itemLoad(){
    //    this.$bus.$emit('itemImgLoad')
    // }
    detailInfo(){
      console.log(this.item)
      this.$router.push({
        path:'/detail',
        query:{
          iid:this.item.iid
        }
      })
    }
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
  display: inline-block;
  // flex:1;
   a{
    font-size: 18px;
    div{
      // border-radius: 10px;
      img{
        width: 100%;
        border-radius: 10px;
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