<template>
  <div class="x-collapse-item">
    <div class="x-title" @click="toggle">
      {{title}}

      <svg class="x-right" :class="{active: open}">
        <use xlink:href="#icon-right"></use>
      </svg>
    </div>
    <div class="x-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref } from 'vue'

export default {
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  },
  setup (props) {
    const $eventBus = inject('$eventBus')
    let open = ref(false)
    onMounted(() => {
      $eventBus.on('update:selected', name => {
        if (name.indexOf(props.name) > -1) {
          open.value = true
        } else {
          open.value = false
        }
      })
    })
    const toggle = () => {
      if (open.value) {
        $eventBus.emit('update:removeSelected', props.name)
      } else {
        $eventBus.emit('update:addSelected', props.name)
      }
    }
    return {
      open,
      toggle
    }
  }
}
</script>

<style lang='scss'>
$border-radius: 10px;
.x-collapse-item {
  > .x-title {
    background: #e79579;
    border: 2px solid #fff;
    margin-top: -2px;
    margin-left: -2px;
    margin-right: -2px;
    min-height: 50px;
    display: flex;
    align-content: center;
    padding: 0 8px;
    line-height: 50px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .x-right {
      width: 15px;
      height: 15px;
      fill: white;
      transition: all 200ms;
      
      &.active {
        transform: rotate(90deg);
      }
    }
  }
  &:first-child {
    > .x-title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .x-title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    > .x-content:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .x-content {
    padding: 8px;
    border-right: 2px solid #fff;
    border-left: 2px solid #fff;
    margin-left: -2px;
    margin-right: -2px;
  }
}
</style>
