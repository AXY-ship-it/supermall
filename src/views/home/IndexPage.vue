<!--
* @description  参数1
* @fileName  IndexPage
* @author userName
* @date 2021-07-06 12:55:20
* @version V1.0.0
!-->
<template>
<div id='IndexPage' class='IndexPage'>
  
  
  <!-- <router-view/> -->
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  
  },
  name: 'IndexPage',
  data () {
    return {
      query:''
    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性
    song(){
       console.log(this.$store.state.songs[0])
       return this.$store.state.songs
       
     }
  },
  components: { // 组件的引用

  },
  methods: { // 方法
   searchSong(){
     this.$store.dispatch('getSong',this.query)
     this.$router.replace('/list')
   }
  },
  mounted () { // 页面进入时加载内容

  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
header{
  width:100%;
  height:50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;

}
</style>