<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue';
import IntroductionBlock from './components/IntroductionBlock.vue'
import {me} from './content';
import { onMounted, ref } from 'vue';




//#region flashlighteffect
const cursorX = ref('0px');
const cursorY = ref('0px')

function updateCoordinates(event:MouseEvent) {
      cursorX.value = event.clientX+'px';
      cursorY.value = event.clientY+'px';
      }

onMounted(()=>{
  document.addEventListener("mousemove", (event) => {
    updateCoordinates(event)
				});
})
//#endregion flashlighteffect 

</script>

<template>
  <div id="app-content">
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
  max-width: 1268px;;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
}
#app-content::before{
  content: "";
  background: radial-gradient(circle farthest-side at center center, #ffffff 24%, var(--color-background) 35%, #9b9b9b 70%, transparent 90%);
  z-index: -1;
  width: 800px;
  height: 800px;
  opacity: .02;
  position: absolute;
  left: v-bind('cursorX');
  top: v-bind('cursorY');
  transform: translate(-50%,-50%);
}
.l-wrapper{
  position: sticky;
  height: 60vh;
  top:5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
