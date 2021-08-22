<demo>
基本布局
</demo>

<template>
  <layout style="width: 500px; height: 500px">
    <layout-header class="x">header</layout-header>
    <layout-content class="y">content</layout-content>
    <layout-footer class="x">footer</layout-footer>
  </layout>
</template>

<script lang="ts">
import { Layout, LayoutHeader, LayoutContent, LayoutFooter } from '../../lib'

export default {
  components: {
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  },
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './layout.example.scss';
</style>
