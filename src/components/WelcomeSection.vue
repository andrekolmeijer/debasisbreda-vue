<script setup>
import WelcomeText from './WelcomeText.vue'
import WelcomeBanner from './WelcomeBanner.vue'
import InstagramGrid from './InstagramGrid.vue';
</script>

<template>
  <section class="m-auto max-w-5xl text-inspire-brown-dark">
    <WelcomeBanner class="sm:mx-8" />
    <WelcomeText class="mx-8 mt-8" />
    <InstagramGrid class="mx-[22px] sm:mx-[2px] mb-5"/>
  </section>
</template>
