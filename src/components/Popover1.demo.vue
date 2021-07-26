<demo>
基本用法
</demo>

<template>
  <Popover trigger="hover">
    <template v-slot:content>content</template>
    <template v-slot:default>
      <Button>触发</Button>
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
