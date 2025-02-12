<!-- <script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style> -->

<script setup lang="ts">
import { ref } from 'vue'
//import Button from 'primevue/button'

defineProps<{ msg: string }>()

const message = ref('')
let count = ref(0)

const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/hello')
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    console.log('Resposta da API:', data)
    message.value = data.message
    count.value++
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>Welcome to the Home Page</p>
  <Button label="Click Me" class="p-button-raised p-button-primary mt-4" @click="fetchData" />
  <p v-if="message" class="mt-4">{{ message }} : {{ count }} time(s)</p>
</template>