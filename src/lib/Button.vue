<template>
  <button class="x-button" :class="classes" :disabled="disabled || loading">
    <span v-if="loading" class="x-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  inheritAttrs: false,
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
  },
  setup (props, context) {
    const {theme, size, loading} = props
    const classes = computed(() => {
      return {
        [`x-theme-${theme}`]: theme,
        [`x-size-${size}`]: size,
        [`x-loading`]: loading,
      }
    })
    return {
      classes
    }
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
