<demo>
基本用法
</demo>

<template>
  <Button theme="primary" @click="toggle">展示弹层</Button>
  <Dialog
    :closeOnClickOverlay="false"
    v-model:visible="visible"
    :ok="handleOk"
    :cancel="handleCancel"
  >
    <template v-slot:title>
      <strong>我是可爱的标题</strong>
    </template>
    <template v-slot:content>
      <div>我是帅气的内容</div>
      <strong>我的内容可以变粗</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Button } from '../lib/index'
import Dialog from '../lib/Dialog.vue'

export default {
  components: {
    Button,
    Dialog,
  },
  setup (props) {
    const visible = ref(false)
    const handleOk = () => {
      return false
    }
    const handleCancel = () => {
    }
    const toggle = () => {
      visible.value = true
    }
    return {
      visible,
      handleCancel,
      handleOk,
      toggle,
    }
  }
}
</script>
