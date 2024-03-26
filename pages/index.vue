<template>
  <section class="content">
    <div class="container mx-auto">
      <div class="prose">
        <h1 class="text-center">Привет!</h1>
        <p>
          Меня зовут Влад, я full-stack разработчик, студент факультета
          компьютерных технологий и информатики СПбГЭТУ "ЛЭТИ" и разработчик в
          ОИС "ЛЭТИ".
        </p>
        <p>
          Я имею многолетний опыт в программировании и разработке ПО различного
          уровня, изучал и разрабатывал приложения на большом количестве языков,
          технологий, работал со множеством библиотек и фреймворков.
        </p>
        <p>
          В моём коммерческом опыте основными инструментами разработки стали
          язык
          <span class="text-blue-500">TypeScript</span>
          и фреймворки
          <span class="text-green-500">Vue</span> и
          <span class="text-red-500">Nest.js</span>. Однако помимо учебной и
          коммерческой деятельности я проявляю интерес, изучал, и продолжаю
          изучать другие языки и технологии, среди которых, например такие языки
          как: <span class="text-violet-700">Haskell</span>,
          <span class="text-orange-700">Rust</span> и
          <span class="text-red-700">Scala</span>
        </p>
        <p>
          <nuxt-link to="projects">Здесь</nuxt-link>
          вы можете ознакомиться с проектами, которые я разрабатывал, и в
          которых принимал участие.
        </p>
        <p>
          Мой Github:
          <a href="https://github.com/vladDotH">
            vladDotH
            <i
              class="inline-block i-mdi:github w-1.4em h-1.4em align-middle bg-black dark:bg-white"
            />
          </a>
        </p>
        <hr />
      </div>
    </div>
  </section>
  <div class="container mx-auto">
    <p class="text-center text-xs my-0 py-5">
      Благодарю автора данного дизайна, за предоставленный шаблон:
      <a href="https://github.com/zuramai/saugi.me"> zuramai/saugi.me </a>
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
})

useHead({
  title: 'Обо мне',
})
</script>
