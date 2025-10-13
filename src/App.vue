<script setup lang="ts">
// Root vue component

import Feed from "./components/Feed.vue";
</script>

<template>
  <header class="bg-flux-dark-blue text-flux-beige p-4">
    <h1 class="text-2xl">Flux Garden Web Client</h1>
  </header>

  <section class="p-4 flex flex-col items-center">
    <Feed msg="Flux garden rss feed reader 🪴" />
  </section>
</template>
