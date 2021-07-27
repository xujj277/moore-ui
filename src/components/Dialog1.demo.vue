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
      <strong>title</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
      <strong>hi</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import Button from '../lib/Button.vue'
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
