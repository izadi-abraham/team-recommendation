<template>
  <div>
    <h2>Sign In</h2>
    <input v-model="email" type="email" placeholder="Enter your email" />
    <button @click="signIn">Send Magic Link</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const signIn = async () => {
  const { error } = await supabase.auth.signInWithOtp({ email: email.value })
  if (error) alert('Error sending link')
  else alert('Check your email for the login link')
}
</script>
