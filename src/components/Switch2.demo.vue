<demo>
禁用状态
</demo>
<template>
  <Switch v-model:value="y3" disabled active-color="#13ce66" inactive-color="grey"/>
  <Switch v-model:value="y4" disabled active-color="#13ce66" inactive-color="grey"/>
</template>

<script>
import Switch from '../lib/Switch.vue'
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
