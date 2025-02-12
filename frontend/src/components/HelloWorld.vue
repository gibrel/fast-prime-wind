<script setup lang="ts">
import { ref } from 'vue'

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