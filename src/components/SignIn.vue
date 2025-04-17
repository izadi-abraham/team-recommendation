<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

const email = ref('')
const router = useRouter()

const signIn = async () => {
  const { error } = await supabase.auth.signInWithOtp({ email: email.value })
  if (error) alert('Error sending link')
  else alert('Check your email for the login link')
}

// 🔥 On mount, redirect if already signed in
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    console.log('Redirecting to dashboard...')
    router.push('/dashboard')
  }
})
</script>
