<demo>
触发方式
</demo>

<template>
  <Popover trigger="click" @close="close" @open="open">
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
import { Popover } from '../../lib'
import { Button } from '../../lib'
export default {
  components: {
    Popover,
    Button
  },
  setup () {
    const close = () => {
      console.log('关闭了')
    }
    const open = () => {
      console.log('打开了')
    }
    return {
      close,
      open
    }
  }
}
</script>
