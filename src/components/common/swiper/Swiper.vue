<!--
* @description  参数1
* @fileName  Swiper
* @author userName
* @date 2021-07-06 22:38:12
* @version V1.0.0
!-->
<template>
<div class='swiper-wrap'>
  <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
  </div>
  <!-- <slot name="points"></slot> -->
</div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
   
  },
  name: 'Swiper',
  data () {
    return {
      slideCount: 0,
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      totalWidth:0,
      playtimer:null,
      swiperStyle:{}
    }
  },
  // methods: { // 方法
  //   handleDom: function () {
  //       // 1.获取要操作的元素
  //       let swiperEl = document.querySelector('.swiper');//是图片的父容器，长度为图片书*图片长度
  //       let slidesEls = swiperEl.getElementsByClassName('.slide');//是轮播图的容器，长度跟一张图片的大小一样
  //       // 2.保存个数,即图片的个数
  //       this.slideCount = slidesEls.length;

  //       // 3.如果大于1个, 那么在前后分别添加一个slide
  //       if (this.slideCount > 1) {
  //         let cloneFirst = slidesEls[0].cloneNode(true);
  //         let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
  //         swiperEl.insertBefore(cloneLast, slidesEls[0]);
  //         swiperEl.appendChild(cloneFirst);
  //         this.totalWidth = swiperEl.offsetWidth;
  //         this.swiperStyle = swiperEl.style;
  //       }

  //       // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
  //       this.setTransform(-this.totalWidth);
  //     },
  //   touchstart:function(e){
  //     // 1.如果正在滚动, 不可以拖动
  //       if (this.scrolling) return;
  //       this.stopTimer()
  //       this.startX=e.touches[0].pageX;
  //   },
  //   touchMove:function(e){
  //     //计算出用户拖动的距离
  //     this.distance=e.touches[0].pageX-this.startX
  //     //计算出轮播图的位置
  //     let currentPosition=-this.currentIndex*this.totalWidth
  //     // this.style.transform="translateX"+(current)
  //     let movedistance=currentPosition+this.distance
  //   },
  //   touchEnd:function(e){
  //     //1.获取移动的距离
  //     let currentMove = Math.abs(this.distance);
  //       // 2.判断最终的距离
  //       if (this.distance === 0) {
  //         return
  //       } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
  //         this.currentIndex--
  //       } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
  //         this.currentIndex++
  //       }
  //        // 3.移动到正确的位置
  //       this.scrollContent(-this.currentIndex * this.totalWidth);

  //       // 4.移动完成后重新开启定时器
  //       this.startTimer();
  //   },
  //   startTimer(){
  //      this.playtimer=window.setInterval(function(){
  //         currentIndex++
  //      },1000)
  //   },
  //   //滚动到正确位置
  //   scrollContent(currentPosition){
  //     //设置正在滚动
  //      this.scrolling=true
  //      //设置滚动动画
  //      this.swiperStyle.tansition='transform'+this.animDuration+'ms'
  //      this.setTransform(currentPosition);
  //      //3.检查
  //      this.checkPosition();
  //      // 4.滚动完成
  //      this.scrolling = false
  //   },
  //   setTransform(currentPosition){
  //       this.swiperStyle.transform='translateX('+currentPosition+')'
  //       //解决兼容
  //       this.swiperStyle['-webkit-transform'] = 'translateX('+currentPosition+')'
  //       this.swiperStyle['-ms-transform'] ='translateX('+currentPosition+')'
  //   },
  //      checkPosition: function () {
  //       window.setTimeout(() => {
  //         // 1.校验正确的位置
  //         this.swiperStyle.transition = '0ms';
  //         if (this.currentIndex >= this.slideCount + 1) {
  //           this.currentIndex = 1;
  //           this.setTransform(-this.currentIndex * this.totalWidth);
  //         } else if (this.currentIndex <= 0) {
  //           this.currentIndex = this.slideCount;
  //           this.setTransform(-this.currentIndex * this.totalWidth);
  //         }

  //         // 2.结束移动后的回调
  //         this.$emit('transitionEnd', this.currentIndex-1);
  //       }, this.animDuration)
  //     },
  //   stopTimer(){
  //    window.clearInterval(this.playtimer)
  //   }
  // },
  // mounted () { // 页面进入时加载内容
  //    // 1.操作DOM, 在前后添加Slide
  //     setTimeout(() => {
  //       this.handleDom();

  //       // 2.开启定时器
  //       this.startTimer();
  //     }, 100)
  // },
  watch: { // 监测变化

  }
}
</script>
<style scoped lang='less'>
</style>