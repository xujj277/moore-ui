import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import Tab from './components/TabDemon.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename})
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('get-started')},
        {path: 'intro', component: md('intro')},
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
