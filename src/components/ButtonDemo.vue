<template>
  <x-button @click="xxx" @focus="xxx" @mouseover="xxx" :size="'large'">xxx</x-button>
</template>

<script lang="ts">
import xButton from '../lib/Button.vue'
export default {
  components: {xButton},
  setup () {
    const xxx = () => {
      console.log(2222)
    }
    return {
      xxx
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
