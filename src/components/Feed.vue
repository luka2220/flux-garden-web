<script setup lang="ts">
import { computed, ref } from "vue";
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

const greaterThan20 = computed(() => {
  return feed.value.length > 20 ? "Yes" : "No";
});
</script>

<template>
  <h3>{{ msg }}</h3>
  <h3>RSS Feed</h3>

  <div>
    <h3>Is feed greater than 20</h3>
    <p>{{ greaterThan20 }}</p>
  </div>

  <!-- RSS Form UI -->
  <form @submit.prevent="addToFeed">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="createFeed.name" />

    <label for="link">Link</label>
    <input id="link" type="text" v-model="createFeed.link" />

    <Button type="submit" label="Save" icon="pi pi-check" iconPos="right" />
  </form>

  <!-- RSS Feed UI -->
  <DataView :value="feed" layout="list">
    <template #list="slotProps">
      <div class="flex flex-col">
        <div v-for="(item, index) in feed" :key="index">
          <h3>{{ item.name }}</h3>
          <a :href="`${item.link}`">rss</a>
        </div>
      </div>
    </template>
  </DataView>
</template>
