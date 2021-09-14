<template>
  <h2>Popover 气泡弹出框</h2>
  <p class="tips">点击/鼠标移入元素，弹出气泡式的卡片浮层。</p>
  <Demo :component="Popover1Demo">
    <p>trigger 接受一个 String 类型，默认值是 'click', 另一个是 'hover' 事件</p>
    <p>接收 open 和 close 事件</p>
  </Demo>
  <Demo :component="Popover2Demo">
    <p>position 接受一个 String 类型，默认值是 'top'，还可以写 'bottom'、'left' 和 'right'</p>
  </Demo>
  <Demo :component="Popover3Demo">
    <p>可以自定义被触发的 content 的内容，以及自定义触发的内容 default</p>
  </Demo>
</template>

<script lang="ts">
import Popover1Demo from './Popover1.demo.vue'
import Popover2Demo from './Popover2.demo.vue'
import Popover3Demo from './Popover3.demo.vue'
import Demo from '../Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Popover1Demo,
      Popover2Demo,
      Popover3Demo,
    }
  }
}
</script>
