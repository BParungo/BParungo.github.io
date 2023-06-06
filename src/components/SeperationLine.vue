<script setup lang="ts">
defineProps<{
  h: string
  color: string
  w?: string
}>()
</script>

<template>
  <div class="line"></div>
</template>

<style scoped>
.line {
  height: v-bind(h);
  background: v-bind(color);
}
</style>
