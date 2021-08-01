<demo>
位置
</demo>

<template>
  <Popover trigger="click" position="top">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button>top</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="bottom">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button theme="primary">bottom</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="left">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button theme="danger">left</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="right">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button>right</Button>
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
