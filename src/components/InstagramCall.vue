<script setup>
import InstagramButton from './InstagramButton.vue'
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-6 p-8 text-center sm:flex-row sm:gap-8">
    <p class="font-light tracking-wide">
      Volg
      <a
        href="https://www.instagram.com/debasisbreda/"
        target="_blank"
        aria-label="instagram"
        class="bg-gradient-to-r from-[#2A636F] via-[#2A636F] to-[#2A636F] bg-clip-text font-semibold text-transparent">
        @debasisbreda</a
      >
      om als eerste op de hoogte te zijn van onze acties, specials en
      ontwikkelingen!
    </p>
    <InstagramButton />
  </div>
</template>
