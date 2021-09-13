<template>
  <h2>Scroll 滚动条</h2>
  <p class="tips">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
  <Demo :component="Scroll1Demo"><p>基本使用。</p></Demo>
</template>

<script lang="ts">
import Scroll1Demo from './Scroll1.demo.vue'
import Demo from '../Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Scroll1Demo,
    }
  }
}
</script>
