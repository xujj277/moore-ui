<template>
  <Tabs v-model:activeName="y1">
    <Tab title="导航1" name="1">内容1</Tab>
    <Tab title="导航2" name="2">内容2</Tab>
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
  setup () {
    const y1 = ref('1')
    return {
      y1
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
