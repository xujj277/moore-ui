<template>
  <div class="x-dialog-wrapper" v-if="visible">
    <div class="x-shadow"></div>
    <div class="x-dialog">
      <div class="header-wrapper">
        <span>{{title}}</span>
      </div>
      <div class="content-wrapper">
        <slot></slot>
      </div>
      <div class="footer-wrapper">
        <button @click="onCancel">取消</button>
        <button @click="onConfirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'dialog',
  props: {
    title: {
      type: String,
    },
    visible: {
      type: Boolean
    }
  },
  setup (props, context) {
    const {visible} = props
    const onCancel = () => {
      context.emit('update:visible', !props.visible)
      context.emit('cancel')
    }
    const onConfirm = () => {
      context.emit('update:visible', !props.visible)
      context.emit('confirm')
    }
    return {
      onCancel,
      onConfirm
    }
  }
}
</script>

<style lang='scss'>
.x-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  
  .x-shadow {
    background-color: #000;
    opacity: 0.7;
    width: 100%;
    height: 100%;
  }
  
  .x-dialog {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    height: 300px;
    background-color: #ffffff;
  }
}
</style>
