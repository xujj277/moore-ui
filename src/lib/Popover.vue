<template>
  <div class="x-popover" ref="popover">
    <!--    阻止冒泡 @click.stop-->
    <teleport to="body">
      <div ref="contentWrapper"
           class="x-popover-content-wrapper"
           :class="[`position-${position}`]"
           v-if="visible">
        <slot name="content"/>
      </div>
    </teleport>
    <span ref="triggerWrapper" class="x-popover-trigger-wrapper">
      <slot/>
    </span>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount } from 'vue'

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
    container: {
      type: Element,
    }
  },
  setup (props, context) {
    let visible = ref(false)
    const popover = ref<HTMLDivElement>(null)
    const contentWrapper = ref<HTMLDivElement>(null)
    const triggerWrapper = ref<HTMLDivElement>(null)
    const container = props.container
    const close = () => {
      visible.value = false
      context.emit('close')
      document.removeEventListener('click', clickDocument)
    }
    const clickDocument = (e) => {
      if (popover.value === e.target || popover.value.contains(e.target)) return
      if (contentWrapper.value && (contentWrapper.value === e.target || contentWrapper.value.contains(e.target))) return
      close()
    }
    const positionContent = () => {
      const {width, height, left, top} = triggerWrapper.value.getBoundingClientRect()
      const {height: height2} = contentWrapper.value.getBoundingClientRect()
      const position = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      }
      contentWrapper.value.style.top = position[props.position].top + 'px'
      contentWrapper.value.style.left = position[props.position].left + 'px'
    }
    const open = async () => {
      visible.value = true
      context.emit('open')
      await nextTick()
      positionContent()
      document.addEventListener('click', clickDocument)
    }
    const onClick = () => {
      if (visible.value) { 
        close()
      } else {
        open()
      }
    }
    onMounted(() => {
      if (props.trigger === 'click') {
        popover.value.addEventListener('click', onClick)
      } else {
        popover.value.addEventListener('mouseenter', open)
        popover.value.addEventListener('mouseleave', close)
      }
    })
    onBeforeUnmount(() => {
      if (props.trigger === 'click') {
        popover.value.removeEventListener('click', onClick)
      } else {
        popover.value.removeEventListener('mouseenter', open)
        popover.value.removeEventListener('mouseleave', close)
      }
      document.removeEventListener('click', clickDocument)
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
$border-color: #b2bab0;
$border-radius: 10px;
$background-color: #454851;
.x-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  
  & + & {
    margin-left: 10px;
  }
}
.x-popover-content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  /*box-shadow: 0 0 3px rgba(0,0,0,0.5);*/
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
  padding: .5em 1em;
  max-width: 200px;
  word-break: break-all;
  background: $background-color;
  z-index: 12;
  color: #eec78d;
  
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
      border-top-color: $background-color;
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
      border-bottom-color: $background-color;
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
      border-left-color: $background-color;
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
      border-right-color: $background-color;
      right: calc(100% - 1px);
    }
  }
}

.x-popover-trigger-wrapper {
  display: block;
}
</style>
