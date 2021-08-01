<demo>
基本用法
</demo>

<template>
  <Button theme="primary" @click="showToast">领取</Button>
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
        message: () => {return `基础用法`},
      })
    }
    return {
      toastVisible,
      showToast
    }
  }
}
</script>
