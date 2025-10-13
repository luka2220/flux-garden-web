<script setup lang="ts">
import { ref } from "vue";
import { RssFeedMock, type RssType } from "../mocks/_feed";

// props
defineProps<{ msg: string }>();

// State
const feed = ref(RssFeedMock);
const createFeed = ref({ name: "", link: "" });

function addToFeed() {
  const { name, link } = createFeed.value;

  if (!link.startsWith("https://")) {
    throw new Error("Invalid link, must be https");
  }

  const rssFeed = {
    name,
    link,
  } as RssType;

  feed.value.push(rssFeed);

  createFeed.value = { link: "", name: "" };
}
</script>

<template>
  <h3 class="text-3xl text-flux-green mt-3">{{ msg }}</h3>

  <!-- RSS Form UI -->
  <form class="mt-10" @submit.prevent="addToFeed">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="createFeed.name" />

    <label for="link">Link</label>
    <input id="link" type="text" v-model="createFeed.link" />

    <button type="submit">Save</button>
  </form>

  <!-- RSS Feed UI -->
  <div
    class="w-3/4 mx-auto border-4 border-flux-light-blue rounded-xl mt-14 bg-flux-green"
  >
    <div
      class="h-24 flex flex-row items-center p-5"
      :class="index + 1 !== feed.length && 'border-b-4 border-flux-brown'"
      v-for="(item, index) in feed"
      :key="index"
    >
      <p class="title-theme px-2">{{ item.name }}</p>
      <a class="rss-link px-2" :href="`${item.link}`" target="_blank">rss</a>
    </div>
  </div>
</template>
