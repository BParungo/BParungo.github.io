<script setup lang="ts">
defineProps<{
  h: string
  color: string
  w?: 'auto' | string
}>()
</script>

<template>
  <div class="line"></div>
</template>

<style scoped>
.line {
  height: v-bind(h);
  background: v-bind(color);
  width: v-bind(w);
}
</style>
