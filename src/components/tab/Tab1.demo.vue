<demo>
基本用法
</demo>

<template>
  <Tabs v-model:activeName="y1">
    <Tab title="庄园任务" name="1">家园订单，练出6块腹肌</Tab>
    <Tab title="每日任务" name="2">施肥，减肥</Tab>
    <Tab title="成长任务" name="3">磨练厨艺，变更可爱</Tab>
    <Tab title="长期任务" name="4">登录，越来越优秀</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs } from '../../lib'
import { Tab } from '../../lib'
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
