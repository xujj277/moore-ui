<demo>
禁用按钮
</demo>

<template>
  <Button disabled>领取</Button>
  <Button theme="link" disabled>链接禁止按钮</Button>
  <Button theme="text" disabled>文字禁止按钮</Button>
  <Button theme="danger" disabled>目标追踪</Button>
  <Button theme="primary" disabled>取消追踪</Button>
</template>

<script lang="ts">
import { Button } from '../lib/index'

export default {
  components: {
    Button,
  },
}
</script>
