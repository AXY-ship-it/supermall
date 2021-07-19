<!--
* @description  参数1
* @fileName  register
* @author userName
* @date 2021-07-16 18:34:16
* @version V1.0.0
!-->
<template>

<div id='register' class='register'>
  <nav-bar class="back-profile" @click.native="backProfile">
    <img src="@/assets/img/arrowthinleft.svg" slot="left">
  </nav-bar>
  <div class="login-wrapper">
    <div class="admin-logo">
      <img src="@/assets/img/空白头像.svg"/>
      </div>
    <el-form ref="loginform" :model="form" label-width="0" class="form" :rules="rules">
    <el-form-item label="" prop="name">
      <el-input v-model="form.name" placeholder="请输入手机号" prefix-icon="iconfont icon-yonghu"></el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="iconfont icon-mima"></el-input>
    </el-form-item>
    <el-row class="row">
    <el-button type="primary" @click.native="login">登录</el-button>
    <el-button type="info" @click.native="reset">重置</el-button>
    </el-row>
  </el-form>    
  </div>
</div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
  components: { NavBar },
  props: { // 父辈向子辈传参
  },
  name: 'register',
  data () {
    return {
       form:{
         name:'',
         password:''
       },
       rules:{
          name: [
            { min: 11, max: 11, message: '请输入正确的手机号格式', trigger: 'blur' }
           ],
          password:[
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
       }
    }
  },
  mounted(){
      // this.$refs.loginform.$on("foucs")
  },
  methods:{
    resetFields(){
      this.form.name=''
      this.form.password=''
    },
    backProfile(){
      this.$router.go(-1)
    },
    login(){
       this.$refs.loginform.validate((vali)=>{
              // vali是一个boolean值,通过对它的判断，来判断是否可以进行登录
              if(!vali) return;   
              // this.$toast.show("登录成功",2000)
              // 或者使用element ui自带的Message弹框组件
              //模拟后端数据，用输入框的假数据！！！
              window.sessionStorage.setItem("token",this.form.name)
             this.$message.success("登录成功")
            //  this.$message.error("错误提示")
              this.$router.push("/home")
               this.reset()
       })
    },
    reset(){
      this.$refs.loginform.resetFields()
    }
  }
}
</script>
<style scoped lang='less'>
.register{
  .back-profile{
    border:none;
    padding:10px 0;
    img{
      width:50%;
      height:50%;
    }
  }
  height: 100%;
  .login-wrapper{
  width:230px;
  height: 250px;
  background-color: #fff;
  // border:1px solid #ccc;
  box-shadow: 0 0 2px #ccc;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom: 0;
  margin:auto;
  padding:10px;
  box-sizing: border-box;
  .admin-logo{
    width:70px;
    height: 70px;
    border-radius: 50%;
    border:1px solid #ccc;
    padding:20px;
    box-sizing: border-box;
    position: absolute;
    left:50%;
    transform: translate(-50%,-60%);
    z-index:14;
    background-color: #fff;
    box-shadow: 0 0 1px #ccc;
    img{
      width:100%;
      height: 100%;
    }
  }
  .form{
       margin-top:40px;
  }
}
}
.row{
  text-align: center;
}

</style>