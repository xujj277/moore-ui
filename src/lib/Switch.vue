<template>
  <div class="switch-wrapper" :class="{isOpen: isOpen}">
    <div class="switch-inner"></div>
  </div>
</template>

<script>
import {watch, ref} from 'vue';
export default {
  props: {
    value: {
      type: Boolean || String,
      default: false
    }
  },
  setup (props) {
    let isOpen = ref(false)
    watch(() => props.value, (value) => {
      if (value === 'true' || value === true) {
        isOpen.value = true
      } else {
        isOpen.value = false
      }
    }, {
      immediate: true
    })
    return {
      isOpen
    }
  }
}
</script>

<style lang='scss' scoped>
.switch-wrapper {
  border-radius: 20px;
  height: 40px;
  width: 80px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  background: #999;
  transition: all 0.2s;

  &.isOpen {
    background: cornflowerblue;

    .switch-inner {
      transform: translateX(30px);
    }
  }

  .switch-inner {
    border-radius: 20px;
    width: 34px;
    height: 34px;
    transition: all 0.2s;
    background: #fff;
  }
}
</style>
