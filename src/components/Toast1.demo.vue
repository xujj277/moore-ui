<demo>
基本用法
</demo>

<template>
  <Button @click="showToast">领取</Button>
  <Toast v-if="toastVisible"></Toast>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Toast from '../lib/Toast.vue'
import { ref } from 'vue'
import { openToast } from '../lib/toast.ts'

export default {
  components: {
    Button,
    Toast,
  },
  setup () {
    let toastVisible = ref(false)
    const showToast = () => {
      openToast({
        message: () => {return `<strong>asdfasdf</strong>`},
        autoClose: false,
        closeButton: false,
        enableHtml: false,
      })
    }
    return {
      toastVisible,
      showToast
    }
  }
}
</script>
