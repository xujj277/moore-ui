<template>
  <h2>Scroll 滚动条</h2>
  <p class="tips">自制滚动条，实现下拉更新</p>
  <Demo :component="Scroll1Demo"><p>滚动条基本使用</p></Demo>
  <Demo :component="Scroll2Demo"><p>手机下拉更新，onPull 接收更新后的事件</p></Demo>
</template>

<script lang="ts">
import Scroll1Demo from './Scroll1.demo.vue'
import Scroll2Demo from './Scroll2.demo.vue'
import Demo from '../Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Scroll1Demo,
      Scroll2Demo,
    }
  }
}
</script>
