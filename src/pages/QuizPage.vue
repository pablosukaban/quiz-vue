<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleBack() {
  router.back()
}
</script>
<template>
  <div>
    {{ $route.fullPath }}
  </div>
  <Button label="back" @click="handleBack()" />
</template>
