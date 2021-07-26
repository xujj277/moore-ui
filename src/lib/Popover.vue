<template>
  <div class="x-popover" ref="popover">
    <!--    阻止冒泡 @click.stop-->
    <div ref="contentWrapper"
         class="x-popover-content-wrapper"
         :class="[`position-${position}`]"
         v-if="visible">
      <slot name="content"/>
    </div>
    <span ref="triggerWrapper">
      <slot/>
    </span>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'

export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) > -1
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) > -1
      }
    },
  },
  setup (props, context) {
    let visible = ref(false)
    const popover = ref<HTMLDivElement>(null)
    const contentWrapper = ref<HTMLDivElement>(null)
    const triggerWrapper = ref<HTMLDivElement>(null)
    const close = () => {
      visible.value = false
      context.emit('close')
      document.removeEventListener('click')
    }
    const clickDocument = (e) => {
      if (popover === e.target || popover.value.contains(e.target)) return
      close()
    }
    const positionContent = () => {
      
    }
    const open = () => {
      visible.value = true
      context.emit('open')
      positionContent()
      document.addEventListener('click', clickDocument)
    }
    onMounted(() => {
      if (props.trigger === 'click') {
        popover.value.addEventListener('click', open)
      }
    })
    return {
      visible,
      popover,
      contentWrapper,
      triggerWrapper
    }
  }
}
</script>

<style lang='scss'>
$border-color: #333;
$border-radius: 4px;
.x-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.x-popover-content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  /*box-shadow: 0 0 3px rgba(0,0,0,0.5);*/
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  background: white;
  &::before,&::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,&::after {
      left: 10px;
    }
    &::before {
      border-bottom: none;
      border-top-color: $border-color;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 2px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,&::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 2px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,&::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right: none;
      border-left-color: $border-color;
      left: 100%;
    }
    &::after {
      border-right: none;
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,&::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left: none;
      border-right-color: $border-color;
      right: 100%;
    }
    &::after {
      border-left: none;
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
