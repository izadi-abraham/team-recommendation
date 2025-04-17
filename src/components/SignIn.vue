<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign In</h2>
      
      <div class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        
        <button
          @click="signIn"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          Send Magic Link
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const email = ref('')
const router = useRouter()

const signIn = async () => {
  const { error } = await supabase.auth.signInWithOtp({ email: email.value })
  if (error) alert('Error sending link')
  else alert('Check your email for the login link')
}

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    router.push('/dashboard')
  }
})
</script>
