<script lang="ts" setup>
import { experience } from '@/content'
</script>

<template>
  <div class="content">
    <h2>Laufbahn</h2>
    <div v-for="item in experience" :key="item.company">
      <p>{{ item.company }}</p>
      <p>{{ item.technologies }}</p>
      <p>{{ item.position }}</p>
      <p>{{ item.startDate }}</p>
      <p>{{ item.endDate }}</p>
      <p>{{ item.description }}</p>
      <p>{{ item.link }}</p>
    </div>
  </div>
</template>

<style></style>
