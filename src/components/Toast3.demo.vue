<demo>
自定义位置
</demo>

<template>
  <Button @click="showToast">上面</Button>
  <Button theme="primary" @click="showToast1">中间</Button>
  <Button theme="danger" @click="showToast2">下面</Button>
</template>

<script lang="ts">
import { Button } from '../lib/index'
import { ref } from 'vue'
import { openToast } from '../lib/toast.ts'

export default {
  components: {
    Button,
  },
  setup () {
    let toastVisible = ref(false)
    const showToast = () => {
      openToast({
        message: () => {return '我在上面，嘿嘿嘿'},
      })
    }
    const showToast1 = () => {
      openToast({
        message: () => {return '我在中间，哈哈哈'},
        position: 'middle'
      })
    }
    const showToast2 = () => {
      openToast({
        message: () => {return '我在下面，hhh'},
        position: 'bottom'
      })
    }
    return {
      toastVisible,
      showToast,
      showToast1,
      showToast2
    }
  }
}
</script>
