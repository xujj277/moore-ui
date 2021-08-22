<template>
  <div class="moore-layout-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'moore-layout-content',
}
</script>

<style lang='scss'>
.moore-layout-content {
  flex: 1;
}
</style>
