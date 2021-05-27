<template>
  <button class="x-button" 
          :class="{primary: type === 'primary',
          info: type === 'info', 
          default: type === 'default',
          normal: size === 'normal',
          large: size === 'large',
          disabled}"
          @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean
    }
  },
  setup (props, context) {
    const onClick = () => {
      context.emit('click')
    }
    return {
      onClick
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
