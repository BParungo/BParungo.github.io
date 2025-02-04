<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer"><slot /></a>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: 600;
  color: var(--accent3);
  position: relative;
  padding: 0 0.5rem;
}
a:before {
  background: var(--color-text);
  content: '';
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.33s ease-in-out;
  z-index: -1;
}
a:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
