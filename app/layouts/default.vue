<template>
  <div class="container">
    <CommonHeader />
    <main>
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
  max-width: 900px;
  margin: 0 auto;
  width: 80%;
}
</style>
