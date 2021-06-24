<template>
  <h2>Switch 开关</h2>
  <p>开关选择器。</p>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  
  <h3>基本用法</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <component :is="Switch1Demo"></component>
    </div>
    <div class="code-block">
      <div class="description">
        <p>绑定 v-model:value 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。</p>
      </div>
    </div>
    <div class="code-block">
      <div class="description"><pre class="language-css" v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')"></pre></div>
    </div>
  </div>
  <h3>禁用状态</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <component :is="Switch2Demo"></component>
    </div>
    <div class="code-block">
      <div class="description">
        <p>设置 disabled 属性，接受一个 Boolean ，设置 true 即可禁用。</p>
      </div>
    </div>
    <div class="code-block">
      <div class="description"><pre class="language-css" v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')"></pre></div>
    </div>
  </div>
  <h3>动效状态</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <component :is="Switch3Demo"></component>
    </div>
    <div class="code-block">
      <div class="description">
        <p>设置 isWaveAnimation 属性，接受一个 Boolean ，设置 true 即可使用 wave 动效。</p>
      </div>
    </div>

    <div class="code-block">
      <div class="description"><pre class="language-css" v-html="Prism.highlight(Switch3Demo.__sourceCode, Prism.languages.html, 'html')"></pre></div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism
export default {
  name: 'switchDemo',
  setup () {
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
      Prism
    }
  }
}
</script>
