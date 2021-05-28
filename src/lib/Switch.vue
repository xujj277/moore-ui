<template>
  <button class="x-switch" :class="{'x-checked': value}" @click="toggle"><span></span></button>
</template>

<script lang="ts">

export default {
  props: {
    value: {
      type: Boolean
    }
  },
  setup (props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.x-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;

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
  
  &.x-checked {
    background: blue;
  }
  
  &.x-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  
  &:focus {
    outline: none;
  }
}
</style>