import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Tab from './components/TabDemon.vue'
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
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStarted},
        {path: 'intro', component: Intro},
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
