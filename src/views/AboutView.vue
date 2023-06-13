<script setup lang="ts">
import IconContainer from '@/components/IconContainer.vue'
import { me } from '@/content'
import SeperationLine from '@/components/SeperationLine.vue'
</script>
<template>
  <div class="me-container">
    <div class="card">
      <div>
        <h2>{{ me.hello }}</h2>
        <p>{{ me.introduction }}</p>
      </div>
      <img src="img/Logo.svg" alt="BParungo-Image" />
    </div>
    <seperation-line color="rgb(var(--accent))" h="1px" />
    <div class="card">
      <div>
        <span>{{ me.frontendText }}</span>
      </div>
    </div>
    <div class="card">
      <div>
        <span>{{ me.uxText }}</span>
      </div>
    </div>
    <div class="card">
      <div>
        <span>{{ me.text }}</span>
      </div>
    </div>
    <IconContainer class="icon-container"></IconContainer>
  </div>
</template>

<style scoped>
img {
  height: 15rem;
  border-radius: 1rem;
}
.me-container {
  display: grid;
  gap: 1rem;
}

h2::first-letter {
  font-size: 2rem;
}
img {
  float: right;
  height: 9rem;
  margin: auto;
}
p {
  word-break: break-word;
}
.card {
  padding: 1rem;
  display: flex;
  border-radius: 4px;
  transition: background-color 0.33s ease-in-out;
}
.card:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
