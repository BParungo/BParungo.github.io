<script lang="ts" setup>
import { experience } from '@/content'
import RowEntry from '@/components/RowEntry.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import TechChip from '@/components/TechChip.vue'
</script>

<template>
  <div class="content">
    <RowEntry class="text">
      <h2>Meine Ausbildung & Beruflicher Werdegang</h2>
      <p>
        Nach meiner Ausbildung im Einzelhandel habe ich festgestellt, dass dies nicht meine wahre
        Leidenschaft ist. Stattdessen entdeckte ich meine Begeisterung für das Programmieren und das
        Erschaffen eigener kreativer Projekte. Um meine Karriere als kreativer Developer zu
        beginnen, holte ich mein Fachabitur nach und begann ein Studium. Seitdem entwickle ich meine
        Fähigkeiten kontinuierlich weiter und bin motiviert innovative Softwareanwendungen zu
        gestalten und mich in spannende Projekte einzubringen.
      </p>
      <ExternalLink :href="'/Lebenslauf Web Blaine Parungo.pdf'" class="download-btn"
        >Lebenslauf als PDF</ExternalLink
      >
    </RowEntry>
    <div class="entries">
      <RowEntry v-for="item in experience" :key="item.company">
        <div class="entry">
          <div class="timespan">
            <p>{{ item.startDate }} — {{ item.endDate }}</p>
          </div>
          <div class="experience-content">
            <h4>{{ item.position }}</h4>
            <ExternalLink :href="item.link" class="link">{{ item.company }}</ExternalLink>
            <p>{{ item.description }}</p>
          </div>
          <div class="tech-container">
            <TechChip
              v-for="tech in item.technologies"
              :image="tech.filePath"
              :title="tech.name"
              :key="tech.name"
            ></TechChip>
          </div>
        </div>
      </RowEntry>
    </div>
  </div>
</template>

<style scoped>
.text {
  flex-direction: column;
  margin-bottom: 2rem;
}
.link {
  padding: unset !important;
}
.experience-content p {
  margin-top: 1rem;
  white-space: pre-wrap;
}
.tech-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.entry {
  margin: 1rem 0;
}
h2 {
  margin: 1rem 0;
}
.download-btn {
  margin: auto;
}
@media only screen and (min-width: 768px) {
  .download-btn {
    margin: auto auto auto 1rem;
  }
  .entry {
    display: grid;
    grid-template-columns: 10rem auto;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .entries,
  .timespan {
    position: relative;
  }
  .tech-container {
    grid-area: 2/2/3/3;
  }
  .entries::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 1px;
    background: var(--accent3);
    top: 0;
  }
  .timespan::after {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    border-radius: 10rem;
    background: var(--accent3);
    top: 0.25rem;
    left: -1.5rem;
  }
}
</style>
