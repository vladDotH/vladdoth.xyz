<template>
  <nav>
    <div class="navbar__brand | text-center flex justify-center py-3 px-8">
      <div class="w-1/3" />
      <h3 class="w-1/3 text-xl my-0 flex items-center justify-center">
        <router-link to="/" class="decoration-none | dark:text-white!">
          VladDotH
        </router-link>
      </h3>
      <div class="w-1/3 flex justify-end gap-3 items-center">
        <a
          href="#"
          class="navbar__link | p-2! md:hidden block"
          @click.prevent="toggleDark()"
        >
          <div v-if="isDark" class="text-xl i-mdi-weather-night" />
          <div v-else class="text-xl i-mdi-lightbulb-on-outline" />
        </a>
        <button
          class="p-2 bg-transparent border-none md:hidden inline-block"
          type="button"
          name="toggle-menu"
          aria-label="Toggle Menu"
          @click="isNavbarOpen = !isNavbarOpen"
        >
          <div class="i-mdi-menu text-xl" />
        </button>
      </div>
    </div>
    <div class="navbar__menu">
      <ul
        v-show="isNavbarOpen"
        class="flex decoration-none list-none gap-5 justify-center p-0 flex-col md:flex-row text-right pr-8 lg:p-0 lg:text-center"
      >
        <li class="navbar__item">
          <nuxt-link to="/" class="navbar__link">Обо мне</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/projects" class="navbar__link">Проекты</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/publications" class="navbar__link">
            Публикации
          </nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link to="/contact" class="navbar__link">Контакты</nuxt-link>
        </li>
        <li class="navbar__item">
          <a
            href="#"
            class="navbar__link | p-0! hidden md:block"
            @click.prevent="toggleDark()"
          >
            <div v-if="isDark" class="i-mdi-weather-night" />
            <div v-else class="i-mdi-lightbulb-on-outline" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle, useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const isNavbarOpen = ref(true)

watchEffect(() => {
  isNavbarOpen.value = width.value > 768
})

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)
</script>

<style lang="postcss">
.navbar__link {
  padding: 0.5rem;
  text-decoration: none;
}
.navbar__link.router-link-active {
  @apply dark:text-gray-50;
  border-bottom: 1px solid;
}
</style>
