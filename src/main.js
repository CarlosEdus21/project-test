import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import browsernotifications from './components/browsernotifications.vue'
import homepage from './components/homepage.vue'

const routes = [
  { path: '/bn', component: browsernotifications },
  { path: '/', component: homepage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')


