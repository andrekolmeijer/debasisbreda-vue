<script setup>
import WelcomeText from './WelcomeText.vue'
import WelcomeBanner from './WelcomeBanner.vue'
import InstagramGrid from './InstagramGrid.vue';
</script>

<template>
  <section class="m-auto max-w-5xl text-inspire-brown-dark">
    <WelcomeBanner class="sm:mx-8" />
    <WelcomeText class="mx-4 sm:mx-8 mt-8" />
    <InstagramGrid class="mt-[20px] sm:mt-0 mx-[6px] sm:mx-[22px] lg:mx-[2px] mb-5"/>
  </section>
</template>
