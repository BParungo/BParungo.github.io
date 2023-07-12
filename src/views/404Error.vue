<script setup lang="ts">
import ExternalLink from '@/components/ExternalLink.vue'
</script>
<template>
  <div class="content">
    <h1>404</h1>
    <p>Hier gibt es leider nichts zu sehen.</p>
    <ExternalLink :href="'/'">zurück zum Anfang</ExternalLink>
  </div>
</template>

<style scoped>
.content {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}
</style>
