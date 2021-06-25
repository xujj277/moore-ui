<template>
  <h2>Switch 开关</h2>
  <p>开关选择器。</p>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  <Demo :component="Switch1Demo"><p>绑定 v-model:value 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。</p></Demo>
  <Demo :component="Switch2Demo"><p>设置 disabled 属性，接受一个 Boolean ，设置 true 即可禁用。</p></Demo>
  <Demo :component="Switch3Demo"><p>设置 isWaveAnimation 属性，接受一个 Boolean ，设置 true 即可使用 wave 动效。</p></Demo>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'
import Demo from './Demo.vue'

export default {
  name: 'switchDemo',
  components: {
    Demo
  },
  setup () {
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
    }
  }
}
</script>
