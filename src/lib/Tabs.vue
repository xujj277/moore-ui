<template>
  <div class="x-tabs">
    <div class="x-tabs-nav" ref="container">
      <div class="x-tabs-nav-item"
           v-for="(item, index) in defaults"
           :key="index"
           :class="{selected: item.props.name === activeName}"
           @click="onClick(item)"
           :ref="el => { if (item.props.name === activeName) selectedItem = el }"
      >
        {{item.props.title}}
      </div>
      <div class="x-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="x-tabs-content">
      <template v-for="item in defaults" :key="item.props.name">
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
import { ref, onMounted, watchEffect, watch } from 'vue'
export default {
  name: 'Tabs',
  props: {
    activeName: {
      type: String
    }
  },
  setup (props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(() => {
        const {width, left: left2} = selectedItem.value.getBoundingClientRect()
        const {left: left1} = container.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.width = width + 'px'
        indicator.value.style.left = left + 'px'
      }, {
        flush: 'post'
      })
    })
    
    const defaults = context.slots.default()  // 获取插槽内容
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
      selectedItem,
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
