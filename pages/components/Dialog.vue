<template>
  <view class="dialog" v-show="show">
    <view class="mask" @click="onMaskClick" />
    <view class="content">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['content', 'show'],
    methods: {
      onMaskClick() {
        this.$emit('maskClick')
      }
    }
  }
</script>

<style>
  .dialog {
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
  }
  
  .mask {
    background-color: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
  }
  
  .content {
    padding: 10px;
    border-radius: 10px;
    font-size: 10px;
    /* width: 150px; */
    /* height: 150px; */
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    /* line-height: 150px; */
    /* text-align: center; */
    /* font-size: 70px; */
    /* color: red; */
  }
</style>
