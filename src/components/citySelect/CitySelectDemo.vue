<template>
  <h2>CitySelect 选择城市</h2>
  <p class="tips">可以选择城市</p>
  <Demo :component="CitySelect1Demo">
    <p>CitySelect1</p>
  </Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import CitySelect1Demo from './CitySelect1.demo.vue'

export default {
  components: { Demo },
  setup () {
    return {
      CitySelect1Demo,
    }
  }
}
</script>
