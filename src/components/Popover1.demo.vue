<demo>
基本用法
</demo>

<template>
  <Popover>
    <template v-slot:content>content</template>
    <template v-slot:default><button>触发</button></template>
  </Popover>
</template>

<script lang="ts">
import Popover from '../lib/Popover.vue'
export default {
  components: {
    Popover
  }
}
</script>
