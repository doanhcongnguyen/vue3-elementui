<template>
  <div>
    <input type="text" v-model="newTodoDetail" />
    <button @click="addTodo">Add Todo</button>
    <button @click="clearTodo">Clear</button>
    <h2>Todo list</h2>
    <p v-if="todos.length === 0">Empty list</p>
    <div v-else>
      <li :key="todo.id" v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="todo.done ? 'done-todo' : 'notdone-todo'">
          {{ todo.detail }}
        </span>
      </li>
      <button v-if="!isFilteringUncomplete" @click="filterUncompleted">Uncomplete</button>
      <button v-else @click="showFullList">Full</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([])
let originalTodos = []
const newTodoDetail = ref()
let index = 0
const isFilteringUncomplete = ref(false)

function addTodo() {
  const newTodo = {
    id: index++,
    detail: newTodoDetail.value,
    done: false
  }
  todos.value.push(newTodo)
  newTodoDetail.value = ''
}

function clearTodo() {
  todos.value = []
  index = 0
}

function filterUncompleted() {
  originalTodos = todos.value
  todos.value = todos.value.filter((t) => !t.done)
  isFilteringUncomplete.value = true
}

function showFullList() {
  todos.value = originalTodos
  isFilteringUncomplete.value = false
}
</script>

<style>
.done-todo {
  color: black;
  text-decoration: line-through;
}
.notdone-todo {
  color: blue;
}
</style>
