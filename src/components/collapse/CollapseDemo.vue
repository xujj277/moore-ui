<template>
  <h2>Collapse 折叠面板</h2>
  <p class="tips">可以折叠/展开的内容区域。</p>
  <Demo :component="Collapse1Demo">
    <p>通过 v-model:selected 控制展开的面板列表，selectArray 为数组格式</p>
    <p>name 作为唯一的标识，title 是标题</p>
    <p>内容可以自定义，可以放其他各种组件</p>
  </Demo>
  <Demo :component="Collapse2Demo">
    <p>single 接受一个 Boolean 类型，默认值是 false，若有这个值将变成手风琴，每次只打开一个 tab</p>
  </Demo>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Collapse1Demo from './Collapse1.demo.vue'
import Collapse2Demo from './Collapse2.demo.vue'

export default {
  components: { Demo },
  setup () {
    return {
      Collapse1Demo,
      Collapse2Demo
    }
  }
}
</script>
