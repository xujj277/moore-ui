<template>
  <div class="x-tabs">
    <div class="x-tabs-nav" ref="container">
      <div class="x-tabs-nav-item"
           v-for="(item, index) in defaults"
           :class="{selected: item.props.name === activeName}"
           @click="onClick(item)"
           :ref="el => { if (el) navItems[index] = el }"
      >
        {{item.props.title}}
      </div>
      <div class="x-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="x-tabs-content">
      <template v-for="item in defaults">
        <component class="x-tabs-content-item"
                   :is="item"
                   v-if="item.props.name === activeName"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { ref, onMounted, onUpdated } from 'vue'
export default {
  name: 'Tabs',
  props: {
    activeName: {
      type: String
    }
  },
  setup (props, context) {
    const navItems = ref<HTMLDivElement>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const defaults = context.slots.default()
    const x = () => {
      const div = navItems.value
      const result = div.filter(div => div.classList.contains('selected'))[0]
      const {width, left: left2} = result.getBoundingClientRect()
      const {left: left1} = container.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.width = width + 'px'
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const onClick = (value) => {
      context.emit('update:activeName', value.props.name)
    }
    return {
      defaults,
      onClick,
      navItems,
      indicator,
      container
    }
  },
}
</script>

<style lang='scss'>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.x-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.3s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
