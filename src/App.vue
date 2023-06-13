<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue'
import IntroductionBlock from './components/IntroductionBlock.vue'
import { me } from '@/content'
import FlashlightEffect from '@/components/FlashlightEffect.vue'
import SeperationLine from '@/components/SeperationLine.vue'
</script>

<template>
  <div id="app-content">
    <flashlight-effect />
    <div class="l-wrapper">
      <IntroductionBlock :title="me.title" :work-at="me.workAt" />
      <seperation-line color="var(--accent)" h="5px" w="3rem" class="line" />
      <SideNavigation></SideNavigation>
    </div>
    <div class="r-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#app-content {
  max-width: 1268px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
}
.l-wrapper {
  position: sticky;
  height: 60vh;
  top: 6rem;
  display: flex;
  flex-direction: column;
}
.line {
  margin-top: 1rem;
  margin-bottom: 4rem;
}
</style>
