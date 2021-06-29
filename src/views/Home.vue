<template>
  <div>
    <div class="home-page">
      <Topnav/>
      <div class="banner">
        <h1>摩尔UI</h1>
        <h2>一个关于摩尔庄园的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/xujj277/xu-ui-1">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h2>基于 Vue 3</h2>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h2>基于 TypeScript </h2>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h2>代码易读</h2>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  name: 'App',
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
$moBgColor: #e7977b;
$border-radius: 4px;
$color: #c66f48;

.home-page {
  background: linear-gradient(145deg, rgba(245,235,224,1) 0%, rgba(229,211,196,1) 49%, rgba(244,234,223,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  
  .topnav {
    background: none;
    box-shadow: none;
  }
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  
  @media (min-width: 800px) {
    width: 800px;
    
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    
    >ul {
      >li {
        width: 33.33%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h2 {
        grid-area: title;
        font-size: 28px;
        color: #885345;
      }
      >p {
        grid-area: text;
        color: #c08364;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $moBgColor;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>