<template>
  <div class="container">
    <CommonHeader />
    <main class="px-2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: RoobertPRO, RoobertPRO override, sans-serif;
}
</style>

<style scoped>
.container {
  padding-bottom: 100px;
  max-width: 900px;
  margin: 0 auto;
  width: 80%;
}
</style>
