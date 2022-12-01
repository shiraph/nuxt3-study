<template>
  <header class="p-10 rounded-lg">
    <h1
      class="text-4xl font-bold text-gray-500 uppercase text-center"
    >
      {{ headerText }}
    </h1>
    <nav class="text-center mt-5">
      <NuxtLink class="text-gray-500 mr-4" to="/">Top</NuxtLink>
      <NuxtLink class="text-gray-500" to="articles">Articles</NuxtLink>
    </nav>
    <img src="/img/dora.png" class="img" />
  </header>
</template>

<script setup lang="ts">
const path = location.pathname.replace("/", "");
const headerText = "Nuxt3 Study" + (!path.length ? "" : " - " + path);
</script>
<style>
.img {
  width: 100px;
  margin:10px auto;
}
</style>
