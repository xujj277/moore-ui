<template>
  <div>
    <Button @click="toggle">展示弹层</Button>
    <Dialog
      :closeOnClickOverlay="false"
      title="Title"
      v-model:visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
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
    return {
      Title,
      visible,
      handleCancel,
      handleOk,
      toggle
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
