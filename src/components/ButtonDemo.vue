<template>
  <h2>Button 按钮</h2>
  <p>按钮用于开始一个即时操作。</p>
  <h3>基本用法</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button>Default Button</Button>
      <Button theme="primary">Primary Button</Button>
      <Button theme="danger">Danger Button</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>使用 theme 属性来定义 Button 的样式。</p>
        <p>theme 默认不写，用基础按钮样式。还可取 primary 主要按钮。</p>
      </div>
    </div>
  </div>
  <h3>文字按钮</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button theme="text">Text</Button>
      <Button theme="link">Link</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>没有边框和背景色的按钮。</p>
        <p>文本按钮: theme 为 text。链接按钮: theme 为 link。</p>
      </div>
    </div>
  </div>
  <h3>不同尺寸</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button size="big">Big Button</Button>
      <Button>Normal Button</Button>
      <Button size="small">Small Button</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>按钮有大、中、小三种尺寸。<br>
          通过设置 size 为 big small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>
      </div>
    </div>
  </div>
  <h3>禁用按钮</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button disabled>Disabled Button</Button>
      <Button theme="link" disabled>Disabled Link Button</Button>
      <Button theme="text" disabled>Disabled Text Button</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
      </div>
    </div>
  </div>
  <h3>禁用按钮</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <Button loading>Loading Button</Button>
      <Button>Loading End</Button>
    </div>
    <div class="code-block">
      <div class="description">
        <p>添加 loading 属性即可让按钮处于加载状态。</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>