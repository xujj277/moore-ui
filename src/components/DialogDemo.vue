<template>
  <h2>Dialog 对话框</h2>
  <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
  <h3>基本用法</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button @click="toggle">展示弹层</Button>
      <Dialog
        :closeOnClickOverlay="false"
        v-model:visible="visible"
        :ok="handleOk"
        :cancel="handleCancel"
      >
        <template v-slot:title>
          <strong>Title</strong>
        </template>
        <template v-slot:content>
          <div>hi</div>
          <strong>hi</strong>
        </template>
      </Dialog>
    </div>
    <div class="code-block">
      <div class="description">
        <p>需要设置 visible 属性，它接收 Boolean，当为 true 时显示 Dialog。
          Dialog 分为两个部分：title 和 content，title 需要具名为 title 的 slot, content 需要具名为 content 的 slot。
          接受 ok 和 cancel 两个函数，当返回值是 false 时，可打断 dialog 关闭。
          closeOnClickOverlay 接收 Boolean，为 false 时点击弹框以为的部分不会关闭弹框，默认 true。</p>
      </div>
    </div>
  </div>
  <h3>方法调用显示 dialog</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button @click="showDialog">展示弹层</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>使用 openDialog() 可以快捷地弹出确认框。接受一个 options ，参数支持 title、content、ok 函数，cancel 函数、closeOnClickOverlay。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
import { ref } from 'vue'

export default {
  name: '',
  components: {
    Dialog,
    Button
  },
  setup (props) {
    const Title = '我是标题'
    const visible = ref(false)
    const handleOk = () => {
      return false
    }
    const handleCancel = () => {
    }
    const toggle = () => {
      visible.value = true
    }
    const showDialog = () => {
      openDialog({
        title: Title,
        content: 'hi',
        ok: () => {
          return false
        },
        cancel: () => {
        },
        closeOnClickOverlay: false
      })
    }
    return {
      Title,
      visible,
      handleCancel,
      handleOk,
      toggle,
      showDialog
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
