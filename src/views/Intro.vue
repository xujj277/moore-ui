<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script>
import md from '../mardown/intro.md'

export default {
  name: 'intro',
  data () {
    return {
      md,
    }
  },
}
</script>

<style lang='scss'>
</style>
