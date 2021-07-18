<template>
  <h2>Popover</h2>
  <p class="tips">点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
  <Demo :component="Popover1Demo">
    <p>从顶部出现，3 秒后自动消失。</p>
  </Demo>
</template>

<script lang="ts">
import Popover1Demo from './Popover1.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Popover1Demo,
    }
  }
}
</script>
