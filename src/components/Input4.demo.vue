<demo>
错误提示
</demo>

<template>
  <Input :value="value" placeholder="点击输入米米号"
         error="请输入内容">
  </Input>
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
    return {
      value,
    }
  }
}
</script>
