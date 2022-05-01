<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { removeToken } from '@/utils/auth'

const router = useRouter()

function logout() {
  removeToken()
  router.push('/login')
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <div class="content">
    <RouterView />
  </div>

  <button @click="logout">Logout</button>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 2em;
  font-weight: normal;
  border: solid red 1px;
}

.wrapper {
  text-align: center;
  border: solid orange 1px;
}

.content {
  border: solid blue 1px;
}
</style>
