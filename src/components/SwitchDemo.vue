<template>
  <Switch :value="false" @input="y = $event"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  name: 'switchDemo',
  components: {
    Switch
  },
  setup () {
    const y = ref(true)
    return {
      y
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
