<template>
  <view class="container">
    <button type='primary' :disabled="disabled" @click="onClick">{{text}}</button>
  </view>
</template>

<script>
  export default {
    props: ['text', 'disabled'],
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style>
  .container {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 20rpx;
    background-color: #fff;
  }
</style>
