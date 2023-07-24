<script setup>
import { RouterView } from 'vue-router'
import { useDataStore } from '@/stores/DataStore'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconInstagram from './components/icons/IconInstagram.vue'
import IconMenu from './components/icons/IconMenu.vue'
import IconContact from './components/icons/IconContact.vue'
import smoothscroll from 'smoothscroll-polyfill'
import WelcomeAlert from './components/WelcomeAlert.vue';
import IconTwitch from './components/icons/IconTwitch.vue'

smoothscroll.polyfill()
const { socials } = useDataStore()
</script>

<template>
  <WelcomeAlert />
  <header class="m-auto flex max-w-5xl items-center justify-between px-4 py-8 md:px-8">
    <div class="h-10 pr-8 shrink grow-0">
      <img
        class="h-full object-cover hidden sm:block"
        src="./assets/img/Logo_DeBasis_bDeBasis_Cyan_Cyan_Dark.webp"
        alt="Logo De Basis" />
      <img
        class="h-full object-cover sm:hidden"
        src="./assets/img/Logo_DeBasis_b_Cyan.webp"
        alt="Logo De Basis" />
    </div>
    <nav class="pt-[12px] shrink-0 grow sm:shrink sm:grow-0">
      <ul class="flex items-center justify-between">
        <div class="hidden sm:flex items-center space-x-4 sm:space-x-8">
          <li>
            <a
              class="py-1 transition-colors duration-200 font-semibold text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
              href="#menu"
              rel="nofollow">
              Menu
            </a>
          </li>
          <li class="sm:pr-8">
            <a
              class="py-1 transition-colors duration-200 font-semibold text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
              href="#contact"
              rel="nofollow">
              Contact
            </a>
          </li>
        </div>
        <div class="flex sm:hidden items-center space-x-4 sm:space-x-8">
          <li>
            <a
              class="py-4 transition-colors duration-200 text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
              href="#menu">
              <IconMenu class="!h-6 !w-6" />
            </a>
          </li>
          <li class="pr-4">
            <a
              class="py-4 transition-colors duration-200 text-inspire-orange-dark hover:text-inspire-brown-light focus:text-inspire-brown-light active:text-inspire-orange-dark"
              href="#contact">
              <IconContact class="!h-6 !w-6" />
            </a>
          </li>
        </div>
        <div class="flex items-center space-x-4 sm:space-x-8">
          <li
            v-for="(social, index) in socials"
            :key="index"
            class="ml-4 transition-opacity duration-200 text-inspire-brown-light first:ml-0 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-light">
            <a
              :href="social.href"
              target="_blank"
              :aria-label="social.label">
              <IconFacebook v-if="social.label == 'facebook'" class="!h-6 !w-6" />
              <IconInstagram v-if="social.label == 'instagram'" class="!h-6 !w-6" />
              <IconTwitch v-if="social.label == 'twitch'" class="!h-6 !w-6" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
