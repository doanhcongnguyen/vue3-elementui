<script setup>
import { ref } from 'vue'
import { setToken } from '@/utils/auth'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const form = ref({
  username: 'anything',
  password: 'anythingelse'
})

function login() {
  const mockToken = 'abc.123'
  setToken(mockToken)
  router.push(route.query.redirect || '/')
}
</script>

<template>
  <div>
    <h1>Login page here..</h1>
    <div>Username: <input type="text" v-model="form.username" /></div>
    <div>Password: <input type="password" v-model="form.password" /></div>
    <div><button @click="login">Login</button></div>
  </div>
</template>
