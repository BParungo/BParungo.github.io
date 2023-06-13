<script setup lang="ts">
defineProps<{
  title: string
  workAt: string
}>()
</script>

<template>
  <div>
    <h1>Blaine Parungo</h1>
    <h2>{{ title }}</h2>
    <h3>{{ workAt }}</h3>
  </div>
</template>

<style scoped>
h3 {
  margin-top: 1rem;
}
p {
  margin-top: 3rem;
}
</style>
