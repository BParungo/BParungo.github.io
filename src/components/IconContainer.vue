<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { ref } from 'vue'
import { skills } from '@/content'
import type { skillItem } from '@/content'
import ExternalLink from '@/components/ExternalLink.vue'
import SeparationLine from '@/components/SeperationLine.vue'

enum card {
  overview = 1,
  detail = 2
}
const currentCard = ref(card.overview)
const selectedSkillDetails = ref<skillItem>({} as skillItem)
const selectedSkillPath = ref('')
function goToDetails(skill: skillItem) {
  selectedSkillDetails.value = skill
  selectedSkillPath.value = skill.filePath
  currentCard.value = card.detail
}
</script>

<template>
  <p>Skillset</p>
  <separation-line h="5px" color="var(--accent)" />
  <div class="transition-container">
    <transition name="rotate">
      <div class="icon-container" v-if="currentCard === card.overview">
        <Icon
          v-for="skill in skills"
          :path="skill.filePath"
          @click="goToDetails(skill)"
          :key="skill.name"
        />
      </div>
      <div
        class="icon-detail"
        v-else-if="currentCard === card.detail"
        @click="currentCard = card.overview"
      >
        <Icon :path="selectedSkillPath" />
        <h2>{{ selectedSkillDetails.name }}</h2>
        <p>{{ selectedSkillDetails.description }}</p>
        <external-link v-if="selectedSkillDetails.href" :href="selectedSkillDetails.href">
          Link to {{ selectedSkillDetails.name }}
        </external-link>
      </div>
    </transition>
  </div>
  <separation-line h="5px" color="var(--accent)" />
</template>

<style scoped>
p {
  width: 100%;
}
.icon-container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.transition-container {
  overflow: hidden;
  position: relative;
  perspective: 1200px;
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.6s ease;
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
