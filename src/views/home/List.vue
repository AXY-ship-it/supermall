<!--
* @description  参数1
* @fileName  List
* @author userName
* @date 2021-07-06 14:37:10
* @version V1.0.0
!-->
<template>
<div id='list' class='list'>
  <router-view/>
  <ul class="song-list">
    <li v-for="item in song" :key="item">
      <div class="text">
        <P>{{item.name}}</P>
        <P>{{item.alias[0]}}</p>
      </div>
      <div class="icons">
        <img src="../../assets/img/播放.svg" alt="mv">
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'List',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

  },
  computed: { // 计算属性
     song(){
       console.log(this.$store.state.songs)
       return this.$store.state.songs
       
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
.list{
  width: 90%;
  margin:0 auto;
  .song-list{
    display: flex;
    li{
      width:90%;
    }
  }
}
</style>