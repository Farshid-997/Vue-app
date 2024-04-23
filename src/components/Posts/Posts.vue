<template>
  <h1>All the Posts</h1>
  <div>
    <div v-if="loading">Loading...</div>

    <ul>
      <li v-for="post in posts" :key="post.userId">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Post {
  userId: string
  title: string
}
const posts = ref<Post[]>([])
const loading = ref<boolean>(true)

onMounted(async () => {
  try {
    const res = fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await (await res).json()

    posts.value = data
    loading.value = false
  } catch (error) {
    console.error('error fetching data')

    loading.value = false
  }
})
</script>

<style scoped></style>
