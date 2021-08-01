<demo>
禁用状态
</demo>

<template>
  <Input :value="value" placeholder="点击输入米米号" :disabled="disabled"></Input>
</template>

<script lang="ts">
import { Input } from '../lib/index'
import { ref } from 'vue'

export default {
  components: {
    Input,
  },
  setup (props) {
    const value = ref('')
    const disabled = ref(true)
    return {
      value,
      disabled,
    }
  }
}
</script>
