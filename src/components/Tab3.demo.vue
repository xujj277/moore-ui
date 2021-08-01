<demo>
禁用选项
</demo>

<template>
  <Tabs v-model:activeName="y1">
    <Tab title="庄园任务" name="1" :disabled="true">家园订单</Tab>
    <Tab title="每日任务" name="2">施肥</Tab>
    <Tab title="成长任务" name="3" disabled>磨练厨艺</Tab>
    <Tab title="长期任务" name="4">登录</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs } from '../lib/index'
import { Tab } from '../lib/index'
import { ref } from 'vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup (props) {
    const y1 = ref('2')
    return {
      y1,
    }
  }
}
</script>
