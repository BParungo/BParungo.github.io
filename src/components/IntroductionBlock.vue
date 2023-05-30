<script setup lang="ts">
defineProps<{
  title: string;
  workAt: string;
  quote: string;
}>()
</script>

<template>
  <div>
    <h1>Blaine Parungo</h1>
    <h2>{{ title }}</h2>
    <h3>{{ workAt }}</h3>
    <p>{{ quote }}</p>
  </div>
</template>

<style scoped>
p{
  margin-top: 2rem;
}
</style>
