<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const count: Ref<number> = ref(0);
const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<style scoped>
div {
  margin: 0 auto;
  text-align: center;
  width: fit-content;
}

p {
  color: rgb(158, 146, 146);
  font-size: 3rem;
}

button {
  border-radius: 0.5rem;
  background-color: rgb(233, 225, 225);
  color: rgb(158, 146, 146);
  padding: 5px 20px;
}

button + button {
  margin-left: 20px;
}
</style>
