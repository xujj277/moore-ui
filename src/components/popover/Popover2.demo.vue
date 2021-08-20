<demo>
位置
</demo>

<template>
  <Popover trigger="click" position="left">
    <template v-slot:content>我</template>
    <template v-slot:default>
      <Button theme="danger">left</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="right">
    <template v-slot:content>最</template>
    <template v-slot:default>
      <Button>right</Button>
    </template>
  </Popover>
  <br/>
  <div style="margin-top: 10px"></div>
  <Popover trigger="click" position="top">
    <template v-slot:content>帅</template>
    <template v-slot:default>
      <Button>top</Button>
    </template>
  </Popover>
  <Popover trigger="click" position="bottom">
    <template v-slot:content>！</template>
    <template v-slot:default>
      <Button theme="primary">bottom</Button>
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
