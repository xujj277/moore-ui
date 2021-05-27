<template>
  <x-button @click="xxx">xxx</x-button>
  <x-button type="info">xxx</x-button>
  <x-button type="info" size="large">xxx</x-button>
  <x-button disabled>xxx</x-button>
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
