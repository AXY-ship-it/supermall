<template>
  <div class="set-up">
      <content-scroll class="content">
          <div class="set-up-back"><span class="iconfont icon-leftarrow" @click="backMine"></span><span>设置</span></div>
          <set-up-item v-for="(item,index) in setuptit" :key="index" :class="'setup'+index">
             <span slot="text">{{item}}</span>
             <span slot="icon">></span>
          </set-up-item>
          <set-up-item class="back-login">
              <span slot="center">切换账号</span>
          </set-up-item>
          <set-up-item class="back-login">
              <span slot="center" @click="logOut">退出登录</span>
          </set-up-item>
      </content-scroll>
  </div>
</template>

<script>
import SetUpItem from '@/components/common/SetUpItem.vue'
import ContentScroll from '@/components/common/ContentScroll.vue'
export default {
     data(){
         return{
             setuptit:['我的收货地址','账户和安全','支付','消息通知','主题换肤','隐私','通用','帮助和反馈','关于开心购购购','开店']
         }
     },
     components:{
      SetUpItem,
      ContentScroll
     },
     methods:{
         backMine(){
             this.$router.go(-1)
         },
         logOut(){
             window.sessionStorage.clear()
             this.$router.push('/register')
         }
     }
}
</script>

<style lang="less" scoped>
.set-up{
    background-color: #eee;
    height:100vh;
    .content{
       height: 100%;
       overflow: hidden;
       .set-up-back{
           height:30px;
           line-height: 30px;
           padding:5px 10px;
           box-sizing: border-box;
           background-color: rgba(255,255,255,.5);
           font-size: 14px;
           span{
               padding:5px 10px;
           }
       }
    }
}
.setup1,.setup4,.setup7,.setup9{
        margin-top:10px;
    }
.setup0,.setup2,.setup4,.setup5,.setup6,.setup8{
    border:1px solid #eee;
}
.back-login{
    margin-top: 10px;
}

</style>