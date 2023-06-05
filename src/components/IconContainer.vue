<script setup lang="ts">
import Icon from "@/components/Icon.vue";
import { ref } from "vue";
import { skillItem, skillsDescription } from "@/content";

const svgFiles = Object.keys(import.meta.glob('/public/icons/*.{svg,png}'));
const paths = svgFiles.map(str =>{
  return str.replace("/public/", "");
})
enum card{
  overview = 1,
  detail = 2,
}
const currentCard = ref(card.overview);
const selectedSkillDetails = ref<skillItem>({} as skillItem);
const selectedSkillPath = ref('');
function goToDetails(content){
  selectedSkillPath.value = content
  selectedSkillDetails.value = skillsDescription(content);
  currentCard.value = card.detail;
}
</script>

<template>
  <p> Skillset </p>
  <div class="line"></div>
  <div class="transition-container">
  <transition name="rotate" >
    <div class="icon-container" v-if="currentCard === card.overview">
      <Icon v-for="path in paths" :path="path" @click="goToDetails(path)"/>
    </div>
    <div class="icon-detail" v-else-if="currentCard === card.detail" @click="currentCard = card.overview">
      <Icon :path="selectedSkillPath"/>
        <h2>{{ selectedSkillDetails.name }}</h2>
        <p>{{ selectedSkillDetails.description }}</p>
        <a v-if="selectedSkillDetails.href" :href="selectedSkillDetails.href">Link to {{ selectedSkillDetails.name}}</a>
    </div>
  </transition>
  </div>
  <div class="line"></div>
</template>

<style scoped>
  p{
    width: 100%;
  }
  .icon-container{
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    height: 600px;
  }
  .transition-container{
    overflow: hidden;
    position: relative;
    perspective: 1200px;
  }
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all .6s ease;
  }
  .rotate-leave-to {
    transform: rotateY(-180deg);
    position: absolute;
    opacity: 0;
  }
  .rotate-enter-from {
    opacity: 0;
    transform: rotateY(180deg);
    position: absolute;
  }
</style>