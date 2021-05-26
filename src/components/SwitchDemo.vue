<template>
  <Switch :value="isClick" @click="onClick"/>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  name: 'switchDemo',
  components: {
    Switch
  },
  setup () {
    let isClick = ref(true)
    const onClick = () => {
      isClick.value = !isClick.value
    }
    return {
      isClick,
      onClick
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
