<template>
  <h2>Input 输入框</h2>
  <p class="tips">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
  <Demo :component="Input1Demo"><p>基本使用。</p></Demo>
  <Demo :component="Input2Demo"><p>通过 disabled 属性指定是否禁用 input 组件</p></Demo>
  <Demo :component="Input3Demo"><p>blur 在 Input 失去焦点时触发、focus 在 Input 获得焦点时触发、change 仅在输入框失去焦点或用户按下回车时触发、input 在 Input 值改变时触发</p></Demo>
  <Demo :component="Input4Demo"><p>错误提示</p></Demo>
</template>

<script lang="ts">
import Input1Demo from './Input1.demo.vue'
import Input2Demo from './Input2.demo.vue'
import Input3Demo from './Input3.demo.vue'
import Input4Demo from './Input4.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo
    }
  }
}
</script>
