<template>
  <div>
    <Topnav/>
    <div class="content">
      <aside>边栏</aside>
      <main>内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  name: 'Doc',
  components: {
    Topnav
  }
}
</script>