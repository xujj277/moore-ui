<template>
  <h2>Toast</h2>
  <p class="tips"></p>
  <Demo :component="Toast1Demo"><p>基本使用。</p></Demo>
</template>

<script lang="ts">
import Toast1Demo from './Toast1.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Toast1Demo
    }
  }
}
</script>
