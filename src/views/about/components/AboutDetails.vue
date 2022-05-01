<template>
  <div>
    <h2>About detail content</h2>
    {{ message }}

    <button @click="clickMe">Click me!</button>
    <button @click="resetClickedTime">Clear</button>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos vero asperiores esse
      consequuntur corrupti dignissimos ad quos possimus harum recusandae expedita, ducimus eveniet
      obcaecati. Numquam officiis odio magnam eum.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
const clickedTime = ref(0)
const _3s = 3000

setTimeout(changeMessageValue, _3s)

function changeMessageValue() {
  message.value = 'Changed'
}

function clickMe() {
  clickedTime.value++
  message.value = 'Clicked..' + clickedTime.value
}

function resetClickedTime() {
  clickedTime.value = 0
  message.value = 'Clicked..' + clickedTime.value
}
</script>
