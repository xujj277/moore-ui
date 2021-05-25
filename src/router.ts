import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: 'switch', component: SwitchDemo}
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('切换')
})
