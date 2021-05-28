<template>
  <button class="x-switch"
          :class="{'x-checked': value, 'x-switch-wave': isWaveAnimation}"
          @click="toggle"
          :disabled="disabled"
          :style="{background: bgColor}"
  >
    <span></span>
  </button>
</template>

<script lang="ts">

import { computed } from 'vue'

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
      default: true
    }
  },
  setup (props, context) {
    const {activeColor, inactiveColor, disabled} = props
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    const bgColor = computed(() => {
      return props.value ? activeColor : inactiveColor
    })
    return {
      toggle,
      bgColor
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
    transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;

    &::before {
      position: absolute;
      content: '';
      left: -2em;
      right: -2em;
      top: -2em;
      bottom: -2em;
      pointer-events: none;
      transition: ease-in-out .5s;
      background-repeat: no-repeat;
      background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
        /*  */
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
      background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,
      15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
      background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,
      83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
      animation: bubbles ease-in-out .75s forwards;
    }

    &:active {
      transform: scale(0.95);
      background-color: #f3037c;
      box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);
    }
    
    &:active::before {
      animation: none;
      background-size: 0;
    }
    @keyframes bubbles {
      0% {
        background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,
        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;
      }
      50% {
        background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%, 75% 0%, 95% -2%, 0% 80%,
        95% 55%, 7% 100%, 24% 100%, 41% 100%, 55% 95%, 68% 96%, 95% 100%;
      }
      100% {
        background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%,
        100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;
        background-size: 0% 0%;
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

  & + & {
    margin-left: 8px;
  }
}
</style>