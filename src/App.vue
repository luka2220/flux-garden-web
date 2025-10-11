<script setup lang="ts">
// Root vue component

import Feed from "./components/Feed.vue";
</script>

<template>
  <header>
    <h1>Flux Garden Web Client</h1>
  </header>

  <section>
    <Feed msg="Flux garden rss feed reader 🪴" />
  </section>
</template>
