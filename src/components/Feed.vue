<script setup lang="ts">
import { ref } from "vue";
import { RssFeedMock } from "../mocks/_feed";

// props
defineProps<{ msg: string }>();

const feed = ref(RssFeedMock);
const createFeed = ref<{ name: string; link: string }>({ name: "", link: "" });

function addToFeed() {
  const { link } = createFeed.value;

  if (!link.startsWith("https://")) {
    throw new Error("Invalid link");
  }

  createFeed.value = { link: "", name: "" };
}
</script>

<template>
  <h3>{{ msg }}</h3>
  <h3>RSS Feed</h3>

  <!-- RSS Form UI -->
  <form @submit.prevent="addToFeed">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="createFeed.name" />

    <label for="link">Link</label>
    <input id="link" type="text" v-model="createFeed.link" />

    <button type="submit">Add</button>
  </form>

  <!-- RSS Feed UI -->
  <div id="feed-container" v-for="item in feed">
    <h3>{{ item.name }}</h3>
    <a :href="`${item.link}`">rss</a>
  </div>
</template>

<style></style>
