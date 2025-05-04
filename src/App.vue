<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="max-w-lg mx-auto mt-8">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz</h5>
    <main>
      <RouterView />
    </main>
  </div>
</template>
