<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from 'vue';
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
</script>

<template>
  <div id="appcontent">
    <div class="wrapper" >
      <p>{{ [cursorX,cursorY] }}</p>
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  <RouterView />
</div>
</template>

<style scoped >
.wrapper{
  max-width: 1128px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
#appcontent{
  height: 100%;
  position: relative;
  overflow: hidden;
}
#appcontent::before{
  content: "";
  background: radial-gradient(at right center, #4CCEEB, #6777A2);;
  width: 100px;
  height: 100px;
  position: absolute;
  left: v-bind('cursorX');
  top: v-bind('cursorY');
  transform: translate(-50%,-50%);
}
</style>
