<template>
  <h2>Button 按钮</h2>
  <p class="tips">按钮用于开始一个即时操作。</p>
  <Demo :component="Button1Demo"><p>使用 theme 属性来定义 Button 的样式。</p><p>theme 默认不写，用基础按钮样式。还可取 primary 主要按钮，danger 危险按钮。</p></Demo>
  <Demo :component="Button2Demo"><p>没有边框和背景色的按钮。</p><p>文本按钮: theme 为 text。链接按钮: theme 为 link。</p></Demo>
  <Demo :component="Button3Demo"><p>按钮有大、中、小三种尺寸。<br>通过设置 size 为 big small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p></Demo>
  <Demo :component="Button4Demo"><p>你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。</p></Demo>
  <Demo :component="Button5Demo"><p>添加 loading 属性即可让按钮处于加载状态。</p></Demo>
  <Demo :component="Button6Demo"><p>添加 iconPosition 属性即可设置 icon 的位置，只接受 'left' 和 'right' 两个字符串。</p></Demo>
  <Demo :component="Button7Demo"><p>设置 isWaveAnimation 属性，接受一个 Boolean ，设置 true 即可使用 wave 动效。</p></Demo>
</template>
<script lang="ts">
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
import Button6Demo from './Button6.demo.vue'
import Button7Demo from './Button7.demo.vue'
import Demo from '../Demo.vue'

export default {
  components: { Demo },
  setup () {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      Button6Demo,
      Button7Demo,
    }
  }
};
</script>