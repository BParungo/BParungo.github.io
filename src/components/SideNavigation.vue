<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink :to="{ name: 'about' }">über mich</RouterLink>
    <RouterLink :to="{ name: 'experience' }">Laufbahn</RouterLink>
    <RouterLink :to="{ name: 'projects' }">Projekte</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Kontakt</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
a {
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  font-weight: 500;
  max-width: 218px;
}
a:hover {
  transition: color 0.3s;
  color: white;
}
a::before {
  content: '';
  background-color: rgba(var(--accent2), 1);
  width: 1rem;
  height: 1rem;
  border-radius: 2rem;
  margin: auto 0.5rem auto 0;
  transition: all 0.3s ease;
}
a:hover::before,
.router-link-active::before {
  content: '';
  border-radius: 0;
  background-color: white;
  height: 0.2rem;
  width: 5rem;
  margin-right: 0.5rem;
}
.router-link-active {
  font-weight: 700;
  color: white;
}
</style>
