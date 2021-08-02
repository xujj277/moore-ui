<template>
  <div class="x-tabs" :class="{card: type === 'card'}">
    <div class="x-tabs-nav" ref="container">
      <div class="x-tabs-nav-item"
           v-for="(item, index) in defaults"
           :key="index"
           :class="{selected: item.props.name === activeName, disabled: item.props.disabled === '' || item.props.disabled}"
           @click="onClick(item)"
           :ref="el => { if (item.props.name === activeName) selectedItem = el }"
      >
        <span>
          {{ item.props.title }}
        </span>
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
    },
    type: {
      type: String
    },
    disabled: {
      type: [Boolean, String],
      default: false
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
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const onClick = (value) => {
      if (value.props.disabled || value.props.disabled === '') return
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
$yellow: #cd9350;
$color: #fff;
$border-color: #b0967a;

.x-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      flex-shrink: 0;

      &:first-child {
        margin-left: 0;
      }

      &.disabled {
        color: rgba(0, 0, 0, .25);

        &:hover {
          cursor: not-allowed;
        }
      }

      &.selected {
        color: $yellow;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $yellow;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.2s;
    }
  }

  &.card {
    position: relative;

    .x-tabs-nav {
      box-sizing: border-box;
      background: linear-gradient(90deg, transparent 0%, rgba(77, 108, 179, 0.4) 50%, transparent 100%);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-left: none;
      border-right: none;
    }

    .x-tabs-nav-item {
      margin: 0 10px;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        background: #eae6d2;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 18px;
        padding: 6px 0;

        span {
          padding: 8px;
          border: 1px solid #e5cca5;
          border-radius: 18px;
        }
      }

      span {
        padding: 11px;
      }
    }

    .x-tabs-nav-indicator {
      display: none;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
