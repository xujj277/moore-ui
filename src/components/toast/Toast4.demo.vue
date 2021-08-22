<demo>
是否可以写入HTML
</demo>

<template>
  <Button theme="primary" @click="showToast">enableHtml</Button>
</template>

<script lang="ts">
import { Button } from '../../lib'
import { ref } from 'vue'
import { openToast } from '../../lib/toast/toast.ts'

export default {
  components: {
    Button,
  },
  setup () {
    let toastVisible = ref(false)
    const showToast = () => {
      openToast({
        message: () => {return `<strong>hello</strong> world`},
        enableHtml: true
      })
    }
    return {
      toastVisible,
      showToast,
    }
  }
}
</script>
