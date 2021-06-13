<template>
  <div class="Tabs" >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {provide, onMounted} from 'vue'
export default {
  name: 'Tabs',
  props: {
    activeName: {
      type: String
    }
  },
  setup (props, context) {
    console.log({...context.slots.default()})
    const updateActiveName = (value) => {
      context.emit('update:activeName', value)
    }
    provide('updateActiveName', updateActiveName)
    provide('activeName', props.activeName)
  },
}
</script>

<style lang='scss' scoped>
.Tabs {
  display: inline-flex;
  justify-content: start;
}
</style>
