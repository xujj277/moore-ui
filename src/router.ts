import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Tab from './components/Tab.vue'
import DocDemo from './components/DocDemo.vue'

export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', 
      component: Doc, 
      children: [
        {path: '/', component: DocDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: Tab},
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('切换')
})
