<demo>
基本用法
</demo>

<template>
  <Input :value="value" :disabled="disabled" @change="onChange($event.target.value)"
         @input="onInput($event.target.value)"
         @focus="onFocus($event.target.value)"
         @blur="onBlur($event.target.value)"
         placeholder="12213123"
  ></Input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue'
import { ref } from 'vue'

export default {
  components: {
    Input,
  },
  setup (props) {
    const value = ref('')
    const disabled = ref(false)
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
      disabled,
      onChange,
      onInput,
      onFocus,
      onBlur
    }
  }
}
</script>
