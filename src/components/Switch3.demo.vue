<demo>
动效状态
</demo>
<template>
  <Switch v-model:value="y5" isWaveAnimation active-color="orange" inactive-color="grey"/>
</template>

<script>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
  components: {
    Switch
  },
  setup () {
    const y5 = ref(false)
    return {
      y5
    }
  }
}
</script>
