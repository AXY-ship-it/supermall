<template>
  <div class="set-up-item">
      <div class="text"><slot name="text"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="icon"><slot name="icon"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.set-up-item{
    display: flex;
    justify-content: space-between;
    width:100%;
    align-items: center;
    box-sizing: border-box;
    line-height: 40px;
    background-color: #fff;
    padding:5px 10px;
    font-size: 14px;
    .icon{
        // float:right;
        color:#ccc;
    }
}
</style>