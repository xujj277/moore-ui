<demo>
手风琴
</demo>

<template>
  <Collapse v-model:selected="selectArray" single>
    <CollapseItem name="1" title="攻略中心">
      STRATEGY 攻略我
    </CollapseItem>
    <CollapseItem name="2" title="玩家社区">
      COMMUNITY 我在这
    </CollapseItem>
    <CollapseItem name="3" title="新闻资讯">
      NEWS 我还在！
    </CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import { Collapse } from '../../lib'
import { CollapseItem } from '../../lib'
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
