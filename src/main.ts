import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import example from './components/example.vue'
import example2 from './components/example2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: example},
    {path: '/example2', component: example2}
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
