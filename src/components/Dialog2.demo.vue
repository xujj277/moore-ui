<demo>
方法调用显示 dialog
</demo>

<template>
  <Button theme="primary" @click="showDialog">展示弹层</Button>
</template>

<script lang="ts">
import { Button } from '../lib/index'
import { openDialog } from '../lib/openDialog.ts'

export default {
  components: {
    Button,
  },
  setup (props) {
    const showDialog = () => {
      openDialog({
        title: () => {return 'Title'},
        content: () => {return 'hi'},
        ok: () => {return false},
        cancel: () => {},
        closeOnClickOverlay: false
      })
    }
    return {
      showDialog
    }
  }
}
</script>
