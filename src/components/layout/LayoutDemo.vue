<template>
  <h2>Layout 布局</h2>
  <p class="tips">用于布局的容器组件，方便快速搭建页面的基本结构</p>
  <Demo :component="Layout1Demo"><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。</p></Demo>
  <Demo :component="Layout2Demo"><p>遇到 layout-aside 会水平左右排列</p></Demo>
  <Demo :component="Layout3Demo"></Demo>
  <Demo :component="Layout4Demo"></Demo>
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
