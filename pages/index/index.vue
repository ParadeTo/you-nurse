<template>
  <scroll-view class="scroll-view">
    <navigator url="/pages/sas/index" hover-class="navigator-hover">
      <view class="cell">焦虑自评量表（SAS）</view>
    </navigator>
    <navigator url="/pages/sds/index" hover-class="navigator-hover">
      <view class="cell">抑郁自评量表（SDS）</view>
    </navigator>
    <navigator url="/pages/ftnd/index" hover-class="navigator-hover">
      <view class="cell">吸烟者尼古丁依赖检验量表（FTND）</view>
    </navigator>
  </scroll-view>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  .scroll-view {
    background-color: #ededed;
    height: 100%;
  }

  .cell {
    font-size: 14px;
    padding: 16px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    background-color: #ededed;
    border-bottom: 1px solid #e0e0e0;
  }

  .cell::after {
    content: " ";
    width: 12px;
    height: 24px;
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    background-color: currentColor;
    color: rgba(0, 0, 0, 0.3);
    color: var(--weui-FG-2);
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
    position: absolute;
    top: 50%;
    right: 16px;
    margin-top: -12px;
  }
</style>
