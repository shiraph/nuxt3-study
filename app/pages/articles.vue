<template>
  <ul>
    <CardArticle v-for="article in articles.state" :article="article" />
  </ul>
</template>

<script setup lang="ts">
import { ArticlesStore } from "~~/composables/articles";
const articles: ArticlesStore = await useArticles();
</script>
