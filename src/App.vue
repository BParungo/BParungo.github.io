<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue'
import IntroductionBlock from './components/IntroductionBlock.vue'
import { me } from '@/content'
import FlashlightEffect from '@/components/FlashlightEffect.vue'
import SeperationLine from '@/components/SeperationLine.vue'
import AboutView from '@/views/AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
</script>

<template>
  <div id="app-content">
    <flashlight-effect />
    <div class="l-wrapper">
      <IntroductionBlock :title="me.title" :work-at="me.workAt" />
      <seperation-line color="rgb(var(--accent))" h="5px" w="3rem" class="line" />
      <SideNavigation class="desktop-nav"></SideNavigation>
    </div>
    <div class="r-wrapper desktop-nav">
      <RouterView />
    </div>
    <div class="r-wrapper mobile-nav">
      <AboutView />
      <ExperienceView />
      <ProjectsView />
      <ContactView />
    </div>
  </div>
</template>

<style scoped>
#app-content {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100vw;
}
.l-wrapper {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.r-wrapper {
  padding: 1rem;
}
.line {
  margin-top: 1rem;
  margin-bottom: 4rem;
}
.desktop-nav {
  display: none;
}
.mobile-nav {
  display: block;
}
@media only screen and (min-width: 768px) {
  #app-content {
    max-width: 1268px;
    padding: 6rem 2rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  .l-wrapper {
    top: 6rem;
    position: sticky;
    height: 70vh;
  }
  .desktop-nav {
    display: block;
  }
  .mobile-nav {
    display: none;
  }
}

@media only screen and (min-width: 1000px) {
  #app-content {
    gap: 3rem;
  }
}
</style>
