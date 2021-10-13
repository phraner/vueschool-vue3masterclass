import { createApp } from 'vue'
import App from './App.vue'
import PageHome from './components/PageHome'
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const forumApp = createApp(App)
forumApp.use(router)
createApp(App).mount('#app')
