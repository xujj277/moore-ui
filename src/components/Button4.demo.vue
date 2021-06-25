<demo>
禁用按钮
</demo>

<template>
  <Button disabled>Disabled Button</Button>
  <Button theme="link" disabled>Disabled Link Button</Button>
  <Button theme="text" disabled>Disabled Text Button</Button>
  <Button theme="danger" disabled>Disabled Text Button</Button>
  <Button theme="primary" disabled>Disabled Text Button</Button>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  components: {
    Button,
  },
}
</script>
