<template>
  <div id="app">
     <keep-alive exclude="Detail"><router-view/></keep-alive>
     <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar  from '@/components/content/MainTabBar.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  computed: {
    ...mapState([
      'count',
      'student'
    ])
  },
  methods: {
   
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/fonts/iconfont.css';
</style>
