<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { ref } from 'vue'
import { skills } from '@/content'
import type { skillItem } from '@/content'
import ExternalLink from '@/components/ExternalLink.vue'
import BackButton from '@/components/BackButton.vue'
import RowEntry from '@/components/RowEntry.vue'

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
      <div class="icon-detail" v-else-if="currentCard === card.detail">
        <div class="details-title" @click="currentCard = card.overview">
          <back-button />
          <h3>{{ selectedSkillDetails.name }}</h3>
          <Icon :path="selectedSkillPath" />
        </div>
        <RowEntry class="details-text">
          <p>{{ selectedSkillDetails.description }}</p>
          <external-link v-if="selectedSkillDetails.href" :href="selectedSkillDetails.href">
            Mehr zu {{ selectedSkillDetails.name }}
          </external-link>
        </RowEntry>
      </div>
    </transition>
  </div>
</template>

<style scoped>
p {
  width: 100%;
}
.icon-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.details-title {
  display: flex;
}
.details-title h3 {
  margin: auto;
}
.details-text {
  display: block;
  padding: 2rem;
}
.details-text p {
  margin-bottom: 1rem;
}
.transition-container {
  overflow: hidden;
  position: relative;
  perspective: 1200px;
  min-height: 600px;
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
