<demo>
基本用法
</demo>

<template>
  <Input :value="value" placeholder="Basic usage"></Input>
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
