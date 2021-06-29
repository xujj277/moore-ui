<demo>
卡片样式
</demo>

<template>
  <Tabs v-model:activeName="y1" type="card">
    <Tab title="家园装饰" name="1">宫廷装扮</Tab>
    <Tab title="小屋家具" name="2">温馨装置</Tab>
    <Tab title="小镇建筑" name="3">复古灯光</Tab>
    <Tab title="超拉专属" name="4">零食</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup (props) {
    const y1 = ref('1')
    return {
      y1
    }
  }
}
</script>
