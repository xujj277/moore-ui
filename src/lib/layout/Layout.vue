<template>
  <div class="moore-layout" :class="{'moore-layout-hasAside': flag}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Aside from './Aside.vue'

export default {
  name: 'moore-layout',
  setup (props, context) {
    const defaults = context.slots.default()
    const flag = defaults.some(i => i.type.name === Aside.name)
    return {
      flag
    }
  }
}
</script>

<style lang='scss'>
.moore-layout {
  display: flex;
  flex-direction: column;
  & & {
    flex-grow: 1;
    flex-direction: row;
  }
  &-hasAside {
    flex-direction: row;
    .moore-layout {
      flex-direction: column;
    }
  }
}
</style>
