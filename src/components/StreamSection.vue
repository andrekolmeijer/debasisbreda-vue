<script setup>
import { useDataStore } from '../stores/DataStore'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitch from './icons/IconTwitch.vue'

const { socials } = useDataStore()
</script>

<template>
  <section class="text-inspire-white bg-inspire-brown-light">
    <div class="m-auto px-4 md:px-8 py-16 max-w-5xl">
      <h2 class="text-2xl font-black uppercase tracking-normal text-center">
        Livestream!
      </h2>
      <p class="pt-8 text-base font-light text-center">
        Wordt er bij ons gedraaid? Dan kun je dat <span class="font-semibold underline underline-offset-2">live</span> volgen via <a class="" href="https://www.twitch.tv/basisbreda"><img class=" inline-block h-5" src="../assets/img/TwitchExtrudedWordmarkPurple.png" alt="Twitch logo"></a> of op onze website.
      </p>
      <div class="pt-8 flex items-center justify-center">
        <iframe
          class="rounded-sm aspect-video"
          src="https://player.twitch.tv/?channel=basisbreda&parent=debasisbreda.nl&muted=true"
          width="100%"
          allowfullscreen>
        </iframe>
      </div>
      <p class="pt-8 text-base font-light text-center">Abonneer je op onze socials <span class="font-semibold">om als eerste te weten</span> wanneer er wordt gedraaid!</p>
      <ul class="pt-8 flex items-center justify-center space-x-4 sm:space-x-8">
        <li
          v-for="(social, index) in socials"
          :key="index"
          class="ml-4 transition-opacity duration-200 text-inspire-orange-dark first:ml-0 hover:text-inspire-orange focus:text-inspire-orange active:text-inspire-orange-dark">
          <a
            :href="social.href"
            target="_blank"
            :aria-label="social.label">
            <IconFacebook v-if="social.label == 'facebook'" class="!h-6 !w-6" />
            <IconInstagram v-if="social.label == 'instagram'" class="!h-6 !w-6" />
            <IconTwitch v-if="social.label == 'twitch'" class="!h-6 !w-6" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
