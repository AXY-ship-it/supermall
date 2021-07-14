<!--
* @description  参数1
* @fileName  Toast
* @author userName
* @date 2021-07-11 16:07:26
* @version V1.0.0
!-->
<template>
<div id='toast' class='toast' v-show="isShow">
  {{message}}
</div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
          message:'',
          isShow:false
    }
  },
  
  methods: { // 方法
     show(message,duration){
       console.log('00000')
       duration=duration||0
       this.message=message
       this.isShow=true
       setTimeout(() => {
         this.isShow=false
       }, duration);
     }
  }
}
</script>
<style scoped lang='less'>
.toast{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.5);
  padding:10px;
  z-index:13;
}
</style>