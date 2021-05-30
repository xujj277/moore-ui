<template>
  <h2>Switch开关</h2>
  <p>开关选择器。</p>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  
  <h3>基本用法</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Switch v-model:value="y1" active-color="#13ce66" inactive-color="grey"/>
      <Switch v-model:value="y2" active-color="#13ce66" inactive-color="#ff4949"/>
    </div>
    <div class="code-block">
      <div class="description">
        <p>绑定 v-model:value 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。</p>
      </div>
    </div>
  </div>
  <h3>禁用状态</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Switch v-model:value="y3" disabled active-color="#13ce66" inactive-color="grey"/>
      <Switch v-model:value="y4" disabled active-color="#13ce66" inactive-color="grey"/>
    </div>
    <div class="code-block">
      <div class="description">
        <p>设置 disabled 属性，接受一个 Boolean ，设置 true 即可禁用。</p>
      </div>
    </div>
  </div>
  <h3>动效状态</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Switch v-model:value="y5" isWaveAnimation active-color="orange" inactive-color="grey"/>
    </div>
    <div class="code-block">
      <div class="description">
        <p>设置 isWaveAnimation 属性，接受一个 Boolean ，设置 true 即可使用 wave 动效。</p>
      </div>
    </div>
  </div>
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
    const y1 = ref(true)
    const y2 = ref(false)
    const y3 = ref(true)
    const y4 = ref(false)
    const y5 = ref(false)
    return {
      y1, y2, y3, y4, y5
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
