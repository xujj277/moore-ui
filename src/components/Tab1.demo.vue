<demo>
基本用法
</demo>

<template>
  <Tabs v-model:activeName="y1">
    <Tab title="庄园任务" name="1">家园订单</Tab>
    <Tab title="每日任务" name="2">施肥</Tab>
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
