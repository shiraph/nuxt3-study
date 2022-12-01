<template>
  <li class="mt-10">
    <p class="text-base text-gray-500 dark:text-gray-200">
      {{ article.id }}
    </p>
    <h2 class="py-2 text-4xl text-gray-400">{{ article.title }}</h2>
    <div class="text-gray-500" v-html="article.content"></div>
  </li>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Article } from "~~/composables/models/Article";

defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});
</script>
