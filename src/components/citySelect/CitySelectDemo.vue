<template>
  <h2>CitySelect 选择城市</h2>
  <p class="tips">可以选择城市</p>
  <Demo :component="CitySelect1Demo">
    <p>接受 dataSource 传入一个城市的数组列表</p>
    <p>需要设置 visible 属性，它接收 Boolean，当为 true 时显示 CitySelect。</p>
    <p>onChange 事件被触发时通知被选择了什么城市</p>
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
