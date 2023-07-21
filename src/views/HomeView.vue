<script setup>
import WelcomeSection from '../components/WelcomeSection.vue'
import MenuSection from '../components/MenuSection.vue'
import FooterSection from '../components/FooterSection.vue'
import StructuredData from '../components/StructuredData.vue'
import StreamSection from '../components/StreamSection.vue';
</script>

<template>
  <main>
    <WelcomeSection />
    <StreamSection />
    <MenuSection />
  </main>
  <FooterSection />
  <StructuredData />
</template>
