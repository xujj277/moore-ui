<demo>
触发方式
</demo>

<template>
  <Popover trigger="click">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button>click</Button>
    </template>
  </Popover>
  <Popover trigger="hover">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button theme="primary">hover</Button>
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
