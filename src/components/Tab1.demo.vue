<demo>
基本用法
</demo>

<template>
  <Tabs v-model:activeName="y1">
    <Tab title="tab1" name="1">content1</Tab>
    <Tab title="tab2" name="2">content2</Tab>
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
