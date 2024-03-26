<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Связаться со мной:</h1>

        <div class="cards max-w-[300px] mx-auto">
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-gmail w-6 h-6 bg-red-500"></div>
            <a href="mailto:vladbolkunovv@gmail.com">vladbolkunovv@gmail.com</a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-telegram w-6 h-6 bg-[#2294cf]"></div>
            <a href="https://t.me/vdal_ilcaw" target="_blank">@vdal_ilcaw</a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-github w-6 h-6 bg-black dark:bg-white"></div>
            <a href="https://github.com/vladDotH" target="_blank">vladDotH</a>
          </div>
          <div class="contact | flex items-center gap-3 mb-5">
            <div class="i-mdi-vk w-6 h-6 bg-blue-500"></div>
            <a href="https://vk.com/vladdoth" target="_blank">vladdoth</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})
useHead({
  title: 'Контакты',
})
</script>
