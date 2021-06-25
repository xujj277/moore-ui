<demo>
基本用法
</demo>
<template>
  <Switch v-model:value="y1" active-color="#13ce66" inactive-color="grey"/>
  <Switch v-model:value="y2" active-color="#13ce66" inactive-color="#ff4949"/>
</template>

<script>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
  components: {
    Switch
  },
  setup () {
    const y1 = ref(true)
    const y2 = ref(false)
    return {
      y1, y2
    }
  }
}
</script>
