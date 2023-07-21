<script setup>
import { useDataStore } from '../stores/DataStore'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import FooterHeading from './FooterHeading.vue'

const { socials } = useDataStore()
</script>

<template>
  <FooterHeading>
    <template #heading>Social</template>
    <nav class="text-inspire-orange-dark">
      <ul class="flex">
        <li
          v-for="(social, index) in socials"
          :key="index"
          class="ml-4 transition-opacity duration-200 text-inspire-brown-light first:ml-0 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-brown-light">
          <a
            :href="social.href"
            target="_blank"
            :aria-label="social.label">
            <IconFacebook v-if="social.label == 'facebook'" />
            <IconInstagram v-if="social.label == 'instagram'" />
          </a>
        </li>
      </ul>
    </nav>
  </FooterHeading>
</template>
