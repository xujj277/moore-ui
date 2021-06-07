<template>
  <div>
    <Button @click="showDialog">展示弹层</Button>
    <Dialog
      :closeOnClickOverlay="false"
      :title="Title"
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
      console.log(1)
      return false
    }
    const handleCancel = () => {
      console.log(2)
    }
    const toggle = () => {
      visible.value = true
    }
    const showDialog = () => {
      openDialog({
        title: Title,
        content: 'hi',
        ok: () => {
          console.log(1)
          return false
        },
        cancel: () => {
          console.log(2)
        }
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
