<template>
  <div
    class="w-full bg-white border border-gray-200 shadow-md dark:bg-zinc-800/50 dark:border-gray-800 flex flex-col"
  >
    <a :href="project.url ?? project.github_url" target="_blank" class="block">
      <lazy-client-only>
        <img
          class="w-full sm:h-35 aspect-video object-cover"
          :src="project.image"
          :alt="`Image for ${project.title}`"
        />
      </lazy-client-only>
    </a>
    <div class="px-3 pb-3 pt-2 grow flex flex-col justify-between gap-1">
      <div>
        <h5
          class="mb-2 text-xl mt-0 font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <a :href="project.url" target="_blank">
            {{ project.title }}
          </a>
        </h5>
        <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>

      <div class="flex gap-2 bottom-2 flex-wrap">
        <span
          v-for="stack in project.technologies"
          class="whitespace-nowrap shadow-sm text-white px-2 py-1 rounded-full text-[.7rem]"
          :class="stack.classes ?? 'bg-green-500'"
        >
          {{ stack.name }}
        </span>

        <a
          v-if="!!project.github_url"
          class="grow text-right"
          :href="project.github_url"
          target="_blank"
          :title="project.title + ' Github link'"
        >
          <div class="inline-block i-mdi-github w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '~/stores/projects'

const props = defineProps<{
  project: Project
}>()
</script>

<style>
.stacks {
  scrollbar-width: thin;
}
</style>
