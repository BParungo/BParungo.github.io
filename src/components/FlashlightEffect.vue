<script setup lang="ts">
import { onMounted, ref } from 'vue'

const cursorX = ref('0px')
const cursorY = ref('0px')
const flashlight = ref()
function updateCoordinates(event: MouseEvent) {
  cursorX.value = event.x + 'px'
  cursorY.value = event.y + 'px'
}

onMounted(() => {
  document.addEventListener('mousemove', (event) => {
    updateCoordinates(event)
  })
})
</script>

<template>
  <div class="content">
    <div ref="flashlight" class="flashlight-effect"></div>
  </div>
</template>

<style scoped>
.content {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.flashlight-effect {
  background: radial-gradient(
    circle farthest-side at center center,
    #ffffff 24%,
    var(--color-background) 35%,
    #9b9b9b 70%,
    transparent 90%
  );
  width: 800px;
  filter: blur(70px);
  height: 800px;
  opacity: 0.1;
  position: absolute;
  left: v-bind('cursorX');
  top: v-bind('cursorY');
  overflow: hidden;
  transform: translate(-50%, -50%);
}
</style>
