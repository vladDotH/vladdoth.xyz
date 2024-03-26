<template>
  <section class="content">
    <div class="px-3 lg:px-0 mx-auto max-w-[75ch]!">
      <div class="prose">
        <h1 class="text-center">Проекты</h1>
        <div class="project-cards | grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
          <Card
            v-for="(project, index) in store.projects"
            :key="index"
            :project="project"
            class="w-full"
          >
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/stores/projects'

definePageMeta({
  layout: 'main',
})
useHead({
  title: 'Проекты',
})

const store = useProjectsStore()
</script>
