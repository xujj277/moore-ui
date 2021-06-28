<template>
  <h2>Tabs 标签页</h2>
  <p class="tips">分隔内容上有关联但属于不同类别的数据集合。</p>
  <Demo :component="Tab1Demo"><p>提供一个 activeName 值来表示对应选中的值，用 name 作为 tab 的标识。</p></Demo>
</template>

<script lang="ts">
import Tab1Demo from './Tab1.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Tab1Demo
    }
  }
}
</script>
