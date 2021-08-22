import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
  const {title, content, ok, cancel, closeOnClickOverlay} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (val) => {
          if (val === false) {
            app.unmount('')
            div.remove()
          }
        },
        ok, cancel, closeOnClickOverlay
      }, {
        title, content
      })
    }
  })
  app.mount(div)
}