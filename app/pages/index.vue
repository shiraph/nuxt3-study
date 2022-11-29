<template>
  <div>
    <h1>{{ count }}</h1>
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
