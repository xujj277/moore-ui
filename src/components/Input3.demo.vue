<demo>
Input 事件
</demo>

<template>
  <Input :value="value" placeholder="点击输入米米号"
         @change="onChange($event.target.value)"
         @input="onInput($event.target.value)"
         @focus="onFocus($event.target.value)"
         @blur="onBlur($event.target.value)">
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
    const onChange = (value) => {
      console.log('onChange', value)
    }
    const onInput = (value) => {
      console.log('onInput', value)
    }
    const onFocus = (value) => {
      console.log('onFocus', value)
    }
    const onBlur = (value) => {
      console.log('onBlur', value)
    }
    return {
      value,
      onChange,
      onInput,
      onFocus,
      onBlur
    }
  }
}
</script>
