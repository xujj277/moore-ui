<template>
  <h2>Tabs 标签页</h2>
  <p class="tips">分隔内容上有关联但属于不同类别的数据集合。</p>
  <Demo :component="Tab1Demo"><p>提供一个 activeName 值来表示对应选中的值，用 name 作为 tab 的标识。</p></Demo>
  <Demo :component="Tab3Demo"><p>只需要设置 disabled 属性为 true, 或者直接添加 disabled。</p></Demo>
  <Demo :component="Tab2Demo"><p>只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。</p></Demo>
</template>

<script lang="ts">
import Tab1Demo from './Tab1.demo.vue'
import Tab2Demo from './Tab2.demo.vue'
import Tab3Demo from './Tab3.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {
    Demo
  },
  setup () {
    return {
      Tab1Demo,
      Tab2Demo,
      Tab3Demo
    }
  }
}
</script>
