<template>
  <button class="x-switch"
          :class="{'x-checked': value, 'x-switch-wave': isWaveShow}"
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
      default: 'grey'
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
    const waveAnimation = createWaveAnimation({
      isWaveAnimation: isWaveAnimation,
      activeColor,
      inactiveColor,
    })
    waveAnimation.onCreate()

    const toggle = () => {
      context.emit('update:value', !props.value)
      waveAnimation.onToggle(props.value)
    }

    const bgColor = computed(() => {
      return props.value ? activeColor : inactiveColor
    })
    
    return {
      toggle,
      bgColor,
      isWaveShow: waveAnimation.isWaveShow
    }
  }
}

function createWaveAnimation ({ isWaveAnimation, activeColor, inactiveColor }) {
  if (!isWaveAnimation) {
    return {
      onCreate () {},
      onToggle () {},
    }
  }
  let style = document.createElement('style');
  let isWaveShow = ref(false);
  return {
    onCreate () {
      document.getElementsByTagName('head')[0].appendChild(style);
    },
    onToggle (checked) {
      isWaveShow.value = true
      let keyFrames = `
        @keyframes x-switch-pulse {\
          0% {\
            box-shadow: 0 0 0 0 ${!checked ? activeColor : inactiveColor};\
          }\
        }`
      style.innerHTML = keyFrames
    },
    isWaveShow
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

      box-shadow: 0 0 0 5px transparent;
      animation: x-switch-pulse 1s;
    }

    &:active::before {
      animation: none;
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