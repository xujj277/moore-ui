<template>
  <div class="tab">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-show="name == activeName">
      <slot></slot>
    </div>
  </div>
</template>   

<script lang="ts">
import { inject } from 'vue'
export default {
  name: 'tab',
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    }
  },
  setup (props, context) {
    const updateActiveName = inject('updateActiveName')
    const activeName = inject('activeName')
    const toggle = () => {
      updateActiveName(props.name)
    }
    return {
      toggle,
      activeName,
    }
  }
}
</script>

<style lang='scss' scoped>
.tab {
  .title {
    border-bottom: 1px solid red;
  }
  
  .content {
    
  }
}
</style>
