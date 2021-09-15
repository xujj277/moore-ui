<template>
  <div class="moore-scroll">
    <div class="moore-scroll-inner"
         ref="container"
         @scroll="onScroll"
         :style="{transform: `translateY(${translateY}px)`}"
         @touchstart="onTouchStart"
         @touchmove="onTouchMove"
         @touchend="onTouchEnd"
    >
      <slot></slot>
    </div>
    <div class="moore-scroll-track" v-if="barVisible" @mouseenter="onMouseEnter">
      <div class="moore-scroll-bar" 
           :style="{height: `${barHeight}px`, transform: `translateY(${barTop}px)`}"
           @mousedown="onMouseDown"
      ></div>
    </div>
    <div className="moore-scroll-pulling" :style="{height: `${translateY}px`}">
      <span className="moore-scroll-pulling-text" v-if="translateY === 150">释放手指即可更新</span>
      <span className="moore-scroll-pulling-icon" v-else>↓</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  setup(props, context) {
    let barHeight = ref(0)
    const container = ref<HTMLDivElement>(null)
    let isDragging = ref(false) // 记录是否在拖拽
    let mouseDownY = ref(0)
    let barTop = ref(0)
    let preTop = ref(0) // 因为 barTop 是一直改变的
    let translateY = ref(0)
    let touchStartY = ref(0)
    let isPulling = ref(false)
    let barVisible = ref(false)
    let timerId = ref(null)
    const scrollHeight = computed(() => {
      return container.value.scrollHeight // 不可见部分的高度
    })
    const viewHeight = computed(() => {
      return container.value.getBoundingClientRect().height // 可见部分的高度
    })
    onMounted(() => {
      barHeight.value = viewHeight.value * viewHeight.value / scrollHeight.value
      document.addEventListener('mousemove', onMouseMove) // 为什么要挂在document上，因为挂到bar上不像原生的状态
      document.addEventListener('mouseup', onMouseUp)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    })
    const setBarTop = (number) => {
      if (number < 0) return
      const maxBarTop = (scrollHeight.value - viewHeight.value) * viewHeight.value / scrollHeight.value
      if (number > maxBarTop) return
      barTop.value = number
    }
    const onMouseDown = (e) => {
      isDragging.value = true
      mouseDownY.value = e.clientY
      preTop.value = barTop.value
    }
    const onMouseMove = (e) => {
      if (isDragging.value) {
        const delta = e.clientY - mouseDownY.value // 记录拖拽的距离
        const newBarTop = preTop.value + delta
        setBarTop(newBarTop)
        container.value.scrollTop = scrollHeight.value * newBarTop / viewHeight.value // 画图就能懂，移动内容的距离
      }
    }
    const onMouseUp = () => {
      isDragging.value = false
      barVisible.value = false
    }
    const onMouseEnter = () => {
      if (timerId.value !== null) {
        window.clearTimeout(timerId.value)
      }
      barVisible.value = true
    }
    const onScroll = () => {
      barVisible.value = true
      const scrollTop = container.value.scrollTop
      setBarTop(scrollTop * viewHeight.value / scrollHeight.value) // 移动滚动条的距离
      if (timerId.value !== null) {
        window.clearTimeout(timerId.value)
      }
      timerId.value = window.setTimeout(() => {
        barVisible.value = false
      }, 500)
    }
    const onTouchStart = (e) => {
      const scrollTop = container.value.scrollTop
      if (scrollTop !== 0) return
      touchStartY.value = e.touches[0].clientY
      isPulling.value = true
    }
    const onTouchMove = (e) => {
      if (isPulling.value) {
        const delta = e.touches[0].clientY - touchStartY.value
        if (delta < 0) return
        translateY.value = delta
      }
    }
    const onTouchEnd = () => {
      if (isPulling.value) {
        translateY.value = 0
        context.emit('onPull')
        isPulling.value = false
      }
    }
    return {
      container,
      barHeight,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      barTop,
      onScroll,
      translateY,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      barVisible,
      onMouseEnter
    }
  }
}
</script>

<style lang='scss' scoped>
.moore-scroll {
  position: relative;
  overflow: hidden;
  
  &-inner {
    overflow: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-track {
    width: 10px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
  &-bar {
    height: 30px;
    background: #c08364;
    position: absolute;
    top: 0;
    left: 2px;
    width: 6px;
    border-radius: 3px;
  }
  &-pulling {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon {
      font-size: 30px;
    }
    &-text {
      font-size: 12px;
    }
  }
}
</style>
