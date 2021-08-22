<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="x-toast-wrapper" :class="toastClasses">
        <!--toast 这个做动画-->
        <div class="x-toast" ref="toast">
          <div class="x-message">
            <slot name="message" v-if="!enableHtml"/>
            <div v-else v-html="defaults"></div>
          </div>
          <div class="x-line" ref="line" v-if="closeButton"></div>
          <span class="x-close" v-if="closeButton" @click="onClickClose">
            {{ closeButton.text }}
          </span>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { computed, onMounted, ref, onUnmounted } from 'vue'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator (value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: [Boolean, Object],
      default: false,
      validator (value) {
        return value === false || typeof value === 'object'
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  setup (props, context) {
    const defaults = context.slots.message()[0].children
    const line = ref<HTMLDivElement>(null)
    const toast = ref<HTMLDivElement>(null)
    let timerId
    const {autoClose} = props
    const toastClasses = computed(() => {
      return {
        [`position-${props.position}`] : true
      }
    })
    const close = () => {
      context.emit('beforeClose')
      context.emit('update:visible', false)
    }
    const onClickClose = () => {
      if (props.closeButton) {
        close()
        if (typeof props.closeButton.callback === 'function') {
          props.closeButton.callback(this)
        }
      }
    }
    const autoClosed = () => {
      if (props.autoClose) {
        timerId = setTimeout(() => {
          close()
        }, autoClose * 1000)
      }
    }
    const updateStyles = () => {
      if (props.closeButton) {
        line.value.style.height = `${toast.value.getBoundingClientRect().height}px`
      }
    }
    onMounted(() => {
      autoClosed()
      updateStyles()
    })
    onUnmounted(() => {
      window.clearTimeout(timerId)
    })
    return {
      toastClasses,
      onClickClose,
      defaults,
      line,
      toast
    }
  }
}
</script>

<style lang='scss'>
$font-size: 14px;
$toast-min-height: 40px; // 不要写死高度
$toast-background: rgba(241, 154, 81, 0.8);
.x-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  &.position-top {
    top: 0;
    .x-toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .x-toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-in 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .x-toast {
      animation: fade-in 1s;
    }
  }
}
.x-toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: $toast-background;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(241, 154, 81, 0.50);
  padding: 0 16px;
  .x-message {
    padding: 8px 0;
  }
  .x-close {
    padding-left: 16px;
    flex-shrink: 0; // 我不缩小
  }
  .x-line {
    height: 100%;
    border-left: 1px solid #999;
    margin-left: 16px;
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
