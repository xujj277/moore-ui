<demo>
方法调用显示 dialog
</demo>

<template>
  <Button theme="primary" @click="showDialog">展示弹层</Button>
</template>

<script lang="ts">
import { Button } from '../../lib'
import { openDialog } from '../../lib/dialog/openDialog.ts'

export default {
  components: {
    Button,
  },
  setup (props) {
    const showDialog = () => {
      openDialog({
        title: () => {return '这次我是很帅的标题'},
        content: () => {return '我是可爱的内容'},
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
