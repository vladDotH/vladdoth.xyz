<template>
  <div id="app" class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - VladDotH` : 'VladDotH'
  },
  htmlAttrs: {
    lang: 'ru',
  },
  meta: [
    {
      name: 'description',
      content:
        `VladDotH, Болкунов Владислав. Full-stack разработчик, и просто любитель программирования.` +
        `Студент СПбГЭТУ "ЛЭТИ". Разработчик в ОИС УИТ "ЛЭТИ"`,
    },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
  ],
})
</script>
