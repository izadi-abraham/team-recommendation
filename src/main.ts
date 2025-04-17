import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { supabase } from './supabase'

// Check and set session if redirected from magic link
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' && session) {
    console.log('User signed in via magic link')
  }
})

// Recover session from magic link if available
supabase.auth.getSession().then(({ data: { session } }) => {
  if (session) {
    console.log('Session found:', session.user.email)
  }
})


createApp(App).use(router).mount('#app')
