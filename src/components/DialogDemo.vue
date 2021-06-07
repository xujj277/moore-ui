<template>
  <div>
    <Button @click="onClick">展示弹层</Button>
    <Dialog
      title="Title"
      v-model:visible="visible"
      @confirm="handleOk"
      @cancel="handleCancel"
    ></Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
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
    }
    const handleCancel = () => {
      console.log(2)
    }
    const onClick = () => {
      visible.value = true
    }
    return {
      Title,
      visible,
      handleCancel,
      handleOk,
      onClick
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
