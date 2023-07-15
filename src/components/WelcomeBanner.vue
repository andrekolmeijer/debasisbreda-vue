<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndLarger = breakpoints.greater('sm')
</script>

<template>
  <div class="overflow-hidden sm:rounded-sm">
    <img
      v-if="smAndLarger"
      class="h-[225px] w-full object-cover object-top"
      src="../assets/img/banner.jpg"
      alt="Vooraanzicht van De Basis Breda" />
    <img
      v-else
      class="h-48 w-full object-cover object-top"
      src="../assets/img/banner-mobile.jpg"
      alt="Vooraanzicht van De Basis Breda" />
  </div>
</template>
