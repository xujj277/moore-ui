<template>
  <h2>Dialog 对话框</h2>
  <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
  <Demo :component="Dialog1Demo"><p>需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog。
    Dialog 分为两个部分：title 和 content，title 需要具名为 title 的 slot, content 需要具名为 content 的 slot。
    接受 ok 和 cancel 两个函数，当返回值是 false 时，可打断 dialog 关闭。
    closeOnClickOverlay 接收 Boolean，为 false 时点击弹框以为的部分不会关闭弹框，默认 true。</p></Demo>
  <Demo :component="Dialog2Demo"><p>使用 openDialog() 可以快捷地弹出确认框。接受一个 options ，参数支持 title、content、ok 函数，cancel 函数、closeOnClickOverlay。</p></Demo>
</template>

<script lang="ts">
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
import Demo from './Demo.vue'

export default {
  name: '',
  components: {
    Demo,
  },
  setup (props) {
    return {
      Dialog1Demo,
      Dialog2Demo,
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
