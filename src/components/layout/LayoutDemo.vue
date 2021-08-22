<template>
  <h2>Layout 布局</h2>
  <p class="tips">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
  <Demo :component="Layout1Demo"><p>基本使用。</p></Demo>
  <Demo :component="Layout2Demo"><p>基本使用。</p></Demo>
  <Demo :component="Layout3Demo"><p>基本使用。</p></Demo>
  <Demo :component="Layout4Demo"><p>基本使用。</p></Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Layout1Demo from './Layout1.demo.vue'
import Layout2Demo from './Layout2.demo.vue'
import Layout3Demo from './Layout3.demo.vue'
import Layout4Demo from './Layout4.demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Layout1Demo,
      Layout2Demo,
      Layout4Demo,
      Layout3Demo
    }
  }
}
</script>
