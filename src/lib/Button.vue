<template>
  <div :class="size">
    <button v-bind="rest"><slot></slot></button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean
    }
  },
  setup (props, context) {
    const {size, ...rest} = context.attrs
    console.log(size)
    return {
      size,
      rest
    }
  }
}
</script>

<style lang='scss' scoped>
.x-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &.normal {
    padding: 0 15px;
    font-size: 14px;
  }
  
  &.large {
    width: 100%;
    height: 50px;
  }
  
  &.default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #ebedf0;
  }
  
  &.info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
  }
  
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
