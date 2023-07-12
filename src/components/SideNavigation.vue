<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink :to="{ name: 'about' }">ÜBER MICH</RouterLink>
    <RouterLink :to="{ name: 'experience' }">ERFAHRUNG</RouterLink>
    <!--RouterLink :to="{ name: 'projects' }">PROJEKTE</RouterLink-->
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
a {
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  font-weight: 400;
  max-width: 218px;
  font-size: 1.125rem;
  opacity: 0.8;
}
a:hover {
  transition: color 0.3s;
  color: white;
  opacity: 1;
}
a::before {
  content: '';
  background-color: rgba(var(--accent2), 1);
  width: 1rem;
  height: 1rem;
  border-radius: 2rem;
  margin: auto 0.5rem auto 0;
  transition: all 0.3s ease;
  opacity: 1;
}
a:hover::before,
.router-link-active::before {
  content: '';
  border-radius: 0;
  background-color: white;
  height: 1px;
  width: 5rem;
  margin-right: 0.5rem;
}
.router-link-active {
  font-weight: 800;
  color: white;
  opacity: 1;
}
</style>
