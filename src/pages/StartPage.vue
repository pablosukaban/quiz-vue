<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import { useRouter, type LocationQueryRaw } from 'vue-router'
import { categories, difficulties, types } from '@/constants'
import type { ListItem } from '@/types'
import { ERoutes } from '@/router'

const router = useRouter()

const questionsCount = ref(10)
const category = ref<ListItem>(categories[0])
const difficulty = ref<ListItem>(difficulties[0])
const type = ref<ListItem>(types[0])

function handleClick() {
  const queryParams: LocationQueryRaw = {
    amount: questionsCount.value,
    category: category.value.value,
    difficulty: difficulty.value.value,
    type: type.value.value,
  }

  Object.keys(queryParams).forEach((key) => {
    if (queryParams[key] === undefined || queryParams[key] === 'any') {
      delete queryParams[key]
    }
  })

  router.push({
    name: ERoutes.QUIZ,
    query: queryParams,
  })
}
</script>

<template>
  <div class="card grid grid-cols-2 gap-4">
    <div class="w-full">
      <label class="font-bold block mb-2"> Number of Questions </label>
      <InputNumber v-model="questionsCount" inputId="questionsCount" fluid />
    </div>
    <div class="w-full">
      <label class="font-bold block mb-2"> Select category </label>
      <Select v-model="category" :options="categories" optionLabel="name" class="w-full" />
    </div>
    <div class="w-full">
      <label class="font-bold block mb-2"> Select Difficulty </label>
      <Select v-model="difficulty" :options="difficulties" optionLabel="name" class="w-full" />
    </div>
    <div class="w-full">
      <label class="font-bold block mb-2"> Select Type </label>
      <Select v-model="type" :options="types" optionLabel="name" class="w-full" />
    </div>
  </div>
  <div class="w-full flex justify-center items-center mt-4">
    <Button label="Start" @click="handleClick()" />
  </div>
</template>
