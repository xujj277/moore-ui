import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabDemo from './components/TabDemo.vue'
import ToastDemo from './components/ToastDemo.vue'
import PopoverDemo from './components/PopoverDemo.vue'
import InputDemo from './components/InputDemo.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const md = string => h(Markdown, {content: string, key: string}) 
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'intro', component: md(intro)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'input', component: InputDemo},
        {path: 'tabs', component: TabDemo},
        {path: 'toast', component: ToastDemo},
        {path: 'popover', component: PopoverDemo},
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('切换')
})
