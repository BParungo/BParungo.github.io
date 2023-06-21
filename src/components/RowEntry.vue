<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  display: flex;
  border-radius: 4px;
  gap: 1rem;
  transition: background-color 0.33s ease-in-out;
}
.card:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
