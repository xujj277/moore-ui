<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>   

<script lang="ts">
export default {
  name: 'xTab',
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
