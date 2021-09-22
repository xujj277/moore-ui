<template>
  <div class="x-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onMounted, provide } from 'vue'
import EventBus from "../eventBus"

export default {
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  setup (props, context) {
    const $eventBus = new EventBus()
    provide('$eventBus', $eventBus)
    
    onMounted(() => {
      $eventBus.emit('update:selected', props.selected)
      
      $eventBus.on('update:addSelected', name => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        if (props.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        $eventBus.emit('update:selected', selectedCopy)
        context.emit('update:selected', selectedCopy)
      })
      
      $eventBus.on('update:removeSelected', name => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected))
        const index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        $eventBus.emit('update:selected', selectedCopy)
        context.emit('update:selected', selectedCopy)
      })
    })
    return {}
  }
}
</script>

<style lang='scss'>
$border-radius: 10px;
.x-collapse {
  color: #666;
  background: rgba(255, 255, 255, 0.8);
  border-radius: $border-radius;
}
</style>
