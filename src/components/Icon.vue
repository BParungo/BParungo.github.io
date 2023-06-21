<script setup lang="ts">
const props = defineProps<{
  path: string
}>()
</script>

<template>
  <div class="container">
    <img class="skill-icon" :src="props.path" :alt="props.path" />
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  background: rgba(var(--accent2), 0.5);
  transition: all 0.33s;
  display: flex;
  border-radius: 0;
  cursor: pointer;
}
.container:hover {
  background: rgba(var(--accent2), 1);
  border-radius: 50px;
}
img {
  margin: auto;
  padding: 0.25rem;
  height: 4rem;
  width: 4rem;
}
</style>
