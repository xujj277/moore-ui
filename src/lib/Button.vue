<template>
  <button class="x-button" @click="click" :class="classes" :disabled="disabled || loading">
    <span v-if="loading" class="x-button-loadingIndicator x-button-icon"></span>
    <span class="x-button-content"><slot></slot></span>
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
            box-shadow: 0 0 0 0 #f7d06f;\
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
$border-color: #fff;
$color: #fff;
$radius: 8px;
$red: #e99779;
$grey: #e8dcc4;
$active-color: #3a8ee6;
$primary-blue: #97cbe3;
$primary-border-color: #b7c4ba;

.x-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 16px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: #f7d06f;
  color: $color;
  border: 2px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  -webkit-user-select: none;/*禁用手机浏览器的用户选择功能 */
  -moz-user-select: none;

  position: relative;

  & + & {
    margin-left: 8px;
  }
  
  &.x-icon-right {
    .x-button-content {
      order: 1;
    }
    .x-icon {
      order: 2;
      margin-left: 4px;
    }
  }
  
  &.x-icon-left {
    .x-button-content {
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

      box-shadow: 0 0 0 10px transparent;
      animation: x-switch-pulse 1s;
    }

    &:active::before {
      animation: none;
    }
  }
  
  &:hover,
  &:focus {
    background: darken(#f5d68a, 25%);
  }
  &:active {
    background: #c1a157;
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.x-theme-primary {
    background: $primary-blue;
    color: #fff;

    &:hover,
    &:focus {
      background: darken($primary-blue, 25%);
    }
    
    &:active {
      background: darken($primary-blue, 30%);
    }
    
    &[disabled] {
      color: #fff;
      background: lighten($primary-blue, 5%);
    }
  }
  &.x-theme-danger {
    background: $red;
    color: white;
    &:hover,
    &:focus {
      background: darken($red, 25%);
    }
    
    &:active {
      background: darken($red, 30%);
    }
    
    &[disabled] {
      color: white;
      background: lighten($red, 10%);
    }
  }
  &.x-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: #e8dcc4;
    &:hover,
    &:focus {
      background-color: transparent;
    }
  }
  &.x-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: #e8dcc4;
    
    &:hover,
    &:focus {
      background: darken(#e8dcc4, 5%);
    }
  }
  &.x-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.x-size-small {
    font-size: 12px;
    height: 24px;
    padding: 2px 4px;
  }
  &.x-theme-button {
    &[disabled] {
      background-color: #d8d8d8;
    }
  }
  &.x-theme-link, &.x-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: inherit;
      background-color: transparent;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: #fff;
  }
  
  &.x-loading {
    pointer-events: none;
  }
  > .x-button-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #fff #fff #fff transparent;
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
