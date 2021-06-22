<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-zhuangyuan"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'
export default {
  name: 'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    console.log(11111, menuVisible.value)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    
    >svg {
      width: 32px;
      height: 32px;
      fill: #e7977b;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>