<template>
  <button class="x-button" @click="click" :class="classes" :disabled="disabled || loading">
    <span v-if="loading" class="x-loadingIndicator x-icon"></span>
    <span class="x-content"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, ref } from 'vue'

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    isWaveAnimation: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  },
  setup (props, context) {
    const {theme, size, loading, isWaveAnimation, iconPosition} = props
    const waveAnimation = createWaveAnimation({
      isWaveAnimation: isWaveAnimation,
    })
    waveAnimation.onCreate()
    const click = () => {
      waveAnimation.onToggle()
    }

    const classes = computed(() => {
      return {
        [`x-theme-${theme}`]: theme,
        [`x-size-${size}`]: size,
        ['x-loading']: loading,
        ['x-button-wave']: waveAnimation.isWaveShow,
        [`x-icon-${iconPosition}`]: iconPosition
      }
    })
    return {
      classes,
      click,
    }
  }
}
function createWaveAnimation ({ isWaveAnimation }) {
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
    onToggle () {
      isWaveShow.value = true
      let keyFrames = `
        @keyframes x-switch-pulse {\
          0% {\
            box-shadow: 0 0 0 0 #3a8ee6;\
          }\
        }`
      style.innerHTML = keyFrames
    },
    isWaveShow
  }
}
</script>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #ed5b56;
$focus-danger-red: #ff7875;
$grey: grey;
$active-color: #3a8ee6;
.x-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  position: relative;
  
  &.x-icon-right {
    .x-content {
      order: 1;
    }
    .x-icon {
      order: 2;
      margin-left: 4px;
    }
  }
  
  &.x-icon-left {
    .x-content {
      order: 2;
    }
    .x-icon {
      order: 1;
      margin-right: 4px;
    }
  }
  &-wave {
    &::before {
      height: $h;
      border: none;
      border-radius: $radius;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: -1px;
      bottom: 0;

      box-shadow: 0 0 0 5px transparent;
      animation: x-switch-pulse 1s;
    }

    &:active::before {
      animation: none;
    }
  }
  
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: #c6e2ff;
    background: #eef5fe;
  }
  &:active {
    color: $active-color;
    border-color: $active-color;
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.x-theme-primary {
    background: #579ef8;
    color: #fff;
    border-color: #409eff;

    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
    }
  }
  &.x-theme-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
      background: $focus-danger-red;
      border-color: $focus-danger-red;
    }
  }
  &.x-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.x-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.x-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.x-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.x-theme-link {
    &.x-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.x-theme-text {
    &.x-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.x-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.x-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }
  &.x-theme-link, &.x-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  
  &.x-loading {
    pointer-events: none;
  }
  > .x-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $grey $grey $grey transparent;
    border-style: solid;
    border-width: 2px;
    animation: x-spin 1s infinite linear;
  }
}
@keyframes x-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
