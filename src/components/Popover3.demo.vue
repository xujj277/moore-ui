<demo>
自定义内容
</demo>

<template>
  <Popover trigger="click" position="top">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button>规则</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="top">
    <template v-slot:content><Button>content</Button></template>
    <template v-slot:default>
      规则
    </template>
  </Popover>
</template>

<script lang="ts">
import Popover from '../lib/Popover.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Popover,
    Button
  }
}
</script>
