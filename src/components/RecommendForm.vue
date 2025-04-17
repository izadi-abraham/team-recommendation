<template>
  <form @submit.prevent="submit">
    <input v-model="to" placeholder="Person you recommend" />
    <textarea v-model="message" placeholder="Why do you recommend them?" />
    <button type="submit">Submit Recommendation</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const to = ref('')
const message = ref('')

const submit = async () => {
  const user = (await supabase.auth.getUser()).data.user
  if (!user) return alert('Not signed in')

  const { error } = await supabase.from('recommendations').insert([
    {
      from: user.email,
      to: to.value,
      message: message.value,
    }
  ])

  if (error) alert('Failed to save')
  else alert('Recommendation submitted')
}
</script>
