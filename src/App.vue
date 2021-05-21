<template>
  <div>导航栏 | <router-link to="/">1</router-link><router-link to="/example2">2</router-link></div>
  <router-view></router-view>
</template>

<script>
import example from './components/example.vue'

export default {
  name: 'App',
  components: {
    example
  }
}
</script>
