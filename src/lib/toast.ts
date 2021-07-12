import { createApp, h } from 'vue'
import Toast from './Toast.vue'
let app

export const openToast = (options) => {
  const { autoClose, closeButton, enableHtml, position, message} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  if (app) {
    app.unmount()
  }
  app = createApp({
    render() {
      return h(Toast, {
        visible: true,
        'onUpdate:visible': (val) => {
          if (val === false) {
            app.unmount()
            div.remove()
          }
        },
        autoClose, closeButton, enableHtml, position
      }, {
        message
      })
    }
  })
  app.mount(div)
}