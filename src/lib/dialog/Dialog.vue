<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="x-dialog-overlay" @click="onClickOverlay"></div>
      <div class="x-dialog-wrapper">
        <div class="x-dialog">
          <div class="x-dialog-border">
            <header>
              <slot name="title"/>
              <svg class="x-dialog-close" @click="close">
                <use xlink:href="#icon-close"></use>
              </svg>
            </header>
            <main>
              <slot name="content"/>
            </main>
            <footer>
              <Button theme="primary" @click="onCancel">Cancel</Button>
              <Button @click="onConfirm">OK</Button>
            </footer>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from '../Button.vue'

export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup (props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onCancel = () => {
      if (props.cancel && props.cancel() !== false) {
        close()
      }
    }
    const onConfirm = () => {
      if (props.ok && props.ok() !== false) {
        close()
      }
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    return {
      onCancel,
      onConfirm,
      close,
      onClickOverlay
    }
  }
}
</script>

<style lang='scss'>
$radius: 20px;
$border-color: #eae2d3;

.x-dialog {
  background: #f8f5e4;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 20em;
  max-width: 90%;
  padding: 5px;
  border-radius: $radius;
  
  &-border {
    border-radius: $radius;
    border: 2px solid #eed5ab;
    padding: 5px;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 12;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 13;
  }
  header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  main {
    padding: 12px 16px;
  }
  footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    fill: #bd997c;
  }
}
</style>
