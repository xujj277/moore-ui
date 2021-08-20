<demo>
自动关闭和关闭按钮
</demo>

<template>
  <Button theme="primary" @click="showToast">不自动关闭</Button>
</template>

<script lang="ts">
import { Button } from '../../lib'
import { ref } from 'vue'
import { openToast } from '../../lib/toast.ts'

export default {
  components: {
    Button,
  },
  setup () {
    let toastVisible = ref(false)
    const showToast = () => {
      openToast({
        message: () => {return `我不会自动关闭，帮我点一下右边这个按钮`},
        autoClose: false,
        closeButton: {
          text: '关闭',
          callback: () => {console.log('关闭后回调')}
        },
      })
    }
    return {
      toastVisible,
      showToast
    }
  }
}
</script>
