<template>
  <div class="x-tabs">
    <div class="x-tabs-nav">
      <div class="x-tabs-nav-item"
           v-for="item in defaults"
           :class="{selected: item.props.name === activeName}"
           @click="onClick(item)"
      >
        {{item.props.title}}
      </div>
      <div class="x-tabs-nav-indicator"></div>
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
export default {
  name: 'Tabs',
  props: {
    activeName: {
      type: String
    }
  },
  setup (props, context) {
    const defaults = context.slots.default()
    console.log(defaults)
    console.log(context.slots.default()[0].type === Tab)
    const onClick = (value) => {
      context.emit('update:activeName', value.props.name)
    }
    return {
      defaults,
      onClick
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
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
