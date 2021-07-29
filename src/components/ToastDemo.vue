<template>
  <h2>Toast 轻提示</h2>
  <p class="tips">在页面弹出提示，用于消息通知、加载提示、操作结果提示等场景。</p>
  <Demo :component="Toast1Demo">
    <p>从顶部出现，3 秒后自动消失。</p>
    <p>函数调用的方式显示 toast，options 里 message 写入文案</p>
  </Demo>
  <Demo :component="Toast2Demo">
    <p>autoClose 参数接受两个类型 Boolean 和 Number。当 autoClose 是 Number 时，对应多少秒后关闭。默认 3s 自动关闭</p>
    <p>当 autoClose 是 false 时，不会自动关闭。建议搭配 closeButton 参数使用，接受 Object 和 Boolean, 默认 false, 不显示。
    Object 接受 text 和 callback , text 对应文案， callback 关闭后的回调。</p>
  </Demo>
  <Demo :component="Toast3Demo">
    <p>position 接受一个 String 类型，默认值是 'top'，还可以写 'middle' 和 'bottom'</p>
  </Demo>
  <Demo :component="Toast4Demo">
    <p>enableHtml 接受一个 Boolean 类型，默认值是 false</p>
  </Demo>
</template>

<script lang="ts">
import Toast1Demo from './Toast1.demo.vue'
import Toast2Demo from './Toast2.demo.vue'
import Toast3Demo from './Toast3.demo.vue'
import Toast4Demo from './Toast4.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Toast1Demo,
      Toast2Demo,
      Toast3Demo,
      Toast4Demo
    }
  }
}
</script>
