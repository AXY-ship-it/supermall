<!--
* @description  参数1
* @fileName  CateGory
* @author userName
* @date 2021-07-13 15:10:43
* @version V1.0.0
!-->
<template>
<div id='cate-gory' class='cate-gory'>
    <cate-list :cateTitles="cateTitles" @tabCateTitle="tabCateTitle"/>
    <cate-detail :currentCate="currentCate" :firstCate="firstCate"/>
</div>
</template>

<script>
import CateList from '@/components/content/cates/CateList.vue'
import CateDetail from './childcomps/CateDetail.vue'

import {getCategories,getSubCategory} from '@/networks/categories.js'

export default {
  props: { // 父辈向子辈传参
  },
  name: 'CateGory',
  data () {
    return {
       cateTitles:[],
       currentCate:[],
       firstCate:[]
    }

  },
  created () { // 实例被创建之后执行代码
     
  },
  computed: { // 计算属性
     
  },
  components: { // 组件的引用
    CateList,CateDetail
  },
  methods: { // 方法
     getCategory(){
        getCategories().then(res=>{
          this.cateTitles=res.data.data.category.list
      })
      },
      tabCateTitle(maitKey){
        getSubCategory(maitKey).then(res=>{
          this.currentCate=res.data.data.list
          // console.log(res.data.data.list)
        })
        // getSubDetail(miniWallKey).then(res=>{
        //   console.log(res)
        // })
      }
  },
  mounted () { // 页面进入时加载内容
     this.getCategory(),
       getSubCategory(3627).then(res=>{
        this.firstCate=res.data.data.list
        console.log(res.data.data.list)
     })
  },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
</style>