<demo>
手风琴
</demo>

<template>
  <Collapse v-model:selected="selectArray" single>
    <CollapseItem name="1" title="攻略中心">
      STRATEGY
    </CollapseItem>
    <CollapseItem name="2" title="玩家社区">
      COMMUNITY
    </CollapseItem>
    <CollapseItem name="3" title="新闻资讯">
      NEWS
    </CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import { Collapse } from '../lib/index'
import { CollapseItem } from '../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Collapse,
    CollapseItem
  },
  setup () {
    const selectArray = ref(['2'])
    return {
      selectArray
    }
  }
}
</script>

<style lang='scss'>
</style>
