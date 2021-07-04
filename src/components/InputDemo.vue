<template>
  <h2>Input</h2>
  <p class="tips">分隔内容上有关联但属于不同类别的数据集合。</p>
  <Demo :component="Input1Demo"><p>提供一个 activeName 值来表示对应选中的值，用 name 作为 tab 的标识。</p></Demo>
</template>

<script lang="ts">
import Input1Demo from './Input1.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Input1Demo
    }
  }
}
</script>
