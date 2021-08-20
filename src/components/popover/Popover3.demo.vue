<demo>
自定义内容
</demo>

<template>
  <Popover trigger="click" position="top">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button theme="primary">规则</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="top">
    <template v-slot:content><Button theme="danger">按我</Button></template>
    <template v-slot:default>
      规则
    </template>
  </Popover>
</template>

<script lang="ts">
import { Popover } from '../../lib'
import { Button } from '../../lib'
export default {
  components: {
    Popover,
    Button
  }
}
</script>
