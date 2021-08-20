<demo>
禁用状态
</demo>
<template>
  <Switch v-model:value="y3" disabled active-color="#ee9b68" inactive-color="#e8d9bf"/>
  <Switch v-model:value="y4" disabled active-color="#ee9b68" inactive-color="#f2d07d"/>
</template>

<script>
import { Switch } from '../../lib'
import { ref } from 'vue'

export default {
  components: {
    Switch
  },
  setup () {
    const y3 = ref(true)
    const y4 = ref(false)
    return {
      y3, y4
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
