<template>
  <li>
    <p>{{ article.id }}</p>
    <h3>{{ article.title }}</h3>
    <div v-html="article.content"></div>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "~~/composables/models/Article";

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});
</script>
