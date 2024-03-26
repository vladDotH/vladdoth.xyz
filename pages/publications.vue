<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Мои статьи и публикации:</h1>
        <ul
          class="flex decoration-none gap-5 justify-center p-0 flex-col pr-8 lg:p-0"
        >
          <li>
            Миграция на Vue 2.7 // Habr
            <a href="https://habr.com/p/738032/">https://habr.com/p/738032/</a>
          </li>
          <li>
            Разработка архитектуры веб-приложения контроля посещаемости ВУЗа /
            Болкунов В.О., Беляев С.А. //
            <a
              href="https://etu.ru/assets/files/Faculty-FKTI/MO/sbornik-2024-moevm-2.pdf"
            >
              Сборник докладов студентов и аспирантов на научно-техническом
              семинаре кафедры МО ЭВМ, 2024 год С. 58-65
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Публикации',
})
</script>
