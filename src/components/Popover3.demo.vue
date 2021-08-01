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
    <template v-slot:content><Button theme="danger">content</Button></template>
    <template v-slot:default>
      规则
    </template>
  </Popover>
</template>

<script lang="ts">
import { Popover } from '../lib/index'
import { Button } from '../lib/index'
export default {
  components: {
    Popover,
    Button
  }
}
</script>
