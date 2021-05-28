<template>
  <button class="x-switch"
          :class="{'x-checked': value, 'x-switch-wave': isWaveAnimation, 'x-switch-wave-active': waveActive}"
          @click="toggle"
          :disabled="disabled"
          :style="{background: bgColor}"
  >
    <span></span>
  </button>
</template>

<script lang="ts">

import { computed, ref } from 'vue'

export default {
  props: {
    value: {
      type: Boolean
    },
    activeColor: {
      type: String,
      default: 'blue'
    },
    inactiveColor: {
      type: String,
      default: 'white'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isWaveAnimation: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const {activeColor, inactiveColor, isWaveAnimation} = props
    const waveActive = ref(false)
    const toggle = () => {
      context.emit('update:value', !props.value)
      if (isWaveAnimation) {
        console.log(1)
        waveActive.value = true
        mySetTimeout(() =>{
          console.log(2)
          waveActive.value = false
        }, 1000)
      }
    }
    
    const mySetTimeout = (callback, timeout) => {
      let timer
      let startTime = Date.now()
      const loop = () => {
        timer = window.requestAnimationFrame(loop)
        if (Date.now() - startTime >= timeout) {
          callback.call(this, timer)
          window.cancelAnimationFrame(timer)
        }
      }
      window.requestAnimationFrame(loop)
    }
    const bgColor = computed(() => {
      return props.value ? activeColor : inactiveColor
    })
    return {
      toggle,
      bgColor,
      waveActive
    }
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$grey: grey;
.x-switch {
  height: $h;
  width: $h*2;
  border: none;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  
  &-wave {
    &::before {
      height: $h;
      width: $h*2;
      border: none;
      border-radius: $h/2;
      position: absolute;
      content: '';
      left: 0em;
      right: 0em;
      top: 0em;
      bottom: 0em;
      box-shadow: 0 0 0 0px orange;
    }
    
    &-active::before {
      animation: pulse 1s;
    }
    @keyframes pulse {
      to {
        box-shadow: 0 0 0 10px transparent;
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: .6;
  }

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }

  &.x-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: transparent;
    box-shadow: 0 0 5px 2.5px hsla(190, 20%, 91%, 0.4);
  }

  & + & {
    margin-left: 8px;
  }
}
</style>