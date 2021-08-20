<demo>
动效状态
</demo>
<template>
  <Switch v-model:value="y5" isWaveAnimation active-color="#ee9b68" inactive-color="#f2d07d"/>
</template>

<script>
import { Switch } from '../../lib'
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
