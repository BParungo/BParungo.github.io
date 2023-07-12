<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
}>()
</script>

<template>
  <div class="tech-chip">
    <img :src="props.image" :alt="props.title" />
    <p>{{ props.title }}</p>
  </div>
</template>

<style scoped>
.tech-chip {
  display: flex;
  border-radius: 5rem;
  background: rgba(var(--accent2), 0.5);
  padding: 0.3rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
img {
  height: 0.75rem;
}
p {
  font-weight: 600;
  font-size: 0.875rem;
  color: rgba(var(--accent));
}
</style>
