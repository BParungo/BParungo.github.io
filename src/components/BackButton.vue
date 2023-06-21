<script setup lang="ts">
import ArrowComponent from '@/components/ArrowComponent.vue'
import { ref } from 'vue'

const hover = ref(false)
</script>

<template>
  <div class="back-button" @mouseover="hover = true" @mouseleave="hover = false">
    <transition mode="out-in">
      <ArrowComponent v-if="!hover" :color="'rgb(var(--accent2))'" />
      <ArrowComponent v-else color="var(--color-background)" />
    </transition>
  </div>
</template>

<style scoped>
.back-button:hover {
  background: rgba(var(--accent2), 1);
  border-radius: 50px;
}
.back-button {
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  background: rgba(var(--accent2), 0.5);
  transition: all 0.33s;
  display: flex;
  border-radius: 0;
  cursor: pointer;
  position: relative;
}
</style>
