<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script>
import md from '../mardown/install.md'
export default {
  name: 'Install',
  data () {
    return {
      md,
    }
  },
}
</script>

<style lang='scss' scoped>
</style>
