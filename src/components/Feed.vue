<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h3>{{ msg }}</h3>
  <h3>RSS Feed</h3>

  <div>
    <a href="https://feeds.feedburner.com/TechCrunch/">Tech Crunch</a>
  </div>
</template>
