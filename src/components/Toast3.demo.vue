<demo>
自定义位置
</demo>

<template>
  <Button @click="showToast">上面</Button>
  <Button @click="showToast1">中间</Button>
  <Button @click="showToast2">下面</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
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
        message: () => {return 'top'},
      })
    }
    const showToast1 = () => {
      openToast({
        message: () => {return 'middle'},
        position: 'middle'
      })
    }
    const showToast2 = () => {
      openToast({
        message: () => {return 'bottom'},
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
