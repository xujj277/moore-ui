<demo>
基本用法
</demo>

<template>
  <Collapse v-model:selected="selectArray">
    <CollapseItem name="1" title="官方公众号">
      摩尔庄园
    </CollapseItem>
    <CollapseItem name="2" title="官方微博">
      asdfas@sina.com
    </CollapseItem>
    <CollapseItem name="3" title="官方QQ群">
      939213414xx
    </CollapseItem>
    <CollapseItem name="4" title="联系客服">
      400000000
    </CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import Collapse from '../lib/Collapse.vue'
import CollapseItem from '../lib/CollapseItem.vue'
import { ref } from 'vue'
export default {
  components: {
    Collapse,
    CollapseItem
  },
  setup () {
    const selectArray = ref(['1', '3'])
    return {
      selectArray
    }
  }
}
</script>

<style lang='scss'>
</style>
