<demo>
布局三
</demo>

<template>
  <layout style="width: 500px; height: 500px">
    <layout-aside class="z">aside</layout-aside>
    <layout>
      <layout-header class="x">header</layout-header>
      <layout-content class="y">content</layout-content>
      <layout-footer class="x">footer</layout-footer>
    </layout>
  </layout>
</template>

<script lang="ts">
import { Layout, LayoutHeader, LayoutContent, LayoutFooter, LayoutAside } from '../../lib'

export default {
  components: {
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    LayoutAside
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './layout.example.scss';
</style>
