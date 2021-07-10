<!--
* @description  参数1
* @fileName  DetailSwiper
* @author userName
* @date 2021-07-10 10:51:17
* @version V1.0.0
!-->
<template>
<div id='DetailSwiper' class='DetailSwiper'>
  <swiper>
    <swiper-item></swiper-item>
  </swiper>
</div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  props: { // 父辈向子辈传参
  },
  name: 'DetailSwiper',
  data () {
    return {

    }
  },
  components: {
    Swiper ,// 组件的引用
    SwiperItem
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
</style>