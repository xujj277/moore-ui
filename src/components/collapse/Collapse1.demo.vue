<demo>
基本用法
</demo>

<template>
  <Collapse v-model:selected="selectArray">
    <CollapseItem name="1" title="官方公众号">
      摩尔庄园
    </CollapseItem>
    <CollapseItem name="2" title="官方微博">
      asdfas@sina.com 我乱写的
    </CollapseItem>
    <CollapseItem name="3" title="官方QQ群">
      <Popover trigger="click">
        <template v-slot:content>939****41 这个是真的</template>
        <template v-slot:default>
          <Button>click</Button>
        </template>
      </Popover>
    </CollapseItem>
    <CollapseItem name="4" title="联系客服">
      135****6809  这个是真电话
    </CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import { Collapse } from '../../lib'
import { CollapseItem } from '../../lib'
import { Popover } from '../../lib'
import { Button } from '../../lib'
import { ref } from 'vue'
export default {
  components: {
    Collapse,
    CollapseItem,
    Popover,
    Button
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
