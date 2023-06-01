<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue';
import IntroductionBlock from './components/IntroductionBlock.vue'
import {me} from './content';
import FlashlightEffect from "@/components/FlashlightEffect.vue";


const svgFiles = Object.keys(import.meta.glob('/public/icons/*.svg'));
const fileNames = svgFiles.map(str =>{
  return str.replace("/public/", "");
})
</script>

<template>
  <div id="app-content">
    <flashlight-effect/>
    <div v-for="src in fileNames" >
      {{src}}
      <img :src="src" :alt="src" style="height: 64px"/>
    </div>
    <div class="l-wrapper" >
      <IntroductionBlock :title="me.title" :work-at="me.workAt" :quote="me.quote"/>
      <SideNavigation></SideNavigation>
    </div>
    <div class="r-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped >
#app-content{
  max-width: 1268px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
}
.l-wrapper{
  position: sticky;
  height: 60vh;
  top:6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
