<!--
* @description  参数1
* @fileName  Content-Scroll
* @author userName
* @date 2021-07-09 13:53:37
* @version V1.0.0
!-->
<template>
<div id='scroll' class='scroll' ref="scroll">
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: { // 父辈向子辈传参
  currentType:String,
  probeType:{
    type:Number,
    default:0
  }
  },
  name: 'ContentScroll',
  data () {
    return {
      scroll:null
    }
  },
  mounted () { // 页面进入时加载内容
     this.scroll=new BScroll(this.$refs.scroll,{
      //  作用等同于this.scroll.refresh()
      observeDOM:true,
      probeType:this.probeType,
      click:true,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('contentScroll',position)
      // this.scroll.refresh
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('loadMore')
      // this.$parent.getHomegoods(this.currentType)
      
    })
  },
  methods:{
    scrollTop(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
       this.scroll.finishPullUp()
    }
    // refresh(){
    //   this.scroll.refresh()
    // }
  }
}
</script>
<style scoped lang='less'>

</style>