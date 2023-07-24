<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <div class="overflow-hidden sm:rounded-lg">
    <img
      v-if="smAndLarger"
      class="w-full object-cover object-top"
      src="../assets/img/profile_banner-480.webp"
      alt="Vooraanzicht van De Basis Breda" />
    <img
      v-else
      class="h-52 w-full object-cover object-top"
      src="../assets/img/profile_banner-480.webp"
      alt="Vooraanzicht van De Basis Breda" />
  </div>
</template>
