<script setup lang="ts">
import IconContainer from '@/components/IconContainer.vue'
import { me } from '@/content'
import SeperationLine from '@/components/SeperationLine.vue'
import RowEntry from '@/components/RowEntry.vue'
</script>
<template>
  <div class="me-container">
    <RowEntry>
      <div>
        <h2>{{ me.hello }}</h2>
        <p>{{ me.introduction }}</p>
      </div>
      <img class="right" :src="'img/Logo.svg'" alt="BParungo-Image" />
    </RowEntry>
    <seperation-line color="rgb(var(--accent))" h="1px" />
    <RowEntry>
      <img class="right" :src="'img/frontendIcon.svg'" alt="frontend-icon" />
      <p>{{ me.frontendText }}</p>
    </RowEntry>
    <RowEntry>
      <p>{{ me.uxText }}</p>
      <img class="left" :src="'img/designIcon.svg'" alt="design-icon" />
    </RowEntry>
    <seperation-line color="rgb(var(--accent))" h="1px" />
    <RowEntry>
      <div>
        <p>{{ me.text }}</p>
      </div>
    </RowEntry>
    <IconContainer></IconContainer>
    <seperation-line color="rgb(var(--accent))" h="1px" />
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
  height: 6rem;
  width: 6rem;
  margin: auto;
}
.left {
  margin-left: 0;
}
.right {
  margin-right: 0;
}
p {
  word-break: break-word;
}
</style>
