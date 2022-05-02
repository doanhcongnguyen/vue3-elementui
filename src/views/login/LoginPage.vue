<script setup>
import { ref, onMounted } from 'vue'
import { setToken } from '@/utils/auth'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const formRef = ref()
const form = ref({
  username: 'anything',
  password: 'anythingelse'
})

const usernameInput = ref()
onMounted(() => {
  usernameInput.value.focus()
})

const rules = {
  username: { required: true, message: 'Username is required!', trigger: 'blur' },
  password: { required: true, message: 'Password is required!', trigger: 'blur' }
}

async function submitForm() {
  formRef.value.validate((valid) => {
    if (valid) {
      login()
    }
  })
}

function login() {
  const mockToken = 'abc.123'
  setToken(mockToken)
  router.push(route.query.redirect || '/')
}
</script>

<template>
  <div>
    <h1>Login page here..</h1>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="15rem" size="large">
      <el-form-item label="Username" prop="username">
        <el-input ref="usernameInput" v-model="form.username" class="form-item" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password" class="form-item" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.form-item {
  width: 15rem;
}
</style>
