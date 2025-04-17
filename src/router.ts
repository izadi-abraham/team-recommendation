import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './components/SignIn.vue'
import Dashboard from './components/Dashboard.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: SignIn },
    { path: '/dashboard', component: Dashboard }
  ]
})
